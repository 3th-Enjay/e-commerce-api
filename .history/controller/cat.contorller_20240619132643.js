const catInstance = require("../services/cat.service");

const createCat =  async (req, res) => {
    try {
        const data = req.body;
        const createdCat = await catInstance.createCat(data);
    } catch (error) {
        throw new Error(error)
    }
}