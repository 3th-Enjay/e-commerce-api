const express = require('express');
const router = express.Router();
const {createProduct, getAllProducts} =  require('../controller/product.controller');

router.post('/', createProduct); 

module.exports = router;