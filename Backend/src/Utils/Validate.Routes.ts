import { NextFunction, Request, Response } from "express";
import { AppError } from "./AppError";
import * as jwt from "jsonwebtoken";

interface RequestCustom extends Request{
    User:any;
}
const Auth = async(req:RequestCustom, res:Response, next:NextFunction)=>{
    try {
        console.log(req.headers.authorization);
        let token :any
        token=req.headers.authorization.split('Bearer ')[1]
        const decodedToken= await jwt.verify(token,'secretkey')
        const user = await decodedToken
        console.log(user)
        req.User=user;
        next()
        console.log(token);
    } 
    catch (error) {
    next(new AppError(400,'Invalid Request'))
    }
}
export default Auth;