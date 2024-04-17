import { Column, Entity } from "typeorm";

@Entity()

export class Marketplace{

    @Column()
    image:string

    @Column()
    title:string

    @Column()
    price:string

    @Column()
    description:string
}