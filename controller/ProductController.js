const Product = require("../models/Product");



exports.getIndex = (req, res, next)=> {
     Product.fetchAllProducts().then(([products, fieldData]) =>{
        // console.log(products);
        res.status(200).render('shop/index', {
            pageTitle: "Shop - Products",
            products: products,
            hasProduct : products.length > 0,
            activePage : true
        }); 
     }).catch(err => console.log(err));
 
}
exports.getProducts = (req, res, next) => {
    Product.fetchAllProducts().then(([products, fieldData]) =>{
        // console.log(products);
        
        res.status(200).render('shop/product-list', {
            pageTitle: "Shop - Products",
            products: products,
            hasProduct : products.length > 0,
            activePage : true
        });
    }).catch(err => console.log(err));
}

exports.getProduct = (req, res, next) => {
        const productId = req.params.id
        Product.fetchProduct(productId).then(([product, fieldData]) => {
            console.log(product[0]['title']);
            res.status(200).render('shop/product-detail', {
                pageTitle: "Shop - Product Detail",
                productId: productId,
                product : product[0],
                activePage : true
            }); 
        }).catch(err => console.log(err));
    
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

