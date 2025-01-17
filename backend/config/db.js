const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
    } catch (e) {
        console.error('Error connecting to MongoDB', e);
        process.exit(1);
    }
}

module.exports = connectDB;