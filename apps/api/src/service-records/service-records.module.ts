import { Module } from '@nestjs/common';
import { ServiceRecord } from './service-record.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServiceRecordsController } from './service-records.controller';
import { ServiceRecordsService } from './service-records.service';
import { Soldier } from '../soldiers/soldiers.entity';
import { MilitaryConflict } from '../conflicts/conflicts.entity';
import { Regiment } from '../regiments/regiments.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      ServiceRecord,
      Soldier,
      MilitaryConflict,
      Regiment,
    ]),
  ],
  controllers: [ServiceRecordsController],
  providers: [ServiceRecordsService],
})
export class ServiceRecordsModule {}
