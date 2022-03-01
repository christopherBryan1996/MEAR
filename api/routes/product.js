//ruta de produccion
const express = require('express')
const router = express.Router()
const {addProduct}= require('../controller/puductController')

router.use(express.json())

router.post('/products',addProduct) 

module.exports = router