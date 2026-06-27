import { Module } from '@nestjs/common';
import { SoldierAward } from './soldiers-award.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SoldiersAwardController } from './soldiers-award.controller';
import { SoldiersAwardService } from './soldiers-award.service';

@Module({
  imports: [TypeOrmModule.forFeature([SoldierAward])],
  controllers: [SoldiersAwardController],
  providers: [SoldiersAwardService],
})
export class SoldierAwardModule {}
