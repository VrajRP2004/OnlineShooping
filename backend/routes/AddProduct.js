const express = require('express')
const router = express.Router();
const Product = require('../model/Product')
const { body, validationResult } = require('express-validator')
const fetchUser = require('../middleware/fetchUser')

// add product
router.post("/addproduct",fetchUser, [
    body('name', 'Product\'s name is required').isString(),
    body('price', 'Product\'s price is required').isNumeric(),
    body('description', 'Product\'s description is required').isString(),
    body('image','image url is required').isString()
    // custom((value, { req }) => {
        // if (!req.file) {
        //     throw new Error('Product\'s image is required');
        // }
        // // Check file type using a utility function
        // if (!checkFileType(req.file.mimetype)) {
        //     throw new Error('Invalid file type. Only images are allowed.');
        // }
        // return true;
    // })
], async (req, res) => {
        let success = false;
        let {name,price,description,image} = req.body;
        const errors = validationResult(req); // get the validation's result

        if (!errors.isEmpty()) {  // if any errors come from validationReasult
            success = false;
            return res.status(400).json({ success, errors: errors.array() })
        }
        try{
        const product = new Product({
            name,price,description,image,user:req.user.id
        })
        const saveProduct = await product.save()
        res.json(saveProduct)
    } catch (error) {
        console.error(error.message)
        res.status(500).send("Internal Server Error")
    }
    })
    module.exports = router;