const cloudinary = require('cloudinary').v2;

const uploadFile = async (filepath, folder: '') => {
    await cloudinary.uploader.upload(filepath, {
        resource_type: 'auto',
        folder: folder
    })
}