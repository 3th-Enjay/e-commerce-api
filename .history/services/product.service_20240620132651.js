const productModel = require('../schema/product.schema')

class ProductService {
    createProduct (product) {
        const product = new productModel(product)
    }
}