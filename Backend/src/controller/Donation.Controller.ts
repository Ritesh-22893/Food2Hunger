import { AppError } from "../Utils/AppError";
import { AppDataSource } from "../data-source";
import { Request, Response, NextFunction } from "express"

import { Donation } from "../entity/Donation";

const DonationRepo= AppDataSource.getRepository(Donation);


export const getDataDonation=async(req:Request, res:Response, next:NextFunction)=>{
    try {
        await DonationRepo.find().then(result=>{
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
export const getSingleDataDonation=async(req:Request, res:Response, next:NextFunction)=>{
    try {
        await DonationRepo.findOneBy({id:req.params.id}).then(result=>{
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

export const postDataDonation=async(req:Request, res:Response, next:NextFunction)=>{
    try {
        req.body.photo=req.file.filename
        console.log(req.body)
        await DonationRepo.save(req.body).then(result=>{
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
