const Joi = require("joi");

const categorySchema = {
    name: Joi.string().required(),
    description: Joi.string().required
}