//ruta de produccion
const express = require('express')
const router = express.Router()
const {addProduct, getProducts}= require('../controller/puductController')
const upload = require('../libs/storage')

router.post('/products',upload.single('image'),addProduct) 
router.get('/products',getProducts)

module.exports = router