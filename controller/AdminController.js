const Product = require("../models/Product");
//Admin Products
exports.getProduct = (req, res,next) => {
    // console.log('First Middleware');
    Product.fetchAllProducts((products)=> {
        res.status(200).render('admin/products', {
            pageTitle: "Product Lists",
            products: products,
            hasProduct : products.length > 0,
            activePage : true
        }); 
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