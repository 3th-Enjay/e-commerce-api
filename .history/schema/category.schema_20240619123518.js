const { type } = require('express/lib/response');
const mongoose = require('mongoose');

const catSchema = new mongoose.Schema({
    name: {
        type: String
    }
})