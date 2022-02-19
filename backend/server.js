/* Discription: Created basic express server for our e-commerce website
Author: Sujal Joshi
Date: 2-8-22*/

import express from 'express';
import mongoose from 'mongoose';
import productRouter from './routers/productRouter.js';

const app = express();
mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/myApparel', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

/* THIS RETURNS STATIC DATA I HAVE CONNECTED MY DB TO BACKEND SO NO LONGER REQ
app.get('/api/products/:id', (req, res) => {
  const product = data.products.find((x) => x._id === req.params.id);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: 'Product Not Found' });
  }
});

app.get('/api/products', (req, res) => {
  res.send(data.products);
});*/

app.use('/api/products', productRouter);


app.get('/', (req, res) => {
  res.send('Server is ready');
});
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});
