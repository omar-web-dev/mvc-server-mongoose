const { MongoClient, ServerApiVersion } = require("mongodb");
const connectionString = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.uadalh8.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverApi: ServerApiVersion.v1
});



let dbConnection;
module.exports = {
    connectToServer: function (callback) {
        console.log("Successfully connected to MongoDB.");
        client.connect(function (err, db) {
            if (err || !db) {
                return callback(err);
            }

            dbConnection = db.db("sundorbon");
            console.log("Successfully connected to MongoDB.");
            return callback();
        });
    },

    getDb: function () {
        console.log(`Successfully connected to MongoDB.` .red.bold);
        return dbConnection;
    },
};
