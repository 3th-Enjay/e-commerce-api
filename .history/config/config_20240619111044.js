const dotenv = require('dotenv');

dotenv.config('./env')

const configVariables = {
    PORT: process.env.PORT,
    MONGO_URL: process.env.MONGO_URL
}

module.exports = configVariables