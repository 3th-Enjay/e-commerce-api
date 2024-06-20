const express = require('express');
const router = express.Router();
const productsRoute =  require('./products');

router.use('/productsgory', productsRoute )

module.exports = router;