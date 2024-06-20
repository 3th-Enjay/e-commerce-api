const catInstance = require("../services/cat.service")
const productInstance = require("../services/product.service")

const createProduct = async (req, res) => {
    const {categoryId, name} = req.body
    try {
        const category = await catInstance.findOneCat({_id: categoryId});
        if(!category) {
            throw res.status(404).json('Category not found')
        }
        const details = {
            categoryId: category._id,
            name: name
        }
        const product = await productInstance.createProduct(details);
        res.json(product)
    } catch (error) {
        
    }
} 