import {
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Soldier } from '../soldiers/soldiers.entity';
import { Regiment } from '../regiments/regiments.entity';
import { MilitaryConflict } from '../conflicts/conflicts.entity';

@Entity()
export class ServiceRecord {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Soldier, soldier => soldier.serviceRecords, { eager: true })
  soldier: Soldier;

  @ManyToOne(() => Regiment, regiment => regiment.serviceRecords, { eager: true })
  regiment: Regiment;

  @ManyToOne(() => MilitaryConflict, conflict => conflict.serviceRecords, {
    eager: true,
    nullable: true,
  })
  conflict: MilitaryConflict;

  @Column({ nullable: true })
  startYear: number;

  @Column({ nullable: true })
  endYear: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
