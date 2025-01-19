const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

const server = require('http').createServer(app);

const connectDB = require('./config/db');
require('dotenv').config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 

const userRoutes = require('./routes/user-routes');
app.use('/user', userRoutes);

connectDB().then(() =>{
    server.listen(process.env.PORT, ()=> {
        console.log(`Server running on port ${process.env.PORT}`);
    });
});
