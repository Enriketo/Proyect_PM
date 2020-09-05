const MongoLib = require('../lib/mongo');

class PatientsService{
    constructor () {
        this.collection = 'Patients';
        this.mongoDB = new MongoLib();
    }
    async getPatients({ tags }){
        const query = tags &&  { tags: { $in: tags }};
        const patients = await this.mongoDB.getAll(this.collection, query);
        return patients || [];
    }
    async getPatient({ id }){
        const patient = await this.mongoDB.get(this.collection, id);
        return patient || {};
    }
    async createPatient({ patient }){
        const createdPatientId = await this.mongoDB.create(this.collection, patient);
        return createdPatientId;
    }
    async updatePatient({ id, patient } = {}){
        const updatedPatientId = await this.mongoDB.update(this.collection, id, patient);
        return updatedPatientId;
    }
    async deletePatient({ id }){
        const deletedPatientId = await this.mongoDB.delete(this.collection, id);
        return deletedPatientId;
    }
}


module.exports = PatientsService;