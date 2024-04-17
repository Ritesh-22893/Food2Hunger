import { AppError } from "../Utils/AppError";
import { AppDataSource } from "../data-source";
import { Request, Response, NextFunction } from "express"
import { Data } from "../entity/Data";

const DataRepo= AppDataSource.getRepository(Data);


export const getData=async(req:Request, res:Response, next:NextFunction)=>{
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
export const getSingleData=async(req:Request, res:Response, next:NextFunction)=>{
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

export const postData=async(req:Request, res:Response, next:NextFunction)=>{
    try {
        await DataRepo.save(req.body).then(result=>{
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
