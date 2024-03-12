const conn = require('../database/mongodb');
const cl = 'customercl';

async function findData() {
    try {
        // Get the database connection
        const db = await conn.NewMongoConnection();
        // collection name
        const collection = db.collection(cl);
        // inquiry data
        const result = await collection.find({}).toArray().catch((error) => {
            console.error(error);
        });
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    findData
};
