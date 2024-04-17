
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()

export class Data{

    @PrimaryGeneratedColumn()
    id:string

    @Column()
    organizationname:string

    @Column()
    address:string

    @Column()
    phone:string

    @Column()
    email:string

    @Column()
    password:string

    @Column()
    file:string
}