import MysqlLib from '../lib/mysql';

class PatientsService{
    constructor () {
        this.collection = 'Patients';
        this.mysqlDB = new MysqlLib();
    }
    async getPatients({ tags }){
        const query = tags &&  { tags: { $in: tags }};
        const patients = await this.mysqlDB.getAll(this.collection, query);
        return patients || [];
    }
    async getPatient({ id }){
        const patient = await this.mysqlDB.get(this.collection, id);
        return patient || {};
    }
    async createPatient({ patient }){
        const createdPatientId = await this.mysqlDB.create(this.collection, patient);
        return createdPatientId;
    }
    async updatePatient({ id, patient } = {}){
        const updatedPatientId = await this.mysqlDB.update(this.collection, id, patient);
        return updatedPatientId;
    }
    async deletePatient({ id }){
        const deletedPatientId = await this.mysqlDB.delete(this.collection, id);
        return deletedPatientId;
    }
}


export default PatientsService;