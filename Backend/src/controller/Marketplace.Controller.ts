import { AppError } from "../Utils/AppError";
import { AppDataSource } from "../data-source";
import { Request, Response, NextFunction } from "express"
import { Marketplace } from "../entity/Marketplace";

const MarketRepo= AppDataSource.getRepository(Marketplace);


export const getDataMarket=async(req:Request, res:Response, next:NextFunction)=>{
    try {
        await MarketRepo.find().then(result=>{
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

export const postDataMarket=async(req:Request, res:Response, next:NextFunction)=>{
    try {
        req.body.image=req.file.filename
        await MarketRepo.save(req.body).then(result=>{
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