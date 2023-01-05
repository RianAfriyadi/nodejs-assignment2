const router = require('express').Router();

const ProductController = require('../controllers/product');

router.get('/product/list', ProductController.GetList);

module.exports = router;