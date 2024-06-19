const express = require('express');
const mongoDBConnection = require('./config/db.config');
const routehandler = require('./routes') 
const app = express();

mongoDBConnection()

app.use('/', routehandler );

app.use('*', (req, res) => {
    res.json('ROUTE NOT FOUND')
})

module.exports = app;