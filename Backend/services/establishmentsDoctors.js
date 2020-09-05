const MongoLib = require('../lib/mongo');

class EstablishmentsDoctorsService{
    constructor () {
        this.collection = 'EstablishmentsDoctors';
        this.mongoDB = new MongoLib();
    }
    async getEstablishmentsDoctors({ tags }){
        const query = tags &&  { tags: { $in: tags }};
        const establishmentsDoctors = await this.mongoDB.getAll(this.collection, query);
        return establishmentsDoctors || [];
    }
    async getEstablishmentDoctor({ id }){
        const establishmentDoctor = await this.mongoDB.get(this.collection, id);
        return establishmentDoctor || {};
    }
    async createEstablishmentDoctor({ establishmentDoctor }){
        const createdEstablishmentDoctorId = await this.mongoDB.create(this.collection, establishmentDoctor);
        return createdEstablishmentDoctorId;
    }
    async updateEstablishmentDoctor({ id, establishmentDoctor } = {}){
        const updatedEstablishmentDoctorId = await this.mongoDB.update(this.collection, id, establishmentDoctor);
        return updatedEstablishmentDoctorId;
    }
    async deleteEstablishmentDoctor({ id }){
        const deletedEstablishmentDoctorId = await this.mongoDB.delete(this.collection, id);
        return deletedEstablishmentDoctorId;
    }
}


module.exports = EstablishmentsDoctorsService;