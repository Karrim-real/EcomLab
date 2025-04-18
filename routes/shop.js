const path = require('path');
const express = require('express')
const adminData = require('./AdminRoute')
const router = express.Router()
const products = adminData.product;

router.get('/',(req, res, next)=> {
    console.log('Product',products);
    
    res.sendFile(path.join(__dirname,'../','views', 'shop.html'));
    
})
module.exports = router;