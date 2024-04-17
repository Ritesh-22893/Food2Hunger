
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()

export class Data{

    @PrimaryGeneratedColumn()
    id:string

    @Column()
    organizationname:string

    @Column({nullable:true})
    address:string

    @Column()
    phone:string

    @Column()
    email:string

    @Column()
    password:string

    @Column({nullable:true})
    document:string

    @Column({default:'admin'})
    role:string
}