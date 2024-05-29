const connection = require('../database');

const getAll = (callback) => {
  connection.query('SELECT * FROM productos', (err, results) => {
    if (err) {
      callback(err, null);
      return;
    }
    callback(null, results);
  });
};

const create = (producto, callback) => {
    const query = 'INSERT INTO productos (nombre, descripcion, precio, stock) VALUES (?, ?, ?, ?)';
    const values = [producto.nombre, producto.descripcion, producto.precio, producto.stock];
  
    connection.query(query, values, (err, result) => {
      if (err) {
        callback(err, null);
        return;
      }
      callback(null, result.insertId);
    });
};

const deleteProducto = (id, callback) => {
  const query = 'DELETE FROM productos WHERE id = ?';

  connection.query(query, [id], (err, result) => {
    if (err) {
      callback(err, null);
      return;
    }

    callback(null, result);
  });
};

module.exports = {
    deleteProducto,
    getAll,
    create,
  };
  
  