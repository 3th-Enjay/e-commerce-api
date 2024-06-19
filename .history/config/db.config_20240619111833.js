const { default: mongoose } = require('mongoose');
const mongoose = require('mongose');
const configVariables = require('./config');

const mongoDBConnection = () => {
    mongoose
    .connect(configVariables.MONGO_URL)
    .then(() => {
        console.log('MONGODB CONNECTION SUCCESSFULLY')
    })
    .catch(() => {
        throw new Error('MONGODB CONNECTION ERROR')
    })
};


module.exports = mongoDBConnection;