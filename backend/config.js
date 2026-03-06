const mongoose=require('mongoose');
const mongoos=mongoose.connect("mongodb://localhost:27017/pollusatdata");
if(mongoos){
    
    console.log("Connected to MongoDB successfully in backend");
}
module.exports=mongoose;
