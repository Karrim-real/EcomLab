const express = require('express')
const router = express.Router()
const ProductController = require('../controller/ProductController')

router.get('/add-product',ProductController.getAddProduct);
router.get('/products',ProductController.getProduct);
router.post('/add-product',ProductController.postAddProduct)
module.exports = router