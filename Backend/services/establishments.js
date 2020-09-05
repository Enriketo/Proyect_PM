const MongoLib = require('../lib/mongo');

class EstablishmentsService{
    constructor () {
        this.collection = 'Establishments';
        this.mongoDB = new MongoLib();
    }
    async getEstablishments({ tags }){
        const query = tags &&  { tags: { $in: tags }};
        const establishments = await this.mongoDB.getAll(this.collection, query);
        return establishments || [];
    }
    async getEstablishment({ id }){
        const establishment = await this.mongoDB.get(this.collection, id);
        return establishment || {};
    }
    async createEstablishment({ establishment }){
        const createdEstablishmentId = await this.mongoDB.create(this.collection, establishment);
        return createdEstablishmentId;
    }
    async updateEstablishment({ id, establishment } = {}){
        const updatedEstablishmentId = await this.mongoDB.update(this.collection, id, establishment);
        return updatedEstablishmentId;
    }
    async deleteEstablishment({ id }){
        const deletedEstablishmentId = await this.mongoDB.delete(this.collection, id);
        return deletedEstablishmentId;
    }
}


module.exports = EstablishmentsService;