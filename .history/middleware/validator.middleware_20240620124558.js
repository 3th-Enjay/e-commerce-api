const joiVaidator = (schema) => {
    return (req, res, next) => {
        const { error } = schema.validate(req.body);

    }
}