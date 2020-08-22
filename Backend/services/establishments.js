import MysqlLib from '../lib/mysql';

class EstablishmentsService{
    constructor () {
        this.collection = 'Establishments';
        this.mysqlDB = new MysqlLib();
    }
    async getEstablishments({ tags }){
        const query = tags &&  { tags: { $in: tags }};
        const establishments = await this.mysqlDB.getAll(this.collection, query);
        return establishments || [];
    }
    async getEstablishment({ id }){
        const establishment = await this.mysqlDB.get(this.collection, id);
        return establishment || {};
    }
    async createEstablishment({ establishment }){
        const createdEstablishmentId = await this.mysqlDB.create(this.collection, establishment);
        return createdEstablishmentId;
    }
    async updateEstablishment({ id, establishment } = {}){
        const updatedEstablishmentId = await this.mysqlDB.update(this.collection, id, establishment);
        return updatedEstablishmentId;
    }
    async deleteEstablishment({ id }){
        const deletedEstablishmentId = await this.mysqlDB.delete(this.collection, id);
        return deletedEstablishmentId;
    }
}


export default EstablishmentsService;