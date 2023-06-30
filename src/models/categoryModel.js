const mongoose = require("mongoose");

const productCategorySchema = new mongoose.Schema(
    {
     name:{type:String,required:true},
     categoryType:{type:String,required:true,enum:["electronics","electrical","fmcg"]},
     isAvailable:{type:Boolean,required:true}
    },
    {timestamps:true}
    )
   
    module.exports=mongoose.model('productCategoryShanti',productCategorySchema);