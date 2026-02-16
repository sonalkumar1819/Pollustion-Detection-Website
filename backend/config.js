const mongoose=require('mongoose');
const mongoos=mongoose.connect("mongodb://localhost:27017/pollusatdata");
if(mongoos){
    console.log("Database connected successfully");
}
module.exports=mongoose;
