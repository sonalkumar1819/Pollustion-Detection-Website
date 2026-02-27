const express=require('express');
const app=express();
const cors=require('cors');
require('./config');
const JWT=require('jsonwebtoken');
const JWT_SECRET="sonal jha";
let User=require('./User');
const bcrypt=require('bcrypt');
app.use(cors());
app.use(express.json());

app.post('/singup',async(req,res)=>{
    if(!req.body.name||!req.body.email||!req.body.password){
        return res.status(400).json({
            success:false,
           message:"Name, email and password are required fields all fields are required to create an account"
        })
    }
    let userexist=await User.findOne({email:req.body.email});
    if(userexist){
        return res.status(400).json({
            success:false,
            message:"User is already exist with this email"
        });
    }

    //now here i am doing the hash of the password
    const saltRounds=10;
    const hashedpassword=await bcrypt.hash(req.body.password,saltRounds);
    req.body.password=hashedpassword;
    let user=new User(req.body);
    user=await user.save();
    if(!user){
        return res.status(400).json({
            success:false,
            message:"Error while craeting the user account"
        });
    }
    user=user.toObject();
    delete user.password;
    JWT.sign({user},JWT_SECRET,{expiresIn:'2h'},(err,token)=>{
        if(err){
            return res.status(500).send("Error in token generation");
        }
        res.status(201).send({
            message:"User registered successfully",
            user,
            auth:token
        });
    });

});
// app.test('/test',verifyToken,(req,res)=>{
//     res.send("This is a protected route");
// })
app.post('/login',async(req,res)=>{
    if(!req.body.email||!req.body.password){
        return res.status(400).json({
            success:false,
            message:"Email and password are required"
        })
    }
    let user=await User.findOne({email:req.body.email});
    if(!user){
        return res.status(400).json({
            success:false,
            message:"You don't have an account please Signup first"
        })
    }
    const isPasswordValid=await bcrypt.compare(req.body.password,user.password);
    if(!isPasswordValid){
        return res.status(400).json({
            success:false,
            message:"Invalid password"
        })
    }
    user=user.toObject();
    delete user.password;
    JWT.sign({user},JWT_SECRET,{expiresIn:'2h'},(err,token)=>{
        if(err){
            return res.status(500).send("Error in token generation");
        }
        res.send({user,auth:token});
    })

})
//for verify the token we have to ceate a middleware
const verifyToken=(req,res,next)=>{
    const token=req.headers['authorization'];
    if(!token){
        return res.status(401).send("Access denied. No token provided.");
    }
    JWT.verify(token,JWT_SECRET,(err,decoded)=>{
        if(err){
            return res.status(401).send("Invalid token.");
        }
        // req.user=decoded.user;
        next();
    })
}


app.listen(3000,()=>{
    console.log('Server is running on port 3000');
})