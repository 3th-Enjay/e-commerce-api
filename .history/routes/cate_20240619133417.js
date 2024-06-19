const express = require('express');
const { createCat } = require('../controller/cat.contorller');
const router = express.Router();

router.post('/create', createCat)

module.exports = router;