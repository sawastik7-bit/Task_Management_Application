import express from 'express';

import { authMiddleware } from '../Middleware/AuthMiddleware.js';
import {createUser,loginUser} from '../Controllers/UserController.js';

const UserRouter=express.Router();
UserRouter.get('/',(req,res)=>{
    res.send("Welcome to Task Management Application API");
});
UserRouter.post('/register',createUser);
UserRouter.post('/login',loginUser);

export default UserRouter;
