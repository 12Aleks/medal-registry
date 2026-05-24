import { Module } from '@nestjs/common';
import { ServiceRecord } from './service-record.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServiceRecordsController } from './service-records.controller';
import { ServiceRecordsService } from './service-records.service';

@Module({
    imports: [TypeOrmModule.forFeature([ServiceRecord])],
    controllers: [ServiceRecordsController],
    providers: [ServiceRecordsService],
})
export class ServiceRecordsModule {}
