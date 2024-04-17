
import { Column, Entity } from "typeorm";

@Entity()

export class Data{

    @Column()
    image:string

    @Column()
    title:string

    @Column()
    description:string
}