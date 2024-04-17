import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()

export class Blog{

    @PrimaryGeneratedColumn()
    id:number;

    @Column({nullable:true})
    image:string

    @Column()
    title:string

    @Column()
    description:string

}