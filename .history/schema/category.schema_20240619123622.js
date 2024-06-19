const { type } = require('express/lib/response');
const mongoose = require('mongoose');

const catSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'name is required'],
    },

    description: {
        type: String,
        required: [true, 'description is required']
    }
});