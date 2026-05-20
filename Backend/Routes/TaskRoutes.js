import express from 'express';
import { authMiddleware } from '../Middleware/AuthMiddleware.js';
import {createTask,getTask,deleteTask, updateTask} from '../Controllers/TaskController.js'
const TaskRouter=express.Router();

TaskRouter.post("/tasks",authMiddleware,createTask);
TaskRouter.get("/tasks",authMiddleware,getTask);
TaskRouter.delete("/tasks/:id",authMiddleware,deleteTask);
TaskRouter.patch("/tasks/:id",authMiddleware,updateTask);

export default TaskRouter;


