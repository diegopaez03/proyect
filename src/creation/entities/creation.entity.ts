import { CreationStatus } from "src/creation-status/entities/creation-status.entity";
import { Scientist } from "src/scientist/entities/scientist.entity";
import { Column, DeleteDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'Creation'})
export class Creation {

    @PrimaryGeneratedColumn()
    creationId: number;

    @Column({unique: true})
    creationName: string;

    @Column({length: 10})           //El largo del codigo clave sera de 10 digitos
    keyCode: string;

    @Column({name: 'creationDate', default: () => 'CURRENT_TIMESTAMP'})
    creationDate: Date;
    
    @DeleteDateColumn({name: 'endDate', nullable: true})
    endDate: Date

    @OneToOne(() => Scientist)
    @JoinColumn({name: 'scientistId'})
    scientist: Scientist

    @OneToOne(() => CreationStatus)
    @JoinColumn({name: 'creationStatusId'})
    creationStatus: CreationStatus
}
