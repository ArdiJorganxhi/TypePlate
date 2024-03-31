import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn,  } from "typeorm";

@Entity()
export class User {
  
    @PrimaryGeneratedColumn()
    id: number

    @Column({name: "NAME", nullable: false})
    name: string

    @Column({name: "SURNAME", nullable: false})
    surname: string

    @Column({name: "EMAIL", nullable: false})
    email: string

    @Column({name: "PASSWORD", nullable: false})
    password: string

    @Column({name: "IS_ACTIVE", nullable: false, default: true})
    isActive: Boolean

    @Column({name: "CREATED_AT", nullable: false})
    @CreateDateColumn()
    created_at: Date

    @Column({name: "UPDATED_AT", nullable: false})
    @UpdateDateColumn()
    updated_at: Date
}