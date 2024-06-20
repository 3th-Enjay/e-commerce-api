const express = require('express');
const router = express.Router();
const productRoute =  require('./product');

router.use('/product', productRoute )

module.exports = router;