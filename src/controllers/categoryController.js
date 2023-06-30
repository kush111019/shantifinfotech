const productModel = require("../models/categoryModel");
const validators = require("../validations/validations");

const addCategory = async function(req,res)
{
 
let body=req.body;

if(!validators.isValidDetails(body)){
 return res.status(400).send({status:false,message:"details are not their"});
}

let{name,categoryType,isAvailable} = body;

if(!validators.isValidValue(name)){
 return res.status(400).send({status:false,message:"name  is not a string"});
}

if(!validators.isValidValue(categoryType)){
return res.status(400).send({status:false,message:"category type is not a string"})
}

if(!validators.isValidCategory(categoryType)){
return res.status(400).send({status:false,message:"not a right category type"});
}

if(!validators.isBooleanValue(isAvailable)){
return res.status(400).send({status:false,message:"not a boolean value"});
}

const data = await productModel.create(body);
return res.status(201).send({status:true,message:"product category is added successfully"});
}


const updateCategory = async function(req,res){

  let body = req.body;

  if(!validators.isValidDetails(body)){
    return res.status(400).send({status:false,message:"details are not their"});
   }

   let {productId,name,categoryType,isAvailable} = body; 
   
  
   if(!validators.isValidObjectId(productId)){
    return res.status(400).send({status:false,message:"invalid product id"});
   }
   if(!validators.isValidValue(name)){
    return res.status(400).send({status:false,message:"name is not a string"});
   }
   
   if(!validators.isValidValue(categoryType)){
   return res.status(400).send({status:false,message:"category type is not a string"})
   }
   
   if(!validators.isValidCategory(categoryType)){
   return res.status(400).send({status:false,message:"not a valid category type"});
   }
   
   if(!validators.isBooleanValue(isAvailable)){
   return res.status(400).send({status:false,message:"not a boolean value"});
   }
  
 const productExists = await productModel.findOne({_id:productId});

 if(!productExists){
  return res.status(400).send({status:false,message:"product not exists"});
 }
 const data = await productModel.findByIdAndUpdate(
 {_id:productId},
 {$set:{name:name,categoryType,isAvailable}},
 {new:true}
 )

 return res.status(200).send({status:true, data:data});
 }

 const getCategory = async function(req,res){

 let body = req.body;

 if(!validators.isValidDetails(body)){
    return res.status(400).send({status:false,message:"details are not their"});
   }

let productId = body.productId;

if(!validators.isValidObjectId(productId)){
    return res.status(400).send({status:false,message:"objectId is not a valid object id"});
}

let data =  await productModel.findById({_id:productId});

return res.status(200).send({status:true,message:data});

 }

module.exports = {addCategory,updateCategory,getCategory};