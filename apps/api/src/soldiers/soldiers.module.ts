import { Module } from '@nestjs/common';
import { Soldier } from './soldiers.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forFeature([Soldier])],
})
export class SoldiersModule {}
