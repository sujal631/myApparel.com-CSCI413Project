/*  Discription: Entry point of application server for communication,
            server created using express
    Date: 2-9-22*/

import express from 'express';
import mongoose from 'mongoose';
import productRouter from './routers/productRouter.js';

const app = express();
//connect backend and database
mongoose.connect('mongodb://localhost/myApparel', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

//send the data hard codded as a json file into the the url ../api/products
/*app.get('/api/products/:id', (req, res) => {
  const product = data.products.find((x) => x.id === req.params.id);
  if(product){
    res.send(product);
  }
  else{
    res.status(404).send({message: 'Product Not Found'});
  }
});

app.get('/api/products', (req, res) => {
  res.send(data.products);
});*/

app.use('/api/products', productRouter);

app.get('/', (req, res) => {
  res.send('Backend Server is ready');
});

app.use((err, req, res, next) => {
  res.status(500).send({message: err.message });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});
