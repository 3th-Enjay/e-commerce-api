const express = require('express');
const router = express.Router();
const productCategory =  require('./cate');

router.use('/', productRoute )

module.exports = router;