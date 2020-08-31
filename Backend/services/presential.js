import MysqlLib from '../lib/mysql';

class PresentialAppointmentService{
    constructor () {
        this.collection = 'PresentialAppointment';
        this.mysqlDB = new MysqlLib();
    }
    async getPresentialAppointments({ tags }){
        const query = tags &&  { tags: { $in: tags }};
        const presentialAppointments = await this.mysqlDB.getAll(this.collection, query);
        return presentialAppointments || [];
    }
    async getPresentialAppointment({ id }){
        const presentialAppointment = await this.mysqlDB.get(this.collection, id);
        return presentialAppointment || {};
    }
    async createPresentiaAppointment({ presentialAppointment }){
        const createdPresentialAppointmentId = await this.mysqlDB.create(this.collection, presentialAppointment);
        return createdPresentialAppointmentId;
    }
    async updatePresentialAppointment({ id, presentialAppointment } = {}){
        const updatedPresentialAppointmentId = await this.mysqlDB.update(this.collection, id, presentialAppointment);
        return updatedPresentialAppointmentId;
    }
    async deletePresentialAppointment({ id }){
        const deletedPresentialAppointmentId = await this.mysqlDB.delete(this.collection, id);
        return deletedPresentialAppointmentId;
    }
}


export default PresentialAppointmentService;