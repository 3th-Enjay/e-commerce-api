const catInstance = require("../services/cat.service")
const productInstance = require("../services/product.service")

const createProduct = async (req, res) => {
    const {categoryId, name} = req.body
    try {
        const category = await catInstance.findOneCat({_id: catId})
        const product = await productInstance.createProduct(req.body)
    } catch (error) {
        
    }
} 