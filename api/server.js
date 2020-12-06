const express=require('express');
require('./db/mongoose.js');
const shopRouter=require('./Router/shop.js');
const itemRouter=require('./Router/item.js');
const { MongooseDocument } = require('mongoose');

const app=express();

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});
app.use(express.json());
app.use(shopRouter);
app.use(itemRouter);

app.listen(3500,()=>{
    console.log("Server running at http://locahost:3500");
});