const dotenv = require('dotenv');

dotenv.config('./env')

const configVariables = {
    PORT: process.env.PORT,
    MONGODB_URL: process.env.MONGODB_URL,
    CLOUDINARY_SECRET: process.env.CLOUDINARY_SECRET,
    CLOUD_NAME: process.env.CLOUD_NAME,
    CLOUDINARY_PUBLIC: process.env.CLOUDINARY_PUBLIC,
}

module.exports = configVariables