
const fs = require('fs');
const path = require('path');
class Product {
    constructor(products){
        this.products = products
    }

    save(){
       const p = path.join(path.dirname(require.main.filename), 'data', 'product.json')
        // products.push(this)
        fs.readFile(p,(err, fileContent)=> {
            let products = [];
            if (!err) {
                products = JSON.parse(fileContent)
            }            
            products.push(this.products);
            // console.log('product details',this.products);
            fs.writeFileSync(p, JSON.stringify(products), err => {
                console.log(err);
            })
        })
        
    }

    static fetchAllProducts(cb){
       const p = path.join(path.dirname(require.main.filename), 'data', 'product.json')
       fs.readFile(p, (err, fileContent)=> {
        if (!err) {
           return cb(JSON.parse(fileContent))   
        }
        console.log(err);
        return cb([]);
       })
    }
}

module.exports = Product;