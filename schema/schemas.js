const mongoose = require('mongoose');

// user schema
const userSchema = new mongoose.Schema({
    email: String,
    password: String,
});
const Users = mongoose.model('User', userSchema, "usercl");

// customer schema
const customerSchema = new mongoose.Schema({
    customerId: String,
    customerName: String,
    customerType: String,
    remarks: String,
});
const Customers = mongoose.model('Customer', customerSchema, "customercl");

// export schemas
module.exports = {
    Users,
    Customers
};