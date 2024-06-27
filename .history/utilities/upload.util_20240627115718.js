const cloudinary = require('cloudinary').v2;

const uploadFile = async (filepath, folder='') => {
   const result =  await cloudinary.uploader.upload(filepath, {
        resource_type: 'auto',
        folder: folder
    });

    return result;
}

modeule.exports = uploadFile;