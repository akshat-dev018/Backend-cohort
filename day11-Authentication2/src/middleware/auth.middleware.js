import jwt from 'jsonwebtoken'
import userModel from '../models/user.model.js'
import dotenv from 'dotenv'
dotenv.config();

export const authenticate = async (req,res,next)=>{
// api ke controller ki req aur authenticate ki req same hoti hai
    const authHeader = req.headers.authorization;
//header => jb bhi koi sa bhi user server pe req kr rha hota hai agr usko bht 
// simple sa data pauchana hota hai wo header ka use kr skta hai

    if(!authHeader){
        return res.status(401).json({
            message:"token not found"
        })
    }

    const token = authHeader.split(" ")[1];

    const data = jwt.verify(token,process.env.JWT_SECRET);

    const user = await userModel.findById(data.id)

    // ab user ka data controller tk kaise pass hoga
    req.user = user;

    next()
}