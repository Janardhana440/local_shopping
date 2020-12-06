const express=require('express');
const { deleteOne } = require('../Model/item.js');
const router=new express.Router();
const Item=require('../Model/item.js');

router.get('/shops/items',async (req,res)=>{
    const items=await Item.find({},function(error,result){
        if(error) throw error;
        res.send(result);
    });
});
router.get('/:shop/items',async (req,res)=>{
    const items=await Item.find({ shop: req.params.shop },function(error,result){
        if(error) throw error;
        res.send(result);
    });
});
router.get('/shops/:item',async (req,res)=>{
    const items=await Item.find({ item : req.params.item},function(error,result){
        if(error) throw error;
        res.send(result);
    });
});
router.get('/:shop/:item',async (req,res)=>{
    const items=await Item.find({ shop: req.params.shop , item : req.params.item},function(error,result){
        if(error) throw error;
        res.send(result);
    });
});
router.patch('/:shop/:item',async (req,res)=>{
    await Item.updateMany({ shop:req.params.shop , item:req.params.item },req.body,(err)=>{if(err) throw err;res.json({"msg":"success"});});
});
router.delete('/:shop/items',async (req,res)=>{
    console.log("10977");
    await Item.deleteMany({ shop:req.params.shop },(err)=>{if(err) throw err;res.json({"msg":"success"});});
});
router.delete('/:shop/:item',async (req,res)=>{
    Item.findOneAndDelete( { shop:req.params.shop , item:req.params.item },(err)=>{if(err) throw err;res.json({"msg":"success"});});
});
router.post('/:shop/items',async (req,res)=>{
    const new_document=new Item(req.body);
    await new_document.save((err)=>{
        if(err) throw err;
        else res.json(req.body);
    });
});
module.exports=router;