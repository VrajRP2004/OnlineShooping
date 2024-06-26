const express = require('express')
const router = express.Router();
const Product = require('../model/Product')
const { body, validationResult } = require('express-validator')
const fetchUser = require('../middleware/fetchUser')

// getch all product
router.get("/fetchallproduct",async(req,res)=>{
    try{
        const Products = await Product.find({ unid:"hitanshijoyajinal" })
        res.json(Products)
    }catch(error){
        console.error(error.message)
        res.status(500).send("Internal Server Error")
    }
})

// get one product by ID
router.get("/fetchallproduct/:id",async(req,res)=>{
    
    try{
        let product = await Product.findById(req.params.id)
    res.json(product)
    }catch(error){
        console.error(error.message)
        res.status(500).send("Internal Server Error")
    }
})


// add product
router.post("/addproduct",fetchUser, [
    body('productname', 'Product\'s name is required').isString(),
    body('productprice', 'Product\'s price is required').isNumeric(),
    body('productdescription', 'Product\'s description is required').isString(),
    body('productimage','image url is required').isString()
], async (req, res) => {
    try{
        let {productname,productprice,productdescription,productimage} = req.body;
        const errors = validationResult(req); // get the validation's result

        if (!errors.isEmpty()) {  // if any errors come from validationReasult
            return res.status(400).json({errors: errors.array() })
        }
        
        const product = new Product({
            productname,productprice,productdescription,productimage
        })
        const saveProduct = await product.save()
        res.json(saveProduct)
    } catch (error) {
        console.error(error.message)
        res.status(500).send("Internal Server Error")
    }
    })
module.exports = router;