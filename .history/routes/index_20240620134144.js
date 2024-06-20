const express = require('express');
const router = express.Router();
const cateRoute =  require('./cate');
const productRoute = require('./product');
router.use('/category', cateRoute )
router.use('/product', productR)

module.exports = router;