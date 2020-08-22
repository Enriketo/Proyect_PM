import MysqlLib from '../lib/mysql';

class AppointmentsService{
    constructor () {
        this.collection = 'Appointments';
        this.mysqlDB = new MysqlLib();
    }
    async getAppointments({ tags }){
        const query = tags &&  { tags: { $in: tags }};
        const appointments = await this.mysqlDB.getAll(this.collection, query);
        return appointments || [];
    }
    async getAppointment({ id }){
        const appointment = await this.mysqlDB.get(this.collection, id);
        return appointment || {};
    }
    async createAppointment({ appointment }){
        const createdAppointmentId = await this.mysqlDB.create(this.collection, appointment);
        return createdAppointmentId;
    }
    async updateAppointment({ id, appointment } = {}){
        const updatedAppointmentsId = await this.mysqlDB.update(this.collection, id, appointment);
        return updatedAppointmentsId;
    }
    async deleteAppointment({ id }){
        const deletedAppointmentId = await this.mysqlDB.delete(this.collection, id);
        return deletedAppointmentId;
    }
}


export default AppointmentsService;