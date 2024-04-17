import * as express from "express"
import * as bodyParser from "body-parser"
import { Request, Response, NextFunction } from "express"
import { AppDataSource } from "./data-source"
import { Routes } from "./routes"
import { User } from "./entity/User"
import * as morgan from "morgan"
import * as cors from "cors"


AppDataSource.initialize().then(async () => {

    // create express app
    const app = express()
    app.use(bodyParser.json())
    app.use(morgan("dev"))
    app.use(cors({origin:'*'}))
    app.use('/public',express.static('src/public'))
    app.get("/",(req:Request,res:Response,next:NextFunction)=>{
        res.json({message:"test"})
    })
    // register express routes from defined application routes

    // setup express app here
    // ...

    // start express server
    app.listen(3000)

    console.log("Express server has started on port 3000. Open http://localhost:3000/users to see results")

}).catch(error => console.log(error))
