import { Module } from '@nestjs/common';
import { ClaspsService } from './clasps.service';
import { ClaspsController } from './clasps.controller';

@Module({
  providers: [ClaspsService],
  controllers: [ClaspsController],
})
export class ClaspsModule {}
