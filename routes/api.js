const express = require('express');
const productControllers = require('../controllers/productController.js')
const userController = require('../controllers/userController.js');
const authorise = require('../middleware/authorise.js');

const router = express.Router();

router.get('/getAllProducts', productControllers.getAllProducts);
// http://127.0.0.1/api/getAllProducts

router.post('/addProduct', productControllers.addProduct);
// http://127.0.0.1:5005/api/addProduct

router.get('/getWithQuery', productControllers.getWithQuery);
// http://127.0.0.1:5005/api/getWithQuery

router.delete('/product/:id' , productControllers.deleteProduct);
// http://127.0.0.1:5005/api/product/

router.put('/product/:id', productControllers.updateProduct);
// http://127.0.0.1:5005/api/product/



router.post('/register', userController.addUser);
// http://127.0.0.1:5005/api/register

router.post('/login', userController.getUser);
// http://127.0.0.1:5005/api/login

router.get('/getProductsWithAuth',authorise, productControllers.getAllProducts);
// http://127.0.0.1:5005/api/getProductsWithAuth

module.exports = router;