const MongoLib = require('../lib/mongo');

class SpecialtiesService{
    constructor () {
        this.collection = 'Specialties';
        this.mongoDB = new MongoLib();
    }
    async getSpecialties({ tags }){
        const query = tags &&  { tags: { $in: tags }};
        const specialties = await this.mongoDB.getAll(this.collection, query);
        return specialties || [];
    }
    async getSpecialty({ id }){
        const specialty = await this.mongoDB.get(this.collection, id);
        return specialty || {};
    }
    async createSpecialty({ specialty }){
        const specialtyId = await this.mongoDB.create(this.collection, specialty);
        return specialtyId;
    }
    async updateSpecialty({ id, specialty } = {}){
        const updatedSpecialtyId = await this.mongoDB.update(this.collection, id, specialty);
        return updatedSpecialtyId;
    }
    async deleteSpecialty({ id }){
        const deletedSpecialtyId = await this.mongoDB.delete(this.collection, id);
        return deletedSpecialtyId;
    }
}


module.exports = SpecialtiesService;