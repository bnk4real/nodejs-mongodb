const conn = require('../database/mongodb');

async function deleteData() {
    try {
        const db = await conn.NewMongoConnection(); 
        const collection = db.collection("customercl");
        const filter = {
            customerid: "cus_678543",
        };
        const result = await collection.deleteOne(filter);
        if (result.deletedCount === 1) {
            console.log("Document deleted successfully.");
        } else {
            console.log("Document not found or not deleted.");
        }
    } catch (error) {
        console.error(error);
    }
}

module.exports = {
    deleteData,
};