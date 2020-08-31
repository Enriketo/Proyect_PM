import MysqlLib from '../lib/mysql';

class SlotsService{
    constructor () {
        this.collection = 'Slots';
        this.mysqlDB = new MysqlLib();
    }
    async getSlots({ tags }){
        const query = tags &&  { tags: { $in: tags }};
        const slots = await this.mysqlDB.getAll(this.collection, query);
        return slots || [];
    }
    async getSlot({ id }){
        const slot = await this.mysqlDB.get(this.collection, id);
        return slot || {};
    }
    async createSlot({ slot }){
        const slotId = await this.mysqlDB.create(this.collection, slot);
        return slotId;
    }
    async updateSlot({ id, slot } = {}){
        const updatedSlotId = await this.mysqlDB.update(this.collection, id, slot);
        return updatedSlotId;
    }
    async deleteSlot({ id }){
        const deletedSlotId = await this.mysqlDB.delete(this.collection, id);
        return deletedSlotId;
    }
}


export default SlotsService;