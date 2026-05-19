import Task from "../Models/TaskModel.js";

export const createTask=async(req,res)=>{
    try{
        const {title,description}=req.body;
        
        if(!title){
            return res.status(400).json({message:"Title is required"});
        }

        const task= new Task({
            title,
            description,
            author:req.userData.userId
        });
        await task.save();
        res.status(201).json({message:'Task create successfully',task});
    }catch(error){
        res.status(500).json({message:'server error',error:error.message});
    }
}
