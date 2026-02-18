import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ServiceRecord } from '../service-records/service-record.entity';

@Entity()
export class Regiment {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({ nullable: true })
  country: string;

  @Column({ nullable: true })
  description: string;

  @OneToMany(() => ServiceRecord, sr => sr.regiment)
  serviceRecords: ServiceRecord[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
