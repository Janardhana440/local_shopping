const mongoose=require('mongoose');
const { emitWarning } = require('process');
const validator=require('validator');

ShopListSchema = new mongoose.Schema({
    name : {
        type:String,
    },
    rating : {
        type: Number,
        min: 0,
        max: 5,
    },
    address : {
        type:String,
        trim:true,
    },
    latitude : {
        type: Number,
        min : -90,
        max : 90,
    },
    longitude : {
        type: Number,
        min:-180,
        max:+180
    },
    phone : {
        type: String,
        validate(value)
        {
            if(!validator.isMobilePhone(value))
                throw new Error('Invalid mobile number');
        }
    },
    email : {
        type: String,
        lowercase:true,
        trim:true,
        validate(value)
        {
            if(!validator.isEmail(value))
                throw new Error('Invalis Email Address');
        }
    }
});
const Shop=mongoose.model('Shop',ShopListSchema);

module.exports=Shop;