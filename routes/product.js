const express = require('express');
const router = express.Router();
const productCtrl = require('../controllers/product');
//const auth = require('../middleware/auth');
//const multer = require('../middleware/multer-config');


router.post('/', productCtrl.createProduct);
router.get('/' + '', productCtrl.getAllProducts);
router.get('/:id', productCtrl.getOneProduct);
router.put('/:id', productCtrl.updateProduct);
router.delete('/:id', productCtrl.deleteOneProduct);

module.exports = router;