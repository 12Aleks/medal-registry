import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ServiceRecord } from './service-record.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ServiceRecordsService {
  constructor(
    @InjectRepository(ServiceRecord)
    private serviceRecordRepository: Repository<ServiceRecord>,
  ) {}
}
