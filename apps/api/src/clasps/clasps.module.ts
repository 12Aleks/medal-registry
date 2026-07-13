import { Module } from '@nestjs/common';
import { ClaspsService } from './clasps.service';
import { ClaspsController } from './clasps.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Medal } from '../medals/medals.entity';
import { Clasp } from './clasps.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Clasp, Medal])],
  providers: [ClaspsService],
  controllers: [ClaspsController],
})
export class ClaspsModule {}
