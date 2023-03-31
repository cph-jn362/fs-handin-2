import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from "typeorm";
import { Tenant } from "./tenant.entity";
import { Role } from "src/users/role";

@Entity()
export class UserEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;
    
    @Column()
    password: string;

    @OneToOne(type => Tenant, tenant => tenant.user)
    tenant: Tenant | null 

    @Column({
        type: "enum",
        enum: Role,
        default: [Role.User],
    })
    role: Role;
}

