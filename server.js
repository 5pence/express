const express = require('express');

const app = express();

app.use((req, res, next) => {
  console.log('im in the middleware');
  next(); // allows it to goto the next middleware inline
});

app.use((req, res, next) => {
  console.log('im in another middleware');
  res.send('<h1>Hello from Express!</h1>');
});

app.listen(3000);