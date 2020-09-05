const MongoLib = require('../lib/mongo');

class usersService{
    constructor () {
        this.collection = 'users';
        this.mongoDB = new MongoLib();
    }
    async getUsers({ tags }){
        const query = tags &&  { tags: { $in: tags }};
        const users = await this.mongoDB.getAll(this.collection, query);
        return users || [];
    }
    async getUser({ userId }){
        const user = await this.mongoDB.get(this.collection, userId);
        return user || {};
    }
    async createUser({ user }){
        const createdUserId = await this.mongoDB.create(this.collection, user);
        return createdUserId;
    }
    async updateUser({ userId, user } = {}){
        const updatedUsersId = await this.mongoDB.update(this.collection, userId, user);
        return updatedUsersId;
    }
    async deleteUser({ userId }){
        const deletedUserId = await this.mongoDB.delete(this.collection, userId);
        return deletedUserId;
    }
}

module.exports = usersService;