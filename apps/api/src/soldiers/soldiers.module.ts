import { Module } from '@nestjs/common';
import { Soldier } from './soldiers.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SoldiersService } from './soldiers.service';
import { SoldiersController } from './soldiers.controller';

@Module({
    imports: [TypeOrmModule.forFeature([Soldier])],
    providers: [SoldiersService],
    controllers: [SoldiersController],
})
export class SoldiersModule {}
