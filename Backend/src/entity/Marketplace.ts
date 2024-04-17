import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()

export class Marketplace{

    @PrimaryGeneratedColumn()
    id:number;

    @Column({nullable:true})
    image:string

    @Column()
    title:string

    @Column({nullable:true})
    price:string

    @Column()
    description:string
}