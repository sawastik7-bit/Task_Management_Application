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
        return res.status(201).json({message:'Task create successfully',task});
    }catch(error){
        res.status(500).json({message:'server error',error:error.message});
    }
}

export const getTask=async(req,res)=>{
    try{
        
        const tasks= await Task.find({author:req.userData.userId}).populate('author','name email') ;
        if(!tasks.length){
            return res.status(404).json({
                message:"No tasks found for this user"
            });
        }
        return res.status(200).json(tasks);
    }catch(err){
         console.error('Error fetching tasks:', err);
    return res.status(500).json({ error: 'Server error' });
    }
}


export const deleteTask=async(req,res)=>{
    try{
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
    }catch (error) {

        console.error(error);

       return  res.status(500).json({
            message: "Server Error and this is the task error"
        });
    }
}

 export const updateTask=async(req,res)=>{
    try{

        const taskId=req.params.id;
        const {title,description}=req.body;

        const updateData={};
        if(title) updateData.title=title;
        if(description) update.Data.description=description;

if(!taskId){
   return  res.status(404).json("Task not found");

}
    const updatedTask = await Task.findOneAndUpdate(
            {
                _id:id,
                author:req.userData.userId
            },
            {
               updateData
            },
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
    }catch(err){
        console.log(err);
        res.status(500).json(err);
    }
}
