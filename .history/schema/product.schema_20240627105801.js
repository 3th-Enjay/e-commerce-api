const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
       type: String,
       required: [true, 'name is required'] 
    },

    categoryId: {
        type: mongoose.Types.ObjectId,
        ref: 'categories'
    },

    imageUrl: {
        type: String,
        required: [true, 'image is required']
    }
});

const productModel = mongoose.model('products', productSchema);

module.exports = productModel