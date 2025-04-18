const path = require('path')
const express = require('express')
const router = express.Router()

const product = [];
router.get('/add-product',(req, res,next) => {
    console.log('First Middleware');
    res.sendFile(path.join(__dirname, '../','views', 'add-product.html'));
    // next();
})
router.post('/add-product',(req, res, next)=>{
    // console.log(req.body);
    product.push(req.body);
    res.redirect('/');
})
exports.routes = router
exports.product = product