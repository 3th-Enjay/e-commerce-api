const express = require('express');
const { createCat } = require('../controller/cat.contorller');
import validate from 'express-joi-validate';
import { categorySchema } from '../joiSchema/category.joi';
const router = express.Router();

router.post('/create', validate(categorySchema), createCat);

module.exports = router;