import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import { Blog } from "./entity/Blog"
import { Marketplace } from "./entity/Marketplace"
import { Data } from "./entity/Data"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "9843798452",
    database: "Hackathon",
    synchronize: true,
    logging: false,
    entities: [User,Blog,Marketplace,Data],
    migrations: [],
    subscribers: [],
})
