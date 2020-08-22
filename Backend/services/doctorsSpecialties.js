import MysqlLib from '../lib/mysql';

class DoctorsSpecialtiesService{
    constructor () {
        this.collection = 'DoctorsSpecialties';
        this.mysqlDB = new MysqlLib();
    }
    async getDoctorsSpecialties({ tags }){
        const query = tags &&  { tags: { $in: tags }};
        const doctorsSpecialties = await this.mysqlDB.getAll(this.collection, query);
        return doctorsSpecialties || [];
    }
    async getDoctorsSpecialty({ id }){
        const doctorSpecialty = await this.mysqlDB.get(this.collection, id);
        return doctorSpecialty || {};
    }
    async createDoctorSpecialty({ doctorSpecialty }){
        const createdDoctorSpecialtietId = await this.mysqlDB.create(this.collection, doctorSpecialty);
        return createdDoctorSpecialtietId;
    }
    async updateDoctorSpecialty({ id, doctorSpecialty } = {}){
        const updatedDoctorSpecialtyId = await this.mysqlDB.update(this.collection, id, doctorSpecialty);
        return updatedDoctorSpecialtyId;
    }
    async deleteDoctorSpecialty({ id }){
        const deletedDoctorSpecialtyId = await this.mysqlDB.delete(this.collection, id);
        return deletedDoctorSpecialtyId;
    }
}


export default DoctorsSpecialtiesService;