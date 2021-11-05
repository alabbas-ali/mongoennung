var DB_URL = process.env.MONGO_URL;

var mongo = require('mongodb');

var mongoClient = mongo.MongoClient;
var db = null;

function connect(url, cb) {
    if(cb == undefined) {
        cb = url;
        url = DB_URL;

        if(DB_URL == undefined)
            return cb(new Error('Database URL to connect to is missing (pass either as argument or in the MONGO_URL environent variable)'));
    }

    mongoClient.connect(url, function(err, dbResult) {
        db = dbResult;

        return cb(err);
    });
}

exports.connect = connect;

exports.collection = function collection(name) {
    return db.collection(name);
};

exports.id = function(id) {
    return new mongo.ObjectId(id);
}
