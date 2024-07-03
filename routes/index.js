const express = require('express');
const router = express.Router();
const cateRoute =  require('./cate');
const productRoute = require('./product');
const authRoute = require('./auth.route');

router.use('/category', cateRoute )
router.use('/product', productRoute)
router.use('/auth', authRoute)

module.exports = router;