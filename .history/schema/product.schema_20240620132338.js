const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
       type: String,
       required: [true, 'name is required'] 
    },

    categoryId: {
        type: mongoose.Types.ObjectId,
        ref: 'categories'
    }
})