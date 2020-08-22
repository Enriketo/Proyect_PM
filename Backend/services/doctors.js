//const MongoLib = require ('../lib/mongo');
import MysqlLib from '../lib/mysql';

class DoctorsService{
    constructor () {
        this.collection = 'Doctors';
        this.mysqlDB = new MysqlLib();
    }
    async getDoctors({ tags }){
        const query = tags &&  { tags: { $in: tags }};
        const Doctors = await this.mysqlDB.getAll(this.collection, query);
        return Doctors || [];
    }
    async getDoctor({ id }){
        const doctor = await this.mysqlDB.get(this.collection, id);
        return doctor || {};
    }
    async createDoctor({ doctor }){
        const createdDoctorId = await this.mysqlDB.create(this.collection, doctor);
        return createdDoctorId;
    }
    async updateDoctor({ id, doctor } = {}){
        const updatedDoctorsId = await this.mysqlDB.update(this.collection, id, doctor);
        return updatedDoctorsId;
    }
    async deleteDoctor({ id }){
        const deletedDoctorId = await this.mysqlDB.delete(this.collection, id);
        return deletedDoctorId;
    }
}

export default DoctorsService;