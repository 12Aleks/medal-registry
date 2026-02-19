import { Module } from '@nestjs/common';
import { SoldierAward } from './solders-award.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forFeature([SoldierAward])],
})
export class SoldierAwardModule {}
