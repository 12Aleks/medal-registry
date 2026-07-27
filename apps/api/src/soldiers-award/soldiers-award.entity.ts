import {
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  Column,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { CollectionItem } from '../colections-item/colections-item.entity';
import { MilitaryConflict } from '../conflicts/conflicts.entity';
import { Medal } from '../medals/medals.entity';
import { Soldier } from '../soldiers/soldiers.entity';

@Entity()
export class SoldierAward {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @ManyToOne(() => Soldier, (s) => s.awards)
  soldier!: Soldier;

  @ManyToOne(() => Medal, (m) => m.soldierAwards)
  medal!: Medal;

  @ManyToOne(() => MilitaryConflict, { nullable: true })
  conflict?: MilitaryConflict;

  @Column({ nullable: true })
  yearAwarded?: number;

  @OneToMany(() => CollectionItem, (item) => item.soldierAward)
  collectionItems!: CollectionItem[];

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;
}
