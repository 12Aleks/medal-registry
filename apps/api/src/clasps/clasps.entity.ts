import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Medal } from '../medals/medals.entity';

@Entity()
export class Clasp {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  name!: string;

  @Column({ nullable: true })
  year?: number;

  @Column({ nullable: true })
  description?: string;

  @ManyToOne(() => Medal, (medal) => medal.clasps)
  medal!: Medal;
}
