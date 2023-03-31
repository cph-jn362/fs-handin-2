import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from "typeorm";
import { UserEntity } from "./user.entity";
import { Role } from "src/users/role";

@Entity()
export class BoardMember{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    phone: string;

    @OneToOne(() => UserEntity)
    @JoinColumn()
    user: UserEntity;
    
    

}

