//const MongoLib = require ('../lib/mongo');
var MysqlLib = require('mysql');

class DoctorsService{
    constructor () {
        this.collection = 'Doctors';
        this.mongoDB = new MysqlLib();
    }
    async getDoctors({ tags }){
        const query = tags &&  { tags: { $in: tags }};
        const Doctors = await this.mysqlDB.getAll(this.collection, query);
        return Doctors || [];
    }
    async getDoctor({ doctorId }){
        const doctor = await this.mysqlDB.get(this.collection, doctorId);
        return doctor || {};
    }
    async createDoctor({ doctor }){
        const createddoctorId = await this.mysqlDB.create(this.collection, doctor);
        return createddoctorId;
    }
    async updateDoctor({ doctorId, doctor } = {}){
        const updatedDoctorsId = await this.mysqlDB.update(this.collection, doctorId, doctor);
        return updatedDoctorsId;
    }
    async deleteDoctor({ doctorId }){
        const deleteddoctorId = await this.mysqlDB.delete(this.collection, doctorId);
        return deleteddoctorId;
    }
}

module.exports = DoctorsService;