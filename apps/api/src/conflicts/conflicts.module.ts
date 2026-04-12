import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MilitaryConflict } from './conflicts.entity';
import { ConflictsController } from './conflicts.controller';
import { ConflictsService } from './conflicts.service';

@Module({
  imports: [TypeOrmModule.forFeature([MilitaryConflict])],
  controllers: [ConflictsController],
  providers: [ConflictsService],
})
export class ConflictsModule {}
