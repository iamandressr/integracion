const Producto = require('../models/producto');

const getAll = (req, res) => {
  Producto.getAll((err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(results);
  });
};

const create = (req, res) => {
  const nuevoProducto = req.body;
  Producto.create(nuevoProducto, (err, productId) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.status(201).json({ id: productId });
  });
};

module.exports = {
  getAll,
  create,
};
