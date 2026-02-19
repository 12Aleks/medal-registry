import { Module } from '@nestjs/common';
import { Regiment } from './regiments.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forFeature([Regiment])]
})
export class RegimentsModule {}
