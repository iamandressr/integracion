const express = require('express');
const router = express.Router();
const productoController = require('../controllers/producto');

router.get('/', productoController.getAll);
router.post('/', productoController.create);
router.delete('/:id', productoController.deleteProducto);

module.exports = router;