import mongoose from "mongoose";
import User from "./UserModel.js"

const taskSchema=new mongoose.Schema({
    title:{
      type:String,
      required:true,
      trim:true,
      minlength:3,
      maxlength:100,
    },
    description:{
      type:String,
      trim:true,
      maxlength:500,

    },
  author:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'User',
    required:true,

  }
},{timestamps:true});

const Task=mongoose.model('Task',taskSchema);
export default Task;

