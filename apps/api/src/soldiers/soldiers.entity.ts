import { Column, Entity, OneToMany, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn  } from 'typeorm';
import { Medal } from '../medals/medals.entity';
import { Regiment } from '../regiments/regiments.entity';


@Entity()
export class Soldier {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  name: string;

  @Column()
  surname: string;

  @Column()
  rank: string;

  @Column()
  serviceNumber: string;

  @OneToMany(() => Regiment, regiment => regiment.soldier)
  regiment: Regiment[];

  @OneToMany(() => Medal, medal => medal.soldier)
  medals: Medal[];

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date
}