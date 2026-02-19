import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';

import { SoldierAward } from '../soldiers-award/solders-award.entity';


@Entity()

export class Medal {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({ unique: true })
  name: string;

  @Column({ nullable: true })
  description?: string;

  @Column()
  medalType: string

  @Column({ nullable: true })
  establishedYear?: number;

  @Column({ nullable: true })
  discontinuedYear?: number;

  @OneToMany(() => SoldierAward, sa => sa.medal)
  soldierAwards: SoldierAward[];

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date
}