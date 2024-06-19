const express = require('express');
const mongoDBConnection = require('./config/db.config');
const routehandler = require('./routes') 
const app = express();

mongoDBConnection()

app.use('/', )

module.exports = app;