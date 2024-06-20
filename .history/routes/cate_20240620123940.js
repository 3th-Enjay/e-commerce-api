const express = require('express');
const { createCat } = require('../controller/cat.contorller');
// const validate = require('express-joi-validate');
const {categorySchema} = require('../joiSchema/category.joi');
const router = express.Router();

router.post('/create', validate(categorySchema), createCat);

module.exports = router;