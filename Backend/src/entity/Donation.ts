
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()

export class Donation{

    @PrimaryGeneratedColumn()
    id:string

    @Column()
    name:string

    @Column({nullable:true})
    address:string

    @Column()
    email:string

    @Column()
    phone:string

    @Column()
    foodname:string

    @Column()
    quantity:string

    @Column({nullable:true})
    photo:string
}