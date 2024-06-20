const productInstance = require("../services/product.service")

const createProduct = async (req, res) => {
    try {
        const product = await productInstance.createProduct(req.body)
    } catch (error) {
        
    }
} 