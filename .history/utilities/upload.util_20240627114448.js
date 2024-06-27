const cloudinary = require('cloudinary').v2;

export const uploadFile = async (filepath, folder='') => {
   const result =  await cloudinary.uploader.upload(filepath, {
        resource_type: 'auto',
        folder: folder
    });

    return result
}