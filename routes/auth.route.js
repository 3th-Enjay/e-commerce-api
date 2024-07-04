const express = require('express');
const router = express.Router();
const {registerUser, getUserProfile, loginUser} = require('../controller/user.controller.js')
const {registerUserSchema, loginUserSchema} = require('../joiSchema/auth.joi.js')
const joiValidator = require('../middleware/validator.middleware');
const isAuth = require('../middleware/auth.middleware.js');

router.post('/register', joiValidator(registerUserSchema), registerUser)
router.post('/login', joiValidator(loginUserSchema), loginUser)

router.get('/user', isAuth, getUserProfile )


module.exports = router;