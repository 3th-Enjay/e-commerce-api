const catInstance = require("../services/cat.service")
const productInstance = require("../services/product.service")
const formidable = require('formidable');


const createProduct = async (req, res, next) => {
    const form = formidable({});
    form.parse(req, (err, field, file) => {
        if (err) {
            throw next(err)  
        }
        console.log(file, field)
        res.json({field, file})
    })
    // const {categoryId, name} = req.body
    // try {
    //     const category = await catInstance.findOneCat({_id: categoryId});
    //     if(!category) {
    //         throw res.status(404).json('Category not found')
    //     }
    //     const details = {
    //         categoryId: category._id,
    //         name: name
    //     }
    //     const product = await productInstance.createProduct(details);
    //     res.json(product)
    // } catch (error) {
    //     throw new Error(error)
    // }
} 

const getAllProducts  = async (req, res) => {
    try {
        const products = await productInstance.getProducts()
        res.json(products)
    } catch (error) {
        throw new Error(error)
    }
}

module.exports = {createProduct, getAllProducts}