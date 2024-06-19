const express = require('express');
const mongoDBConnection = require('./config/db.config');
const app = express();

mongoDBConnection()

module.exports = app;