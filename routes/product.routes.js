module.exports = app => {
    const products = require('../controllers/product.controller');
    var router = require("express").Router();

    router.get("/", products.findAll);
    app.use('/api/products', router);
}

// router.get('/products', (req, res) => {
//     res.send('Here are all the products')
// });

// router.get(`/products/:id`, (req, res) => {
//     res.send(req.params.id);
// });