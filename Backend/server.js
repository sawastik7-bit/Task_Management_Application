import express from 'express';
import UserRouter from './Routes/UserRoutes.js';
import TaskRouter from './Routes/TaskRoutes.js'
import dotenv from 'dotenv';
import {connectDB} from './Config/Connection.js';
import rateLimit from 'express-rate-limit';
import cookieParser from 'cookie-parser';

dotenv.config();
const app=express();
connectDB();

const apiLimiter=rateLimit({
    windowMs:15*60*1000,
    max:100,
    message:{
        message:"Too many requests,try again later"
    }
});

app.use(express.json());
app.use(cookieParser);
app.use('/api',apiLimiter);
app.use("/api",UserRouter);
app.use("/api",TaskRouter);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
});

app.listen(process.env.PORT || 5000,()=>{
    console.log(`server is running on port ${process.env.PORT || 5000}`);
});

