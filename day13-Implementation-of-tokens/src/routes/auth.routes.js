import  { Router } from 'express';
import userModel from '../models/user.model.js';
import bcrypt from 'bcryptjs';
import { generateTokens , verifyAccessToken, verifyRefreshToken } from '../utils/auth.js';

const router = Router();

router.post("/register", async (req,res)=>{
    const {name,email,password} = req.body;

    const isUserExist = await userModel.findOne({email});

    if(isUserExist){
        return res.status(400).json({
            message:"user already exist",
            errors:[
                {
                    fields:"email",
                    // path:"email", we can use any of them
                    message:"user already exist",
                }
            ]
        })
    }

    const user = await userModel.create({
        name,
        email,
        passwordHash : await bcrypt.hash(password,12)
    })

    const {accessToken,refreshToken} = generateTokens({userId:user._id});

    // jo refresh token humne generate kra hoga usko hum  user ke data base m save krenge
    user.refreshToken = refreshToken
    await user.save()

    res.cookie("refreshToken",refreshToken,{
        httpOnly:true, //now client side js can-not read my token stored 
    })

    res.status(201).json({
        message:"user registered successfully",
        data:{
            user:{
                name:user.name,
                email:user.email,
            }
        },
        accessToken
    })

})


// iss api pe user req krega aur usko uski details mil jayegi
router.get("/me",async(req,res)=>{
    const accessToken = req.headers.authorization.split(" ")[1];

    try {
        const decoded = verifyAccessToken(accessToken);

        const user = await userModel.findById(decoded.id);

        res.status(200).json({
            message:"User fetched successfully",
            data:{
                name:user.name,
                email:user.email,
            }
        })

    } catch (err) {
        return res.status(401).json({
            message: "Invalid or Expired access token"
        })
    }

})



//iss api se hum naya acccess and refresh token generate krenge
router.post("/refresh",async(req,res)=>{

    const refreshToken = req.cookies.refreshToken;


    // agr refreshToken cookie m nhi aata hai
    if(!refreshToken){
        return res.status(401).json({
            message:"Unauthorized,refresh token not found",
        })
    }

    try {
        const decoded = await verifyRefreshToken(refreshToken);

         const user = await userModel.findById(decoded.id);

         if(refreshToken!= user.refreshToken){
            user.refreshToken = null,
            await user.save()

            return res.status(401).json({
                message: "refresh token mismatch"
            })
        }

            const {accessToken, refreshToken:newRefreshToken} = generateTokens({userId:user._id});

            res.cookie("refreshToken",newRefreshToken,{httpOnly:true});

            user.refreshToken = newRefreshToken;
            await user.save();

            res.status(200).json({
                message: "Token refreshed successfull",
                accessToken
            })

         

    } catch (err) {
        return res.status(401).json({
            message:"Invalid or expired refresh token",
        })
    }
})

export default router; 