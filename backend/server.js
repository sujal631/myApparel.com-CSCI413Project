/* Discription: Created basic express server for our e-commerce website
Author: Sujal Joshi
Date: 2-8-22*/

import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import productRouter from './routers/productRouter.js';
import userRouter from './routers/userRouter.js';

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
mongoose.connect(process.env.MONGODB_URL||'mongodb://localhost/myApparel', {
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
app.use('/api/users', userRouter);

app.use((err, req, res, next) => {
  res.status(500).send({message: err.message});
});

app.get('/', (req, res) => {
  res.send('Server is ready');
});
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});
