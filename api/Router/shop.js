const express=require('express');
const router=new express.Router();
const Shop=require('../Model/shop.js');

router.get('/shops',async (req,res)=>{
    console.log("GET request recieved");
    const shops=await Shop.find({},function(error,result){
        if(error) throw error;
        res.send(result);
    });
});
router.get('/:shop',async (req,res)=>{
    console.log("GET request recieved");
    const shops=await Shop.find({name : req.params.shop},function(error,result){
        if(error) throw error;
        res.send(result);
    });
});
router.post('/shops',async (req,res)=>{
    var error=0;
    console.log('POST request recieved over /shops');
    console.log(req.body);
    const new_document=new Shop(req.body);
    await new_document.save(function(error,result){
        if(error) throw error;
        res.send(result);
    });
});
module.exports=router;