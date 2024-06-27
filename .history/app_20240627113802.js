const express = require('express');
const mongoDBConnection = require('./config/db.config');
const routehandler = require('./routes') 
const cloudinary = require('cloudinary');   
const configVariables = require('./config/config');
const app = express();

mongoDBConnection()

cloudinary.config({
    cloud_name: configVariables.CLOUD_NAME,
    api_key: configVariables.CLOUDINARY_PUBLIC,
    api_secret: configVariables.CLOUDINARY_SECRET
});

app.use(express.json())
app.use('/', routehandler );

app.use('*', (req, res) => {
    res.json('ROUTE NOT FOUND')
})

module.exports = app;