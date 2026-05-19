import express from 'express';
import { authMiddleware } from '../Middleware/AuthMiddleware.js';
import {createTask} from '../Controllers/TaskController.js'
const TaskRouter=express.Router();

TaskRouter.post("/tasks/create",authMiddleware,createTask);

export default TaskRouter;


