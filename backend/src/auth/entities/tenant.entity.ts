import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from "typeorm";
import { UserEntity } from "./user.entity";
import { Role } from "src/users/role";

@Entity()
export class Tenant{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    email: string;

    @OneToOne(() => UserEntity)
    @JoinColumn()
    user: UserEntity

}

