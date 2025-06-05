require('dotenv').config();
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
exports.getDb = getDb;