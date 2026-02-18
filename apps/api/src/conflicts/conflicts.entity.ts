import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
} from 'typeorm';
import { Medal } from '../medals/medals.entity';
import { ServiceRecord } from '../service-records/service-record.entity';

@Entity()
export class MilitaryConflict {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({ nullable: true })
  startYear: number;

  @Column({ nullable: true })
  endYear: number;

  @OneToMany(() => Medal, medal => medal.conflict)
  medals: Medal[];

  @OneToMany(() => ServiceRecord, sr => sr.conflict)
  serviceRecords: ServiceRecord[];
}
