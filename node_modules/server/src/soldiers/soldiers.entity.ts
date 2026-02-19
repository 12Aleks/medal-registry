import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ServiceRecord } from '../service-records/service-record.entity';
import { SoldierAward } from 'src/soldiers-award/solders-award.entity';

@Entity()
export class Soldier {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  surname: string;

  @Column({ nullable: true })
  rank: string;

  @Column({ nullable: true })
  serviceNumber: string;

  @OneToMany(() => SoldierAward, sa => sa.soldier)
  awards: SoldierAward[];


  @OneToMany(() => ServiceRecord, sr => sr.soldier)
  serviceRecords: ServiceRecord[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
