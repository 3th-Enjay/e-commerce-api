const Joi = require("@hapi/joi");

const categorySchema = {
    name: Joi.string().required(),
    description: Joi.string().required
}

module.exports = {categorySchema}