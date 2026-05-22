import Task from "../Models/TaskModel.js";
import asyncHandler from "../Middleware/asyncHandler.js";
export const createTask= asyncHandler(async(req,res)=>{
    
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
        return res.status(201).json({message:'Task create successfully',task});
    });

export const getTask=asyncHandler(async(req,res)=>{
    
    const page=Number(req.query.page) ||1;
    const limit=Number(req.query.limit)||5;

    const skip=(page-1)*limit;
        
        const tasks= await Task.find({author:req.userData.userId}).populate('author','name email').sort({createdAt:-1}).skip(skip).limit(limit) ;
        if(!tasks.length){
            return res.status(404).json({
                message:"No tasks found for this user"
            });
        }
        return res.status(200).json({
            page,
            limit,
            count:tasks.length,
            tasks});
    })


export const deleteTask=asyncHandler(async(req,res)=>{
    
        const taskId=req.params.id;
        const task=await Task.findOneAndDelete({
            _id:taskId,
            author:req.userData.userId
        });

        if(!task){
            return res.status(404).json({
                message:"Task not found or unauthorized"
            });

            
        }
       return  res.status(200).json({
            message:"Task deleted successfully",
            task
        });
    })

 export const updateTask=asyncHandler(async(req,res)=>{
    

        const taskId=req.params.id;
        const {title,description}=req.body;
if(!title && !description)
{
    return res.status(400).json({
        message:"Atleast one field is required"
    });
}        const updateData={};
        if(title) updateData.title=title;
        if(description) updateData.description=description;
    const updatedTask = await Task.findOneAndUpdate(
            {
                _id:taskId,
                author:req.userData.userId
            },
            
               updateData
            ,
            {
                new:true,
                runValidators:true
            }
        );

        if(!updatedTask){
            return res.status(404).json({
                message:"Task not found or unauthorized"
            });
        }

        return res.status(200).json({
            message:"Task updated successfully",
            task:updatedTask
        });
    })