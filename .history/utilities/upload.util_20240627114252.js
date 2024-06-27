const cloudinary = require('cloudinary').v2;

const uploadFile = async (filepath) => {
    await cloudinary.v2.uploader()
}