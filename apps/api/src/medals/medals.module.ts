import { Module } from '@nestjs/common';
import { Medal } from './medals.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MedalsService } from './medals.service';
import { MedalsController } from './medals.controller';
import { SoldierAward } from '../soldiers-award/soldiers-award.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Medal, SoldierAward])],
  providers: [MedalsService],
  controllers: [MedalsController],
  exports: [MedalsService],
})
export class MedalsModule {}
