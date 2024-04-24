const mongoose = require("mongoose");

const {Schema} = mongoose;
const productSchema = new Schema({
    productname:{
        type:String,
        required:true
    },
    productprice:{
        type:Number,
        required:true
    },
    productdescription:{
        type:String,
        required:true
    },
    productimage:{
        type:String,
        required:true
    }
})

const  Product = mongoose.model('product',productSchema)
module.exports = Product;