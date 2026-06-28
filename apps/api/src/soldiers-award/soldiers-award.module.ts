import { Module } from '@nestjs/common';
import { SoldierAward } from './soldiers-award.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SoldiersAwardController } from './soldiers-award.controller';
import { SoldiersAwardService } from './soldiers-award.service';
import { Soldier } from '../soldiers/soldiers.entity';
import { Medal } from '../medals/medals.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SoldierAward, Soldier, Medal])],
  controllers: [SoldiersAwardController],
  providers: [SoldiersAwardService],
})
export class SoldierAwardModule {}
