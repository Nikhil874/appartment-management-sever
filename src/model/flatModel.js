const mongoose=require("mongoose");
const flatScheema=new mongoose.Schema({
    flatNo:{type:Number,required:true},
    block:{type:String,required:true},
    residentType:{type:String,required:true},
    residents:[{
        name:{type:String,required:true},
        age:{type:Number,required:true},
        gender:{type:String,required:true}
    }],
    managerId:{type:mongoose.Schema.Types.ObjectId,ref:"user"},
},
{
    versionKey:false,
    timestamps:true,
}
);
module.exports=mongoose.model("post",flatScheema);