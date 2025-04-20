const Product = require("../models/Product");

//Admin Products
exports.getProduct = (req, res,next) => {
    // console.log('First Middleware');
    res.render('admin/products', {
        pageTitle: "Product Lists",
    });
}
//Admin Add product page
exports.getAddProduct = (req, res,next) => {
    // console.log('First Middleware');
    res.render('admin/add-product', {
        pageTitle: "Add Product",
    });
}

//Post Product
exports.postAddProduct = (req, res, next)=>{
    const product = new Product(req.body);
    product.save()
    res.redirect('/');
}

exports.getRecentProducts = (req, res, next)=> {
     Product.fetchAllProducts((products)=> {
        res.status(200).render('shop/product-list', {
            pageTitle: "Shop - Products",
            products: products,
            hasProduct : products.length > 0,
            activePage : true
        }); 
    });
 
}
exports.getProducts = (req, res, next) => {
    Product.fetchAllProducts((products)=> {
        res.status(200).render('shop/product-list', {
            pageTitle: "Shop - Products",
            products: products,
            hasProduct : products.length > 0,
            activePage : true
        }); 
    });
}

exports.getCart = (re, res, next) => {
    res.status(200).render('shop/cart', {
        pageTitle: "Shop - Cart",
        activePage : true 
    })
}

exports.getCheckout = (re, res, next) => {
    res.status(200).render('shop/checkout', {
        pageTitle: "Shop - Checkout",
        activePage : true 
    })
}



exports.Order = (re, res, next) => {
    res.status(200).render('shop/order', {
        pageTitle: "Shop - Order",
        activePage : true 
    })
}

exports.getProfile = (re, res, next) => {
    res.status(200).render('user/profile', {
        pageTitle: "Dashboard - Profile",
        activePage : true 
    })
}

