const { MongoClient } = require("mongodb");

const uri = "mongodb://127.0.0.1:27017/";
const client = new MongoClient(uri);

async function NewMongoConnection() {
    try {
        // Connect the client to the MongoDB server
        await client.connect();
        // console.log("Connected to MongoDB");
        const conn = client.db("customers"); // database name
        return conn; // return database connection
    } catch (error) {
        console.error(error);
        throw error;
    }
}

module.exports = {
    NewMongoConnection
};