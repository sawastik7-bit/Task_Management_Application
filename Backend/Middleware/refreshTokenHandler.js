// import dotenv from "dotenv";
// import jwt from 'jsonwebtoken';
// dotenv.config();
// export const refreshTokenHandler=(req,res)=>{
//     try{
//         const refreshToken=req.cookies.refreshToken;

//         if(!refreshToken){
//             return res.status(401).json({
//                 message:"Unauthorized access"
//             });
//         }
//     const verifiedToken=jwt.verify(refreshToken,process.env.REFRESH_TOKEN_SECRET);
    
//   const user = await User.findById(verifiedToken.id);

//         if (!user) {
//             return res.status(404).json({
//                 message: "User not found"
//             });
//         }

//     const newAccessToken=jwt.sign({
//         id:verifiedToken._id
//     },process.env.JWT_SECRET,
    
//         {expiresIn:"15m"});
    
//   return res.status(200).json({
//             message: "New access token generated",
//             token: newAccessToken
//         });

//     }catch(error){
//         return res.status(403).json({
//             message: "Invalid or expired refresh token"
//         });
//     }
// }
