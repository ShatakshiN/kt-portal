/* require('dotenv').config();
const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
let _db;

const mongoConnect = (callBack) => {
    MongoClient.connect(
        process.env.MONGODB_LINK
    )
        .then(client => {
            _db = client.db();
            callBack();
            console.log('connected');
        })
        .catch(err => {
            console.log(err);
            throw err;
        })

};

const getDb = function () {
    if (_db) {
        return _db;
    }
    throw "No database found";
}

module.exports = mongoConnect;
exports.getDb = getDb; */

require('dotenv').config();

const Sequelize = require('sequelize')
const sequelize = new Sequelize(process.env.DBASE_NAME,process.env.DBASE_USERNAME, process.env.DBASE_PASSWORD ,{dialect : 'mysql', host :process.env.DBASE_HOST}) // instance of Sequelize

module.exports= sequelize;