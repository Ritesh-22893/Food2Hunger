import { AppError } from "../Utils/AppError";
import { AppDataSource } from "../data-source";
import { Request, Response, NextFunction } from "express"
import { Data } from "../entity/Data";
import * as bcrypt from 'bcryptjs'
import * as jwt from 'jsonwebtoken'
const DataRepo= AppDataSource.getRepository(Data);


export const getData1=async(req:Request, res:Response, next:NextFunction)=>{
    try {
        await DataRepo.find().then(result=>{
            res.status(200).json({
                message:"data fetched",
                data:result
            })
        }).catch(error=>{
            next(new AppError(404,error))
        })
    } 
    catch (error) {
        next(new AppError(404,error))
    }
}
export const getSingleData1=async(req:Request, res:Response, next:NextFunction)=>{
    try {
        await DataRepo.findOneBy({id:req.params.id}).then(result=>{
            res.status(200).json({
                message:"data post",
                data:result
            })
        }).catch(error=>{
            next(new AppError(404,error))
        })
    } 
    catch (error) {
        next(new AppError(404,error))
    }
}

export const postData1=async(req:Request, res:Response, next:NextFunction)=>{
    try {
        req.body.document=req.file.filename
        await bcrypt.hash(req.body.password,10,function(err,hasedpassword){
            if(err){
                return next(new AppError(400,err.message))
            }
            console.log(hasedpassword)
            req.body.password=hasedpassword
       DataRepo.save(req.body).then(result=>{
            res.status(200).json({
                message:"data post",
                data:result
            })
        }).catch(error=>{
            next(new AppError(404,error))
        })
        })

    }
    catch (error) {
        next(new AppError(404,error))
    }
}
export const postDatalogin= async(req:Request, res:Response, next:NextFunction )=>{
    // #swagger.tags = ['NewUser']

    try{

        // const hasedpassword=await bcrypt.hash(req.body.password,10);

        let data=await  DataRepo.findOneBy({email:req.body.email})
        console.log(data,req.body);
        if(!data){
            return next(new AppError(500,"data not found"))
        }
        await bcrypt.compare(req.body.password,data.password,function(err,hasedpassword){
            if(err){
                return next(new AppError(400,err.message))
            }
            console.log(hasedpassword)
       
                // NewUserRepo.save(req.body).then(result=>{

                    if(hasedpassword){
                   let token=jwt.sign({
                       id:data.id,
                       email:data.email
                   },"secretkey")
                res.status(200).json({
                    message:"Data posted",
                    token:token
                })
               }else{
                next(new AppError(400,'err'))
               }
            //    })
            //    .catch(error=>{
            //     next(new AppError(400,'error'))
            //    })
        })
        
    }
    catch(error){
        console.log(error)
        next(new AppError(400, 'error'))
    }
}
