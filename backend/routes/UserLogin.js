const express = require('express')
const router = express.Router();
const User = require('../model/User')
const { body, validationResult } = require('express-validator')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const JWT_SECRET = "vrajistrillionaire";
const fetchUser = require('../middleware/fetchUser')

// user creation
router.post('/createUser',[ // here check tha validation
    body('email','Enter a valid eamil').isEmail(),
    body('name','Enter a valid name, Name should be more than 1 characters').isLength({min:2}),
    body('password',"Enter a valid password, Password should be more than 5 characters").isLength({min:6})
],async(req,res) =>{
    let success = false;
    const errors = validationResult(req); // get the validation's result
    
    if(!errors.isEmpty()){  // if any errors come from validationReasult
        success = false;
        return res.status(400).json({success,errors: errors.array()})
    }

    try{
        let user = await User.findOne({email:req.body.email});
        success = false;
        if(user){
            return res.status(400).json({success, error: "Sorry a user with this email already exists" })
        }
        const solt = await bcrypt.genSalt(10)
        const secpasswrod = await bcrypt.hash(req.body.password,solt)
        
        
        user = await User.create({
        name: req.body.name,
        email:req.body.email,
        password:secpasswrod,
    })
    const data = {
        user:{
            id:user.id
        }
    }
    const authToken = jwt.sign(data,JWT_SECRET)
    success = true;
    res.json({success,authToken})
    
    }catch(error){
        console.error(error.message)
        res.status(500).send("Internal Server Error")

    }
})

// login user
router.post('/login',[ // here check tha validation
    body('email','Enter a valid eamil').isEmail(),
    body('password',"Enter a valid password, Password should be more than 5 characters").isLength({min:6})
],async(req,res) =>{
    let success = false;
    const errors = validationResult(req); // get the validation's result
    
    if(!errors.isEmpty()){  // if any errors come from validationReasult
        success = false;
        return res.status(400).json({success,errors: errors.array()})
    }
    const { email, password } = req.body;
    try{
       const user = await User.findOne({email});
       if(!user){
        success = false;
        res.status(400).json({success,error:"incorrect email"})
       }
       const passwordCompare = await bcrypt.compare(password,user.password);
       if(!passwordCompare){
        success = false
           return res.status(400).json({success,error:"incorrect Password"})
       }
    const data = {
        user:{
            id:user.id
        }
    }
    const authToken = jwt.sign(data,JWT_SECRET)
    success = true;
    res.json({success,authToken})
    
    }catch(error){
        console.error(error.message)
        res.status(500).send("Internal Server Error")

    }
})

// get user
router.post('/getusers',fetchUser,async (req, res) => {
    console.log('vraj')
    try {
        const userId = req.user.id
        const user = await User.findById(userId).select("-password")
        res.send(user)
    } catch (error) {
        console.error(error.message)
            res.status(500).send("Internal Server Error")
    }
    })

// add to card product in user
router.post('/:id',fetchUser,async(req,res)=>{
    console.log('add to cart performed');
    try{
        const userId = req.user.id;
        const user = await User.findBy(userId).select("-password")

    }catch (error) {
        console.error(error.message)
            res.status(500).send("Internal Server Error")
    }
})

module.exports = router;