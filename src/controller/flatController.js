const express=require("express");
const Flat=require("../model/flatModel");
const router=express.Router();

router.post("/",async(req,res)=>{
    try{
        const flat=await Flat.create(req.body);
        res.status(201).send(flat);
        console.log(flat)
    }
    catch(e){
     console.log(e.message)
    }
  
})

router.get("/",async(req,res)=>{
    try{
        const flats=await Flat.find().lean().exec();
        res.status(201).send(flats);
        // console.log(flats)
    }
    catch(e){
     console.log(e.message)
    }
  
})
router.get("/:_id",async(req,res)=>{
    try{
        const flats=await Flat.find({managerId:req.params._id}).lean().exec();
        res.status(201).send(flats);
        // console.log(flats)
    }
    catch(e){
     console.log(e.message)
    }
  
})

module.exports=router 