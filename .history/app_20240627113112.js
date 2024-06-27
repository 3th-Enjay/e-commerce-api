const express = require('express');
const mongoDBConnection = require('./config/db.config');
const routehandler = require('./routes') 
const app = express();

mongoDBConnection()

cloudinary.config({
    cloud_name: 'YOUR_CLOUD_NAME',
    api_key: 'YOUR_API_KEY',
    api_secret: 'YOUR_API_SECRET'
  });

app.use(express.json())
app.use('/', routehandler );

app.use('*', (req, res) => {
    res.json('ROUTE NOT FOUND')
})

module.exports = app;