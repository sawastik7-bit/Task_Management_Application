import express from 'express';
import UserRouter from './Routes/UserRoutes.js';
import TaskRouter from './Routes/TaskRoutes.js'
import dotenv from 'dotenv';
import {connectDB} from './Config/Connection.js';

dotenv.config();
const app=express();
connectDB();

app.use(express.json());

app.use("/api",UserRouter);
app.use("/api",TaskRouter);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
});

app.listen(process.env.PORT || 5000,()=>{
    console.log(`server is running on port ${process.env.PORT || 5000}`);
});

