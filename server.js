const express = require('express');

const app = express();

// order is important for matching!
app.use('/add-product', (req, res, next) => {
  console.log('im in the add product');
  res.send('<h1>Add Product</h1>');
});

app.use('/', (req, res, next) => {
  console.log('im in the middleware');
  res.send('<h1>Hello from Express!</h1>');
});

app.listen(3000);