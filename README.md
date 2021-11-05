# MonGoennung

## Usage

Connecting:

    var db = require('mongoennung');

    db.connect(startServer);

    function startServer(err) {
        if(err != null)
            process.exit(1); //Handle errors somehow

        //The db object is now connected to the database and ready
    }

This will connect to the database URL specified in the environment varibale
`MONGO_URL`. You can also just pass a URL to connect to (`db.connect(url, callback)`).

After the module is successfully connected, it offers two simple methods:
`db.collection('someCollection')` will return the same as Mongos [`db.collection`](http://mongodb.github.io/node-mongodb-native/2.2/api/Db.html#collection),
while `db.id()` will return a Mongo ObjectId (same as `new ObjectId()`).
