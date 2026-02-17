import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Soldier } from '../soldiers/soldiers.entity';



@Entity()

export class Medal {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  medalType: string;

  @Column({ nullable: true })
  inscriptionText: string;

  @Column({ nullable: true })
  conflict: string;

  @ManyToOne(() => Soldier, soldier => soldier.medals, { eager: true })
  soldier: Soldier;


  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date
}