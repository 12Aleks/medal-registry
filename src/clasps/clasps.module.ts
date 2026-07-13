import { Module } from '@nestjs/common';
import { ClaspsService } from './clasps.service';

@Module({
  providers: [ClaspsService]
})
export class ClaspsModule {}
