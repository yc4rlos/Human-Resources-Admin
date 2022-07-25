import { Task } from "src/tasks/entities/task.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Address } from "./address.entity";
import { Details } from "./details.entity";

@Entity()
export class Employee {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    birthDate: string;

    @Column()
    email: string;

    @Column()
    phone: string;

    @Column()
    position: string;

    @Column({ default: false })
    homeOffice: boolean;

    @OneToOne(() => Address, adress => adress.employee, { cascade: true })
    @JoinColumn()
    address: Address;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @DeleteDateColumn({ nullable: true })
    deleted_at: Date;

    @OneToMany(() => Details, details => details.employee, { cascade: true })
    details: Details[];

    @OneToMany(() => Task, task => task.employee)
    tasks: Task[]
}