
// the main issue i faced here was , 
// i think it was about token expiry , 
// it was set to 1 hr so i was trying to create task without log in after 1 day , 
// so i was not able to debug it at first , but now i have changed it to 1d so that is easy to test some operations.
// Also the id name convention inside the jwt sign token must be same as in authentication middleware .


import User from '../Models/UserModel.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();
const secret_key=process.env.JWT_SECRET;
export const createUser=async(req,res)=>{ 
    try{
        const {name,email,password}=req.body;
        if(!name || !email || !password){
            return res.status(400).json({message:"Please fill all the fields and details correctly"});
        }

        const userExists=await User.findOne({email});
        if(userExists){
            return res.status(400).json({message:"User already exists"});

        }
    
const hashedPassword=await bcrypt.hash(password,10);

        const user=await User.create({
            name,
            email,
            password:hashedPassword
        });

return res.status(201).json({message:"User created successfully",user:user.name});
    }catch(error){
        return res.status(500).json({message:"Internal server error"});
    }
}



export const loginUser=async(req,res)=>{
    try{
        const {email,password}=req.body;
if(!email || !password){
    return res.status(400).json({
        message:"Email and password required"
    });
}

        const user=await User.findOne({email});
      
if(!user){
    return res.status(401).json({error:"Authentication failed , try again"});

}
const passwordMatch=await bcrypt.compare(password,user.password);
console.log(passwordMatch);
if(!passwordMatch){
    return res.status(401).json({error:"Authentication failed , try again"});
}
const payload={
    id:user._id,
    name:user.name


};
const token=jwt.sign(payload,secret_key,{expiresIn:'1d'});
res.json({
    message:'Login successful',
    token
});


    }catch(error){
        res.status(500).json({error:"Server error"});
    }
}
