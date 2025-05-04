
const Sequelize = require('sequelize');
const sequelize = require('../util/database');
class Product {
    constructor(products){
        this.products = products
    }

    save(){        
       db.execute("INSERT INTO products (title, price, description, image) VALUES (?,?,?,?)", [this.products.name, this.products.price, this.products.description, this.products.image_url])
    }

    static fetchAllProducts(){
      return db.execute("SELECT * FROM products")
    }

    static fetchProduct(id){
        return db.execute("SELECT * FROM products WHERE id = ? LIMIT 1",[id])
    }
}

module.exports = Product;