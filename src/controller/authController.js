const jwt = require("jsonwebtoken")
const User = require("../model/userModel");
const express=require("express")
const router=express.Router();
const newToken = (user) => {
    return jwt.sign({ user }, "ihgdfiuDGfiuhdsdhavalchedda");
  };

router.post("/register",async (req,res)=>{
    try{
        console.log(req.body)
        let user=await User.findOne({email:req.body.email}).lean().exec();
        // console.log(user)
        if(user){
            return res.status(400).send({ message: "Please try another email" });
        }
     user=await User.create(req.body);
        const token=newToken(user);
        res.status(201).send({user,token});
    }
    catch(err){
        res.status(500).send(err.message);   
    }
})



router.post("/login",async (req, res) => {
    try {
      const user=await User.findOne({email:req.body.email});    
      if(!user){
        return res.send("email or password incorrect");
      }
  
      const match = user.checkPassword(req.body.password);
  
      if (!match)
        return res
          .status(400)
          .send({ message: "Please try another email or password" });
  
   
      const token = newToken(user);
  
    
      res.send({ user, token });
      
    } catch (err) {
      res.status(500).send(err.message);
    }
  });

module.exports=router;