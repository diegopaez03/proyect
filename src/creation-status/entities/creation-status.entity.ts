import { Column, DeleteDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'CreationStatus'})
export class CreationStatus {

    @PrimaryGeneratedColumn()
    creationStatusId: number

    @Column({unique: true})
    creationStatusName: string;

    @DeleteDateColumn({name: 'endDate', nullable: true})
    endDate: Date
}
