const express = require('express');
const mongoDBConnection = require('./config/db.config');
const routehandler = require('./routes') 
const app = express();

mongoDBConnection()

app.use(express.json())
app.use('/', routehandler );

app.use((err, req, res, next) => {
    if(err) {
        console.log(err);
    }else {
        next()
    }

})
app.use('*', (req, res) => {
    res.json('ROUTE NOT FOUND')
})

module.exports = app;