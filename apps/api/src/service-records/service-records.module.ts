import { Module } from '@nestjs/common';
import { ServiceRecord } from './service-record.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forFeature([ServiceRecord])],
})
export class ServiceRecordsModule {}
