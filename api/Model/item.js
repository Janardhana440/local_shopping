const mongoose=require('mongoose');
const validator=require('validator');

const itemSchema=new mongoose.Schema({
    shop:{ type:String },
    item:{ type:String },
    availability:{ type:Boolean },
    quantity:{ type:Number , min:0 },
    price:{ type:Number , min:0 },
    discount:{ type:Number , max:100 , min:0 }
});
const Item=mongoose.model('Item',itemSchema);

module.exports=Item;