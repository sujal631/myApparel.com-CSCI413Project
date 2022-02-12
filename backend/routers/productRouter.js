/* Discription: Seed api to create a router for the products,
     makes the server modular so we are can have multiple files
     that have differnet routers
Date: 2-9-22*/

import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import data from '../data.js';
import Product from '../models/productModel.js';

const productRouter = express.Router();

productRouter.get('/seed', expressAsyncHandler(async(req, res) =>{
   // await Product.remove({});
    const createdProducts = await Product.insertMany(data.products);
    res.send({createdProducts});
})
);

export default productRouter;