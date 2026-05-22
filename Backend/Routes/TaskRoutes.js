import express from 'express';
import { authMiddleware } from '../Middleware/AuthMiddleware.js';
import {createTask,getTask,deleteTask, updateTask} from '../Controllers/TaskController.js'
import { createTaskValidator,updateTaskValidator,deleteTaskValidator } from '../validators/taskValidator.js';
const TaskRouter=express.Router();

TaskRouter.post("/tasks",authMiddleware,createTaskValidator,createTask);
TaskRouter.get("/tasks",authMiddleware,getTask);
TaskRouter.delete("/tasks/:id",authMiddleware,deleteTaskValidator,deleteTask);
TaskRouter.patch("/tasks/:id",authMiddleware,updateTaskValidator,updateTask);

export default TaskRouter;


