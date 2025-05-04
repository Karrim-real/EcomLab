const path = require('path');
const express = require('express')
const router = express.Router()
const ProductController = require('../controller/ProductController')

router.get('/',ProductController.getIndex)
router.get('/products',ProductController.getProducts)
router.get('/product-detail/:id',ProductController.getProduct)
router.get('/cart',ProductController.getCart)
router.get('/checkout',ProductController.getCheckout)
router.get('/order',ProductController.Order)
router.get('/profile',ProductController.getProfile)
module.exports = router;
