const express = require('express');
const router = express.Router();
const {createProduct, getAllProducts} =  require('../controller/product.controller');

router.post('/', createProduct); 
router.get('/', getAllProducts);

module.exports = router;