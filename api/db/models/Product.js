const mongoose = require('mongoose')
//creamos el modelo
const Schema = mongoose.Schema
const {appCofig}= require('../../config')

const ProductSchemas = Schema({
    name:String,
    size:Number,
    unitaryPrice: Number,
    imgUrl: String,
    description: String
},{
    timestamps: true
})

ProductSchemas.methods.setImgURl = function setImgURl(filename){
    const {host, port} = appCofig
    this.imgUrl = `${host}:${port}/public/${filename}`
}

module.exports = mongoose.model('Products', ProductSchemas)