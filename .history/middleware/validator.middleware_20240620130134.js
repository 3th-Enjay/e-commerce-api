const joiVaidator = (schema) => {
    return (req, res, next) => {
        if (error) {
            return res.status(400).json({ error: error.details[0].message });
        }
        next();
    }
}

module.exports = joiVaidator;