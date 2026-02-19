import { Module } from '@nestjs/common';
import { WantedMedal } from './wanted_medals.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forFeature([WantedMedal])]
})
export class WantedMedalsModule {}
