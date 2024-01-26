import {Entity, Column, PrimaryGeneratedColumn, DeleteDateColumn } from 'typeorm'

@Entity({name: 'Scientists'})
export class Scientist {

    @PrimaryGeneratedColumn({name:'scientistId'})
    scientistId: number;
    
    @Column({unique: true, name: 'username'})
    username: string;
    
    @Column({name: 'password'})
    password: string;
    
    @Column({name: 'creationDate', default: () => 'CURRENT_TIMESTAMP'})
    creationDate: Date;
    
    @DeleteDateColumn({name: 'endDate', nullable: true})
    endDate: Date
    

}