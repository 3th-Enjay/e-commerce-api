const joiVaidator = (schema) => {
    return (req, res, next) => {
        console.log(req.body)
        const { error } = schema.validate(req.body);
        console.log(error);
    }
}

module.exports = joiVaidator;