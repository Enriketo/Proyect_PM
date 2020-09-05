const MongoLib = require('../lib/mongo');

class PresentialAppointmentService{
    constructor () {
        this.collection = 'PresentialAppointment';
        this.mongoDB = new MongoLib();
    }
    async getPresentialAppointments({ tags }){
        const query = tags &&  { tags: { $in: tags }};
        const presentialAppointments = await this.mongoDB.getAll(this.collection, query);
        return presentialAppointments || [];
    }
    async getPresentialAppointment({ id }){
        const presentialAppointment = await this.mongoDB.get(this.collection, id);
        return presentialAppointment || {};
    }
    async createPresentiaAppointment({ presentialAppointment }){
        const createdPresentialAppointmentId = await this.mongoDB.create(this.collection, presentialAppointment);
        return createdPresentialAppointmentId;
    }
    async updatePresentialAppointment({ id, presentialAppointment } = {}){
        const updatedPresentialAppointmentId = await this.mongoDB.update(this.collection, id, presentialAppointment);
        return updatedPresentialAppointmentId;
    }
    async deletePresentialAppointment({ id }){
        const deletedPresentialAppointmentId = await this.mongoDB.delete(this.collection, id);
        return deletedPresentialAppointmentId;
    }
}


module.exports = PresentialAppointmentService;