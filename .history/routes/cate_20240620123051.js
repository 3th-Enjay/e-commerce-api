const express = require('express');
const { createCat } = require('../controller/cat.contorller');
import validate from 'express-joi-validate';

const router = express.Router();

router.post('/create', createCat);

module.exports = router;