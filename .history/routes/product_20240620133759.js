const express = require('express');
const router = express.Router();
const productRoute =  require('./product');

router.use('/', productRoute )

module.exports = router;