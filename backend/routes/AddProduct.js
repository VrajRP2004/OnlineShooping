const express = require('express')
const router = express.Router();
const Product = require('../model/Product')
const { body, validationResult } = require('express-validator')
const fetchUser = require('../middleware/fetchUser')

// add product
router.post("/addproduct",fetchUser, [
    body('productname', 'Product\'s name is required').isString(),
    body('productprice', 'Product\'s price is required').isNumeric(),
    body('productdescription', 'Product\'s description is required').isString(),
    body('productimage','image url is required').isString()
], async (req, res) => {
    try{
        let {name,price,description,image} = req.body;
        const errors = validationResult(req); // get the validation's result

        if (!errors.isEmpty()) {  // if any errors come from validationReasult
            return res.status(400).json({errors: errors.array() })
        }
        
        const product = new Product({
            name,price,description,image
        })
        const saveProduct = await product.save()
        res.json(saveProduct)
    } catch (error) {
        console.error(error.message)
        res.status(500).send("Internal Server Error")
    }
    })
module.exports = router;