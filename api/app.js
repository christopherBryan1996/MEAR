//se aran las rutas 
const express = require('express')
const productRoutes= require('./routes/product')
const app = express()
//para ocupar los json
app.use(express.json())
//para ocupar cualquier otra forma de parametros
app.use(express.urlencoded({extended:false}))
app.use('/api',productRoutes)

module.exports =  app