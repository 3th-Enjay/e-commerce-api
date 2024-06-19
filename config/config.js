const dotenv = require('dotenv');

dotenv.config('./env')

const configVariables = {
    PORT: process.env.PORT
}

module.exports = configVariables