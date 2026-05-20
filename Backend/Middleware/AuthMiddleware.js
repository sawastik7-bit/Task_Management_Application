import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();
const secret_key=process.env.JWT_SECRET;

export const authMiddleware=(req,res,next)=>{
    try {

        const authHeader = req.headers.authorization;

        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return res.status(401).json({
                error: "No token provided"
            });
        }

        const token = authHeader.split(' ')[1];

        const decodedToken = jwt.verify(token, secret_key);

        req.userData = {
            userId: decodedToken.id, 
            name:decodedToken.name,
        };

        
        next();

    } catch (error) {
       
        return res.status(401).json({
         
            message:"Invalid or expired token"
        });
    }
};


