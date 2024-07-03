const mongoose = require('mongoose');
const configVariables = require('./config');

const mongoDBConnection = () => {
    mongoose
    .connect(configVariables.MONGODB_URL)
    .then(() => {
        console.log('MONGODB CONNECTION SUCCESSFULLY')
    })
    .catch((err) => {
        console.log(err);
        throw new Error('MONGODB CONNECTION ERROR')
    })
};


module.exports = mongoDBConnection;