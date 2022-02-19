/* Discription: Seed api to create a router for the products,
     makes the server modular so we can have multiple files
     that have differnet routers
Author: Praneetha Gobburi
Date: 2-9-22*/

import express from 'express';
import data from '../data.js';
import expressAsyncHandler from 'express-async-handler';
import Product from '../models/productModel.js';

const productRouter = express.Router();

//api for sending list of product to fontend
productRouter.get(
  '/', 
  expressAsyncHandler(async (req, res) => {
  const produts = await Product.find({});// to return all products
  res.send(products);
  })
);

productRouter.get(
'/seed',
  expressAsyncHandler(async (req, res) => {
    // to prevent dulicate await Product.remove({});
    const createdProducts = await Product.insertMany(data.products);
    res.send({ createdProducts });
  })
);

productRouter.get(
  '/:id',
  expressAsyncHandler(async(req, res) => {
    const product = await Product.findById(req.paarams.id);
    if(product){
      res.send(products);
    }
    else{
      res.status(404).send({message: 'Product not Found'});
    }
  })
  );

export default productRouter;