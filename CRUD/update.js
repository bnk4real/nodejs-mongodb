const conn = require('../database/mongodb');

async function updateData() {
    try {
        const db = await conn.NewMongoConnection(); 
        const collection = db.collection("customercl");
        // Define filter to find the document to update
        const filter = {
            customerid: "cus_678543",
        };
        // Define update operation
        const updateOperation = {
            $set: {
                customername: "HelloNew",
            },
        };
        // Use updateOne to update the document
        const result = await collection.updateOne(filter, updateOperation);
        if (result.modifiedCount === 1) {
            console.log("Document updated successfully.");
        } else {
            console.log("Document not found or not updated.");
        }
    } catch (error) {
        console.error(error);
    }
}

module.exports = {
    updateData,
};