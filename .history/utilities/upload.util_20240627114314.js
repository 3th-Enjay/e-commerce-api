const cloudinary = require('cloudinary').v2;

const uploadFile = async (filepath) => {
    await cloudinary.uploader.upload(filepath)
}