const express=require("express");
const connect=require("./src/db/config");
const UserController=require("./src/controller/authController")
const FlatController=require("./src/controller/flatController")
const app=express();
app.use(express.json());
app.use("/users",UserController);
app.use("/flats",FlatController);
app.listen(3001,async()=>{
   try {
        await connect();
        console.log("listening to port 6000")
    }
  catch(e){
      console.log(e.message)
  }
})