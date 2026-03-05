const mongoose=require('mongoose');
const mongoos=mongoose.connect("mongodb://localhost:27017/pollusatdata");
if(mongoos){
    console.log("connected to database successfully IN MONGO");
}
module.exports=mongoose;
