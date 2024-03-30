import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn,  } from "typeorm";

@Entity()
export class User {
  
    @PrimaryGeneratedColumn()
    id: number

    @Column("text")
    name: string

    @Column("text")
    surname: string

    @Column("text")
    email: string

    @Column("text")
    password: string

    @Column({name: "IS_ACTIVE", nullable: false, default: true})
    isActive: Boolean

    @Column()
    @CreateDateColumn()
    created_at: Date

    @Column()
    @UpdateDateColumn()
    updated_at: Date
}