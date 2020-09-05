const MongoLib = require('../lib/mongo');

class ReasonsService{
    constructor () {
        this.collection = 'Reasons';
        this.mongoDB = new MongoLib();
    }
    async getReasons({ tags }){
        const query = tags &&  { tags: { $in: tags }};
        const reasons = await this.mongoDB.getAll(this.collection, query);
        return reasons || [];
    }
    async getReason({ id }){
        const reason = await this.mongoDB.get(this.collection, id);
        return reason || {};
    }
    async createReason({ reason }){
        const reasonId = await this.mongoDB.create(this.collection, reason);
        return reasonId;
    }
    async updateReason({ id, reason } = {}){
        const updatedReasonId = await this.mongoDB.update(this.collection, id, reason);
        return updatedReasonId;
    }
    async deleteReason({ id }){
        const deletedReasonId = await this.mongoDB.delete(this.collection, id);
        return deletedReasonId;
    }
}

module.exports = ReasonsService;