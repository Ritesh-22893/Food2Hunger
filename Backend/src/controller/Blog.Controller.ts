import { AppError } from "../Utils/AppError";
import { AppDataSource } from "../data-source";
import { Blog } from "../entity/Blog";
import * as express from 'express'
import { Request, Response, NextFunction } from "express"

const BlogRepo= AppDataSource.getRepository(Blog);


export const getData=async(req:Request, res:Response, next:NextFunction)=>{
    try {
        await BlogRepo.find().then(result=>{
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

export const postData=async(req:Request, res:Response, next:NextFunction)=>{
    try {
        req.body.image=req.file.filename
        await BlogRepo.save(req.body).then(result=>{
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