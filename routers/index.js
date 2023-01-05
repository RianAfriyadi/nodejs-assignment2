const router = require('express').Router();

const UserAuthController = require('../controllers/user-auth');
const ProductController = require('../controllers/product');

router.post('/auth/login', UserAuthController.Login);

router.get('/product/list', ProductController.GetList);

module.exports = router;