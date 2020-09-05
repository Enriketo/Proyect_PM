const MongoLib = require('../lib/mongo');

class AppointmentsService{
    constructor () {
        this.collection = 'Appointments';
        this.mongoDB = new MongoLib();
    }
    async getAppointments({ tags }){
        const query = tags &&  { tags: { $in: tags }};
        const appointments = await this.mongoDB.getAll(this.collection, query);
        return appointments || [];
    }
    async getAppointment({ id }){
        const appointment = await this.mongoDB.get(this.collection, id);
        return appointment || {};
    }
    async createAppointment({ appointment }){
        const createdAppointmentId = await this.mongoDB.create(this.collection, appointment);
        return createdAppointmentId;
    }
    async updateAppointment({ id, appointment } = {}){
        const updatedAppointmentsId = await this.mongoDB.update(this.collection, id, appointment);
        return updatedAppointmentsId;
    }
    async deleteAppointment({ id }){
        const deletedAppointmentId = await this.mongoDB.delete(this.collection, id);
        return deletedAppointmentId;
    }
}


module.exports = AppointmentsService;