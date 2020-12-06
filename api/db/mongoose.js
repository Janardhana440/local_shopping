const mongoose=require('mongoose');

mongoose.connect('mongodb://localhost/lsdb',{useNewUrlParser:true,useUnifiedTopology:true},(err)=>{
    if(err) throw err;
    console.log("Connected to database");
});