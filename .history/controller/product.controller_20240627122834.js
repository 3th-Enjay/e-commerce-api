const catInstance = require("../services/cat.service")
const productInstance = require("../services/product.service")
const formidable = require('formidable');
const  uploadFile  = require("../utilities/upload.util");


const createProduct = async (req, res, next) => {
    const form = formidable({maxFieldsSize: 400});
    form.parse(req, async (err, field, file) => {
        if (err) {
            throw next(err)  
        }
        const {categoryId, name} = field;
        const {secure_url} = await uploadFile(file['image-url'].filepath, "intro");
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
    })
    // 
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