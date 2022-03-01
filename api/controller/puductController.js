const Product = require('../db/models/Product')

async function addProduct(req,res){
    try {
        const {name,size,unitaryPrice,description}= req.body
        const product= Product({
            name, 
            size, 
            unitaryPrice, 
            description
        })
        if(req.file){
            const {filename} = req.file
            product.setImgURl(filename)
        }
        const productStored = await product.save()
        res.status(201).json({productStored})
    } catch (error) {
        res.status(500).json({messeage:e.messeage})
    }
}

async function getProducts(req,res){
    const products = await Product.find().lean().exec();
    res.status(200).json({products})
}
module.exports={
    addProduct,
    getProducts
}