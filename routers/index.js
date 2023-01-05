const router = require('express').Router();

const ProductController = require('../controllers/product');

router.get('/users/list', ProductController.GetList);

module.exports = router;