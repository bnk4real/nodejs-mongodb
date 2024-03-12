const conn = require('../database/mongodb');

async function insertData() {
    try {
        // Get the database connection
        const db = await conn.NewMongoConnection(); 
        // collection name
        const collection = db.collection("customercl");
        // inquiry data
        const insertDoc = {
            customerid: "cus_678543",
            customername: "Hello",
            customertype: "Mock",
            remarks: "new customer"
        }
        const document = await collection.insertOne(insertDoc);
        return document;
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    insertData,
};
