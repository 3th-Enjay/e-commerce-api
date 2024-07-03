const Joi = require("joi");

const registerUserSchema = Joi.object({
    firstname: Joi.string().required(),
    lastname: Joi.string().required(),
    password: Joi.string().min(6).max(6).required(),
    email: Joi.string().required(),
})

const loginUserSchema = Joi.object({
    password: Joi.string().min(6).max(6).required(),
    email: Joi.string().required(),
})

module.exports = {registerUserSchema, loginUserSchema}