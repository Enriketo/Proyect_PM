const MongoLib = require('../lib/mongo');

class OnlineAppointmentsService{
    constructor () {
        this.collection = 'OnlineAppointments';
        this.mongoDB = new MongoLib();
    }
    async getOnlineAppointments({ tags }){
        const query = tags &&  { tags: { $in: tags }};
        const onlineAppointments = await this.mongoDB.getAll(this.collection, query);
        return onlineAppointments || [];
    }
    async getOnlineAppointment({ id }){
        const onlineAppointment = await this.mongoDB.get(this.collection, id);
        return onlineAppointment || {};
    }
    async createOnlineAppointment({ establishmentDoctor }){
        const createdOnlineAppointmentId = await this.mongoDB.create(this.collection, onlineAppointment);
        return createdOnlineAppointmentId;
    }
    async updateOnlineAppointment({ id, establishmentDoctor } = {}){
        const updatedOnlineAppointmentId = await this.mongoDB.update(this.collection, id, onlineAppointment);
        return updatedOnlineAppointmentId;
    }
    async deleteOnlineAppointment({ id }){
        const deletedOnlineAppointmentId = await this.mongoDB.delete(this.collection, id);
        return deletedOnlineAppointmentId;
    }
}


module.exports = OnlineAppointmentsService;