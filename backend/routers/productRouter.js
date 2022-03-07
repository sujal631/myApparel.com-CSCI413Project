/* Discription: Seed api to create a router for the products,
     makes the server modular so we are can have multiple files
     that have differnet routers
Date: 2-9-22*/

import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import data from '../data.js';
import Product from '../models/productModel.js';

const productRouter = express.Router();

productRouter.get('/', expressAsyncHandler(async(req, res) =>{
     const name = req.query.name || '';
     const category = req.query.category || '';
     const nameFilter = name ? {name: {$regex: name, $options:'i'}} : {};
     const categoryFilter = category ? {category} : {};
     const products = await Product.find({
          ...nameFilter,
          ...categoryFilter,
     }).populate('');
     res.send(products);
}));

productRouter.get('/categories', expressAsyncHandler(async(req, res) =>{
     const categories = await Product.find().distinct('category');
     res.send(categories);
}));

productRouter.get('/seed', expressAsyncHandler(async(req, res) =>{
   // await Product.remove({});
    const createdProducts = await Product.insertMany(data.products);
    res.send({createdProducts});
})
);

productRouter.get('/:id', expressAsyncHandler(async (req, res) =>{
     const product = await Product.findById(req.params.id);
     if(product){
          res.send(product);
     }
     else{
          res.status(404).send({message: 'Product Not Found'})
     }
}));

export default productRouter;
