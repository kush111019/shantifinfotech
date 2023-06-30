const mongoose = require('mongoose')


const isValidDetails = (requestBody) => Object.keys(requestBody).length > 0;


const isValidValue = (value) => {
    if (typeof value === "undefined" || value === null)
        return false;
    if (typeof value === "string" && value.trim().length === 0)
        return false;
    return true;
};


const isValidCategory = function(value){

if((["electronics","electrical","fmcg"].indexOf(value)==-1))
return false;
else
 return true;
}

const isBooleanValue = function(value){
    if(typeof value!=="boolean") return false;
    return true;
}


const isValidObjectId = (objectId) => mongoose.Types.ObjectId.isValid(objectId)


module.exports = { isValidValue, isValidDetails,isValidObjectId,isValidCategory,isBooleanValue}