import { Column, Entity } from "typeorm";

@Entity()

export class Blog{

    @Column()
    image:string

    @Column()
    title:string

    @Column()
    description:string
}