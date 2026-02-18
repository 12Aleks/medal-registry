import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Soldier } from '../soldiers/soldiers.entity';
import { MilitaryConflict } from '../conflicts/conflicts.entity'


@Entity()

export class Medal {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  medalType: string

  @Column({ nullable: true })
  inscriptionText?: string

  @Column({ nullable: true })
  serialNumber?: string

  @Column({ nullable: true })
  yearAwarded?: number

  @Column({ nullable: true })
  condition?: string

  @ManyToOne(() => Soldier, soldier => soldier.medals, { eager: true })
  soldier: Soldier

  @ManyToOne(() => MilitaryConflict, conflict => conflict.medals, {
    eager: true,
    nullable: true,
  })
  conflict?: MilitaryConflict

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date
}