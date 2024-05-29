const express = require('express');
const app = express();
const productosRouter = require('./routes/productos');

app.use(express.json());

app.use('/api/productos', productosRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor iniciado en http://localhost:${PORT}`);
});
