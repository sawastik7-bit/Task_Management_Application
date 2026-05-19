import mongoose from "mongoose";
import User from "./UserModel.js"

const taskSchema=new mongoose.Schema({
    title:String,
    description:String,
  author:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'User'
  },
});

const Task=mongoose.model('Task',taskSchema);
export default Task;

