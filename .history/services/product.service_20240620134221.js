const productModel = require('../schema/product.schema')

class ProductService {
    async createProduct (_product) {
        const product = new productModel(_product);
        return await product.save();
    }

    async getProducts () {
        const products = await productModel.find().populate('categoryId');
        return products
    }
}


const productInstance = new ProductService();
module.exports = productInstance;