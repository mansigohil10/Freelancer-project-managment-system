const mongoose = require('mongoose');
require('dotenv').config();

const ConnectDB = async() =>{
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log('MongoDB Connected Successfully');
    } catch (error) {
        console.log("MongoDB Connection error");
    }
}

module.exports = ConnectDB;