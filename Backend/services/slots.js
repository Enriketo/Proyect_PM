const MongoLib = require('../lib/mongo');

class SlotsService{
    constructor () {
        this.collection = 'Slots';
        this.mongoDB = new MongoLib();
    }
    async getSlots({ tags }){
        const query = tags &&  { tags: { $in: tags }};
        const slots = await this.mongoDB.getAll(this.collection, query);
        return slots || [];
    }
    async getSlot({ id }){
        const slot = await this.mongoDB.get(this.collection, id);
        return slot || {};
    }
    async createSlot({ slot }){
        const slotId = await this.mongoDB.create(this.collection, slot);
        return slotId;
    }
    async updateSlot({ id, slot } = {}){
        const updatedSlotId = await this.mongoDB.update(this.collection, id, slot);
        return updatedSlotId;
    }
    async deleteSlot({ id }){
        const deletedSlotId = await this.mongoDB.delete(this.collection, id);
        return deletedSlotId;
    }
}


module.exports = SlotsService;