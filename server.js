const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const app = express();

app.set('view engine', 'ejs');

const adminRoute = require('./routes/AdminRoute')
const shopRoutes = require('./routes/shop');
const { pageNotFound } = require('./controller/errorController');
app.use(bodyParser.urlencoded({
    extended:true
}))
app.use(express.static(path.join(__dirname, 'public')))
//Middleware

app.use('/admin',adminRoute)
app.use(shopRoutes)

//404 catches
app.use(pageNotFound)
app.listen(3000)
// const server = http.createServer(app);

// server.listen(3000)