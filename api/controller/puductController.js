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
        const productStored = await product.save()
        res.status(201).json({productStored})
    } catch (error) {
        res.status(500).json({messeage:e.messeage})
    }
}

module.exports={
    addProduct
}