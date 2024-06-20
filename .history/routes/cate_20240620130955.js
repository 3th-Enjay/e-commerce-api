const express = require('express');
const { createCat, getAllCats, getOneCat } = require('../controller/cat.contorller');
const {categorySchema} = require('../joiSchema/category.joi');
const joiVaidator = require('../middleware/validator.middleware')
const router = express.Router();

router.post('/', joiVaidator(categorySchema), createCat);
router.get('/', getAllCats )
router.get('/:id', getOneCat)

module.exports = router;