const createData = require('./CRUD/insert');
const readData = require('./CRUD/find');
const updateData = require('./CRUD/update');
const deleteData = require('./CRUD/delete');

async function main() {
    // await insert.insertData();
    await readData.findData();
    // await update.updateData();
    // await deleteData.deleteData();
}

main();