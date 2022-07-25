import { Employee } from './employee.entity';
import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Details {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: true })
    skill?: string;

    @Column()
    knowledgeLevel: number;

    @Column()
    description: string;

    @Column({ nullable: true })
    neetToGetBetter?: string;

    @ManyToOne(() => Employee, employee => employee.details)
    @JoinColumn()
    employee: Employee;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @DeleteDateColumn()
    deleted_at: Date;
}