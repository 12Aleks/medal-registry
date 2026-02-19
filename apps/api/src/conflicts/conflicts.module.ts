import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MilitaryConflict } from './conflicts.entity';

@Module({
    imports: [TypeOrmModule.forFeature([MilitaryConflict])],
})
export class ConflictsModule {}

