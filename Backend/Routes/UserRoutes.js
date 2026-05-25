import express from 'express';
import {body} from 'express-validator'
import { authMiddleware } from '../Middleware/AuthMiddleware.js';
// import { refreshTokenHandler} from '../Middleware/refreshTokenHandler.js';
import {createUser,loginUser,logoutUser} from '../Controllers/UserController.js';
import { registerTaskValidator,loginTaskValidator } from '../validators/taskValidator.js';


const UserRouter=express.Router();
UserRouter.get('/',(req,res)=>{
    res.send("Welcome to Task Management Application API");
});
UserRouter.post('/register',registerTaskValidator,createUser);
UserRouter.post('/login',loginTaskValidator,loginUser);
// UserRouter.post('/refresh-token',refreshTokenHandler);
UserRouter.post('/logout',logoutUser);

export default UserRouter;
