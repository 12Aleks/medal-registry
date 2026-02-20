import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ServiceRecord } from 'src/service-records/service-record.entity';
import { SoldierAward } from 'src/soldiers-award/solders-award.entity';

@Entity()
export class MilitaryConflict {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({ nullable: true })
  startYear?: number;


  @Column({ nullable: true })
  endYear?: number;

  @OneToMany(() => SoldierAward, sa => sa.conflict)
  soldierAwards: SoldierAward[];

  @OneToMany(() => ServiceRecord, sr => sr.conflict)
  serviceRecords: ServiceRecord[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
