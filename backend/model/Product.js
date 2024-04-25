const mongoose = require("mongoose");

const {Schema} = mongoose;
const un1 = "hitanshijoyajinal"
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
    },
    unid:{
        type:String,
        default:un1

    }
})

const  Product = mongoose.model('product',productSchema)
module.exports = Product;