import express from 'express';
import mongoose from 'mongoose';
import productRouter from './routers/productRouter.js';
import userRouter from './routers/userRouter.js';
//  import { useParams } from 'react-router';
import cors from 'cors';
import dotenv from 'dotenv';
import orderRouter from './routers/orderRouter.js';

//  const express=require('express');
dotenv.config();
const app=express();
// const cors=cors();
// require("cors");
app.use(express.json());
app.use(express.urlencoded({extended:true}));
mongoose
   .connect(process.env.MONGODB_URL||"mongodb://0.0.0.0/portfolio")
   .then(  console.log('Connected to MongoDB!!!'), err => console.log(`Error = ${err}`))


app.use('/api/users',userRouter);
app.use('/api/products',productRouter);
app.use('/api/orders',orderRouter);
app.get('/api/config/paypal',(req,res)=>{
    res.send(process.env.PAYPAL_CLIENT_ID||'sb');
});
app.use(cors());
app.get("/d",(req,res)=>{
    res.download("./resume.pdf")
})
app.get('/',(req,res)=>{

    res.send('server is ready');
});
app.use((err,req,res,next)=>{
    res.status(500).send({message:err.message});
});
const port=process.env.port||3001;
app.listen(port,()=>{
    console.log('serve at http://localhost:3001');
})




/*creating a very basic express serverce */



// sauv

// app.get('/api/products/:id',(req,res)=>{
//     // const { id } = useParams();
//      const product=data.products.find(x=>x._id===req.params.id);

//      if (product){
//                  res.send(product);
//              }else{
//                  res.status(404).send({message:'Product not found'});
        
//              }
//  });
//  app.get('/api/products',(req,res)=>{
//     res.send(data.products);
// });



//  app.get('/api/products/:id',(req,res)=>{
//     const { id } = useParams();
//      const product=data.products.find(x=>x._id===id);

//     if (product){
//          res.send(product);
//      }else{
//          res.status(404).send({message:'Product not found'});

//      }
//  })

//  mongoose.connect('mongodb://localhost/sitecom',{
//     useNewUrlParser: true, 

//     useUnifiedTopology: true 
   
//     }, err => {
//     if(err) throw err;
//     console.log('Connected to MongoDB!!!')
//     });