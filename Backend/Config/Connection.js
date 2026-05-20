import User from'../Models/UserModel.js';
import mongoose from 'mongoose';

 export const connectDB=async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI).catch(err=>{
            console.error('Database connection error: ',err);
        });
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        process.exit(1);
    }
}