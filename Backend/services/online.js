import MysqlLib from '../lib/mysql';

class OnlineAppointmentsService{
    constructor () {
        this.collection = 'OnlineAppointments';
        this.mysqlDB = new MysqlLib();
    }
    async getOnlineAppointments({ tags }){
        const query = tags &&  { tags: { $in: tags }};
        const onlineAppointments = await this.mysqlDB.getAll(this.collection, query);
        return onlineAppointments || [];
    }
    async getOnlineAppointment({ id }){
        const onlineAppointment = await this.mysqlDB.get(this.collection, id);
        return onlineAppointment || {};
    }
    async createOnlineAppointment({ establishmentDoctor }){
        const createdOnlineAppointmentId = await this.mysqlDB.create(this.collection, onlineAppointment);
        return createdOnlineAppointmentId;
    }
    async updateOnlineAppointment({ id, establishmentDoctor } = {}){
        const updatedOnlineAppointmentId = await this.mysqlDB.update(this.collection, id, onlineAppointment);
        return updatedOnlineAppointmentId;
    }
    async deleteOnlineAppointment({ id }){
        const deletedOnlineAppointmentId = await this.mysqlDB.delete(this.collection, id);
        return deletedOnlineAppointmentId;
    }
}


export default OnlineAppointmentsService;