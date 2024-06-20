const express = require('express');
const router = express.Router();
const cateRoute =  require('./cate');

router.use('/category', cateRoute )

module.exports = router;