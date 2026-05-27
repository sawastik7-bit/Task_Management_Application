import express from 'express';
import { authMiddleware } from '../Middleware/AuthMiddleware.js';
import {createTask,getTask,deleteTask} from '../Controllers/TaskController.js'
import { createTaskValidator,deleteTaskValidator } from '../validators/taskValidator.js';
const TaskRouter=express.Router();

TaskRouter.post("/tasks",authMiddleware,createTaskValidator,createTask);
TaskRouter.get("/tasks",authMiddleware,getTask);
TaskRouter.delete("/tasks/:id",authMiddleware,deleteTaskValidator,deleteTask);


export default TaskRouter;


