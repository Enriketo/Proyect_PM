import MysqlLib from '../lib/mysql';

class EstablishmentsDoctorsService{
    constructor () {
        this.collection = 'EstablishmentsDoctors';
        this.mysqlDB = new MysqlLib();
    }
    async getEstablishmentsDoctors({ tags }){
        const query = tags &&  { tags: { $in: tags }};
        const establishmentsDoctors = await this.mysqlDB.getAll(this.collection, query);
        return establishmentsDoctors || [];
    }
    async getEstablishmentDoctor({ id }){
        const establishmentDoctor = await this.mysqlDB.get(this.collection, id);
        return establishmentDoctor || {};
    }
    async createEstablishmentDoctor({ establishmentDoctor }){
        const createdEstablishmentDoctorId = await this.mysqlDB.create(this.collection, establishmentDoctor);
        return createdEstablishmentDoctorId;
    }
    async updateEstablishmentDoctor({ id, establishmentDoctor } = {}){
        const updatedEstablishmentDoctorId = await this.mysqlDB.update(this.collection, id, establishmentDoctor);
        return updatedEstablishmentDoctorId;
    }
    async deleteEstablishmentDoctor({ id }){
        const deletedEstablishmentDoctorId = await this.mysqlDB.delete(this.collection, id);
        return deletedEstablishmentDoctorId;
    }
}


export default EstablishmentsDoctorsService;