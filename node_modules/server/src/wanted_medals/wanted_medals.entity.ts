import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Soldier } from '../soldiers/soldiers.entity';
import { Medal } from 'src/medals/medals.entity';

@Entity()
export class WantedMedal {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Soldier, { eager: true })
  soldier: Soldier;

  @ManyToOne(() => Medal, { eager: true })
  medal: Medal;

  @Column({ nullable: true })
  notes?: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}