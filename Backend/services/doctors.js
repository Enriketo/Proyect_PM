//const MongoLib = require ('../lib/mongo');
const MongoLib = require('../lib/mongo');

class DoctorsService{
    constructor () {
        this.collection = 'Doctors';
        this.mongoDB = new MongoLib();
    }
    async getDoctors({ tags }){
        const query = tags &&  { tags: { $in: tags }};
        const Doctors = await this.mongoDB.getAll(this.collection, query);
        return Doctors || [];
    }
    async getDoctor({ id }){
        const doctor = await this.mongoDB.get(this.collection, id);
        return doctor || {};
    }
    async createDoctor({ doctor }){
        const createdDoctorId = await this.mongoDB.create(this.collection, doctor);
        return createdDoctorId;
    }
    async updateDoctor({ id, doctor } = {}){
        const updatedDoctorsId = await this.mongoDB.update(this.collection, id, doctor);
        return updatedDoctorsId;
    }
    async deleteDoctor({ id }){
        const deletedDoctorId = await this.mongoDB.delete(this.collection, id);
        return deletedDoctorId;
    }
}

module.exports = DoctorsService;