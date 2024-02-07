import { MaxLength, MinLength } from 'class-validator';
import { Scientist } from 'src/scientist/entities/scientist.entity';
import {
  Column,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'Creation' })
export class Creation {
  @PrimaryGeneratedColumn()
  creationId: number;

  @Column({ unique: true })
  creationName: string;

  @Column()
  creationDescription: string;

  @Column()
  @MinLength(10)
  @MaxLength(16) //El largo del codigo clave sera de 10 digitos
  keyCode: string;

  @Column()
  encrypted: boolean;

  @Column({ name: 'creationDate', default: () => 'CURRENT_TIMESTAMP' })
  creationDate: Date;

  @DeleteDateColumn({ name: 'endDate', nullable: true })
  endDate: Date;

  @ManyToOne(() => Scientist)
  @JoinColumn({ name: 'scientistId' })
  scientist: Scientist;
}
