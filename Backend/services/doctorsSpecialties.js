const MongoLib = require('../lib/mongo');

class DoctorsSpecialtiesService{
    constructor () {
        this.collection = 'DoctorsSpecialties';
        this.mongoDB = new MongoLib();
    }
    async getDoctorsSpecialties({ tags }){
        const query = tags &&  { tags: { $in: tags }};
        const doctorsSpecialties = await this.mongoDB.getAll(this.collection, query);
        return doctorsSpecialties || [];
    }
    async getDoctorsSpecialty({ id }){
        const doctorSpecialty = await this.mongoDB.get(this.collection, id);
        return doctorSpecialty || {};
    }
    async createDoctorSpecialty({ doctorSpecialty }){
        const createdDoctorSpecialtietId = await this.mongoDB.create(this.collection, doctorSpecialty);
        return createdDoctorSpecialtietId;
    }
    async updateDoctorSpecialty({ id, doctorSpecialty } = {}){
        const updatedDoctorSpecialtyId = await this.mongoDB.update(this.collection, id, doctorSpecialty);
        return updatedDoctorSpecialtyId;
    }
    async deleteDoctorSpecialty({ id }){
        const deletedDoctorSpecialtyId = await this.mongoDB.delete(this.collection, id);
        return deletedDoctorSpecialtyId;
    }
}


module.exports = DoctorsSpecialtiesService;