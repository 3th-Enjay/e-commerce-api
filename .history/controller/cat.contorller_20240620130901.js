const catInstance = require("../services/cat.service");

const createCat =  async (req, res) => {
    try {
        const data = req.body;
        const createdCat = await catInstance.createCat(data);
        res.json(createdCat);
    } catch (error) {
        throw new Error(error)
    }
}

const getAllCats = async (req, res) => {
    try {
        const cats = await catInstance.getAllCats();
        res.send(cats)
    } catch (error) {
        throw new Error(error)
    }
}

const getOneCat = async (req, res) => {
    try {
        const { id } = req.params;
        const oneCat = await catInstance.findOneCat(id);
    } catch (error) {
        throw new Error(error)
    }
}

module.exports = { createCat, getAllCats }