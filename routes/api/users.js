const express=require('express');
const router=express.Router();
const jwt=require('jsonwebtoken');
const bcrypt=require('bcryptjs');
const passport=require('passport');




//load validation model of register
const validateRegisterInput = require('../../validation/register');
//load validation model of login
const validateLoginInput = require('../../validation/login');
//load user model
const User=require('../../models/User');

router.get('/test',(req,res)=>res.json({msg: 'users works'}));

router.post('/register',(req,res)=>{
    
//validation 
const {errors,isValid}=validateRegisterInput(req.body);

//check validation
if(!isValid){
    return res.status(400).json(errors);
}
    User.findOne({number:req.body.number}).then(user =>{
        if(user)
        {
         errors.number='Mobile Number already exists!';
         return res.status(400).json(errors);
        }
      
        else
        {
        
        
        const newUser= new User({
         name:req.body.name,
         number:req.body.number,
        
         password:req.body.password
        });
        
        bcrypt.genSalt(10,(err,salt)=>
        {
            bcrypt.hash(newUser.password,salt,(err,hash)=>{
             if(err){
                 console.log(err);
             }
           
             newUser.password=hash;
             newUser.save()    
             .then(user => res.json(user))
             .catch(err => console.log(err));
             });
             });
        
        }        
});
});
router.post('/login',(req,res)=>{
//validation 
const {errors,isValid}=validateLoginInput(req.body);

//check validation
if(!isValid){
    return res.status(400).json(errors);
}
    const number=req.body.number;
    const password=req.body.password;
    //find user by number
    User.findOne({number}).then(user=>{
        //check the user
        if(!user)
        {
            errors.number='user not found';
            return res.status(404).json(errors);
        }

        //check password
        bcrypt.compare(password,user.password).then(isMatch =>{
            if(isMatch)
            {
               //user matches
               const payload={id:user.id,name:user.name};//create JWT payload

               //sign token
               secretOrKey='secret';
               jwt.sign(
                   payload,secretOrKey,{expiresIn:7200},
                   (err,token)=>{
                       res.json({
                           success:true,
                           token:' bearer ' + token
                       })
                   }

               )
            }
            else
            {
                errors.password='password incorrect';
               return res.status(400).json(errors);
            }
        });
    });
});
//private route
router.get('/current',passport.authenticate('jwt',{session:false}),
(req,res)=>{
    res.json({
        id:req.user.id,
        name:req.user.name,
        number:req.user.number
    });
});

module.exports= router;