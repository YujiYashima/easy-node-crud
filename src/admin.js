// Export Modules
const mongoose = require("mongoose");
const AdminBro = require('admin-bro');
const AdminBroMongoose = require('@admin-bro/mongoose');
const express = require("express");
require('dotenv').config();


// Admin Bro
AdminBro.registerAdapter(AdminBroMongoose);
const adminBroOptions = require('./adminBroSettings.js');
const router = require('./routes.js');


// Server 
const server = express();
server.use(adminBroOptions.options.rootPath, router);


// Run App
const run = async () => {
    await mongoose.connect(process.env.DATABASE_PATH, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    await server.listen(Number(process.env.PORT), () => console.log(`Server is Running in http://localhost:${process.env.PORT}/admin`));
};

run();