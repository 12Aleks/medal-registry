import { SoldierAward } from "src/soldiers-award/solders-award.entity";
import { Entity, PrimaryGeneratedColumn, ManyToOne, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class CollectionItem {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => SoldierAward, sa => sa.collectionItems, { eager: true })
  soldierAward: SoldierAward;

  @Column({ nullable: true })
  inscriptionText?: string;

  @Column({ nullable: true })
  serialNumber?: string;

  @Column({ nullable: true })
  condition?: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
