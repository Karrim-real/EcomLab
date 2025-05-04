const Product = require("../models/Product");



exports.getIndex = (req, res, next)=> {
     Product.fetchAllProducts((products)=> {
        res.status(200).render('shop/index', {
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

exports.getProduct = (req, res, next) => {
        const productId = req.params.id
        console.log(productId);
        
        res.status(200).render('shop/product-detail', {
            pageTitle: "Shop - Product Detail",
            productId: productId,
            activePage : true
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

