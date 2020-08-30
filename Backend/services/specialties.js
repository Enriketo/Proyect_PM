import MysqlLib from '../lib/mysql';

class SpecialtiesService{
    constructor () {
        this.collection = 'Specialties';
        this.mysqlDB = new MysqlLib();
    }
    async getSpecialties({ tags }){
        const query = tags &&  { tags: { $in: tags }};
        const specialties = await this.mysqlDB.getAll(this.collection, query);
        return specialties || [];
    }
    async getSpecialty({ id }){
        const specialty = await this.mysqlDB.get(this.collection, id);
        return specialty || {};
    }
    async createSpecialty({ specialty }){
        const specialtyId = await this.mysqlDB.create(this.collection, specialty);
        return specialtyId;
    }
    async updateSpecialty({ id, specialty } = {}){
        const updatedSpecialtyId = await this.mysqlDB.update(this.collection, id, specialty);
        return updatedSpecialtyId;
    }
    async deleteSpecialty({ id }){
        const deletedSpecialtyId = await this.mysqlDB.delete(this.collection, id);
        return deletedSpecialtyId;
    }
}


export default SpecialtiesService;