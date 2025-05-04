const express = require('express')
const router = express.Router()
const AdminController = require('../controller/AdminController')

router.get('/add-product',AdminController.getAddProduct);
router.get('/products',AdminController.getProduct);
router.post('/add-product',AdminController.postAddProduct)
module.exports = router