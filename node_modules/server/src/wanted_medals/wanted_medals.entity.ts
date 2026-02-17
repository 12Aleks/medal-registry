import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
} from 'typeorm';
import { Soldier } from '../soldiers/soldiers.entity';

@Entity()
export class WantedMedal {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Soldier, { eager: true })
  soldier: Soldier;

  @Column()
  medalType: string;

  @Column({ nullable: true })
  notes: string;

  @CreateDateColumn()
  createdAt: Date;
}
