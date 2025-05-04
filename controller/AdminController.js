const Product = require("../models/Product");
//Admin Products
exports.getProduct = (req, res,next) => {
    // console.log('First Middleware');
    Product.fetchAllProducts().then(([products, fieldData]) => {
        res.status(200).render('admin/products', {
            pageTitle: "Product Lists",
            products: products,
            hasProduct : products.length > 0,
            activePage : true
        }); 
    }).catch((err) => {
        console.log(err);
        
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
    // console.log(req.body);
    const product = new Product(req.body);
    product.save()
    res.redirect('/');
}