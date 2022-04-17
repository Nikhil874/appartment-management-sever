const { query } = require("express");
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
router.get("/residents/:id",async(req,res)=>{
    try{
        console.log("a")
        const flat=await Flat.findOne({_id:req.params.id}).lean().exec();
        
        res.status(201).send(flat);
        // console.log(flats)
    }
    catch(e){
     console.log(e.message)
    }
  
})
router.get("/:_id",async(req,res)=>{
    try{
        let flats;
      if(req.query.flatNo==1){
         flats=await Flat.find({managerId:req.params._id}).sort({flatNo:1}).lean().exec();
         console.log("sorted")
      }
         flats=await Flat.find({managerId:req.params._id}).lean().exec();
        res.status(201).send(flats);
        // console.log(flats)
    }
    catch(e){
     console.log(e.message)
    }
  
})

module.exports=router 