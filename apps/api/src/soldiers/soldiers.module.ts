import { Module } from '@nestjs/common';
import { Soldier } from './soldiers.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SoldiersService } from './soldiers.service';
import { SoldiersController } from './soldiers.controller';
import { SoldierAward } from '../soldiers-award/soldiers-award.entity';
import { Medal } from '../medals/medals.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SoldierAward, Soldier, Medal])],
  providers: [SoldiersService],
  controllers: [SoldiersController],
  exports: [SoldiersService],
})
export class SoldiersModule {}
