const catInstance = require("../services/cat.service")
const productInstance = require("../services/product.service")

const createProduct = async (req, res) => {
    const {categoryId, name} = req.body
    try {
        const category = await catInstance.findOneCat({_id: catId});
        if(!category) {
            throw res.status(404).json('Category not found')
        }
        const product = await productInstance.createProduct(req.body)
    } catch (error) {
        
    }
} 