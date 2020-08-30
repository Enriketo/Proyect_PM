import MysqlLib from '../lib/mysql';

class ReasonsService{
    constructor () {
        this.collection = 'Reasons';
        this.mysqlDB = new MysqlLib();
    }
    async getReasons({ tags }){
        const query = tags &&  { tags: { $in: tags }};
        const reasons = await this.mysqlDB.getAll(this.collection, query);
        return reasons || [];
    }
    async getReason({ id }){
        const reason = await this.mysqlDB.get(this.collection, id);
        return reason || {};
    }
    async createReason({ reason }){
        const reasonId = await this.mysqlDB.create(this.collection, reason);
        return reasonId;
    }
    async updateReason({ id, reason } = {}){
        const updatedReasonId = await this.mysqlDB.update(this.collection, id, reason);
        return updatedReasonId;
    }
    async deleteReason({ id }){
        const deletedReasonId = await this.mysqlDB.delete(this.collection, id);
        return deletedReasonId;
    }
}


export default ReasonsService;