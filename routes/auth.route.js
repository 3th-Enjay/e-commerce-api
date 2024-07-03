const express = require('express');
const router = express.Router();
const {registerUser, loginUser} = require('../controller/user.controller.js')
const {registerUserSchema, loginUserSchema} = require('../joiSchema/auth.joi.js')
const joiValidator = require('../middleware/validator.middleware')

router.post('/register', joiValidator(registerUserSchema), registerUser)
router.post('/login', joiValidator(loginUserSchema), loginUser)

module.exports = router;