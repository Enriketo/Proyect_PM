const { mysqlClient, ObjectId } = require('mysql');
const { config } = require('../config');

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const DB_NAME = config.dbName;

const MYSQL_URI = `mysql.createConnection://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${DB_NAME}?retryWrites=true&ssl=true&w=majority`;

class mysqlLib {
    constructor() {
        this.client = new mysqlClient(MYSQL_URI, {useUnifiedTopology: true}, { useNewUrlParser: true } );
        this.dbName = DB_NAME;
    }

    connect() {
        if (!mysqlLib.connection) {
            mysqlLib.connection = new Promise((resolve, reject) => {
                this.client.connect(err => {
                    if (err) {
                        reject(err);
                    }
                    console.log('Connected succesfully to mysql');
                    resolve(this.client.db(this.dbName));
                });
            });
        }
        return mysqlLib.connection;
    }

    getAll(collection, query) {
        return this.connect().then(db => {
            return db.collection(collection).find(query).toArray();
        })
    }

    get(collection, id) {
        return this.connect().then(db => {
            return db.collection(collection).findOne({ _id: ObjectId(id)});
        })
    }

    create(collection, data) {
        return this.connect().then(db => {
            return db.collection(collection).insertOne(data)
        }).then(result => result.insertedId);
    }

    update(collection, id, data) {
        return this.connect().then(db => {
            return db.collection(collection).updateOne({ _id: ObjectId(id) }, { $set: data }, { upsert: true });
        }).then(result => result.upsertedId || id);
    }

    delete(collection, id) {
        return this.connect().then(db => {
            return db.collection(collection).deleteOne({ _id: ObjectId(id) });
        }).then(() => id);
    }

}

module.exports = mysqlLib;