//se aran las rutas 
const express = require('express')
const productRoutes= require('./routes/product')
const app = express()
const morgan= require('morgan')
const cors = require('cors')
app.use(cors({
    origin:'*'
}))
//para ocupar los json
app.use(express.json())
//para ocupar cualquier otra forma de parametros
app.use(express.urlencoded({extended:false}))
app.use(morgan('dev'))
app.use('/api',productRoutes)
//vamos a poner la ruta de /public
app.use('/public', express.static(`${__dirname}/storage/imgs`))

module.exports =  app