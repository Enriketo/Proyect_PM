//const MongoLib = require ('../lib/mongo');
var MysqlLib = require('mysql');


class UsersService{
    constructor () {
        this.collection = 'users';
        this.mongoDB = new MysqlLib();
    }
    async getUsers({ tags }){
        const query = tags &&  { tags: { $in: tags }};
        const users = await this.mysqlDB.getAll(this.collection, query);
        return users || [];
    }
    async getUser({ userId }){
        const user = await this.mysqlDB.get(this.collection, userId);
        return user || {};
    }
    async createUser({ user }){
        const createdUserId = await this.mysqlDB.create(this.collection, user);
        return createdUserId;
    }
    async updateUser({ userId, user } = {}){
        const updatedUsersId = await this.mysqlDB.update(this.collection, userId, user);
        return updatedUsersId;
    }
    async deleteUser({ userId }){
        const deletedUserId = await this.mysqlDB.delete(this.collection, userId);
        return deletedUserId;
    }
}

module.exports = UsersService;