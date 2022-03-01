const mongoose = require('mongoose')
//creamos el modelo
const Schema = mongoose.Schema

const ProductSchemas = Schema({
    name:String,
    size:Number,
    unitaryPrice: Number,
    imgUrl: String,
    description: String
},{
    timestamps: true
})

module.exports = mongoose.model('Products', ProductSchemas)