/* Discription: Seed api to create a router for the products,
     makes the server modular so we can have multiple files
     that have differnet routers
Author: Praneetha Gobburi
Date: 2-9-22*/

import express from 'express';
import data from '../data.js';
import Product from '../models/productModel';

const productRouter = express.Router();

userRouter.get('/seed', async (req, res) => {
  const createdProducts = await Product.insertMany(data.products);
  res.send({ createdProducts });
});
