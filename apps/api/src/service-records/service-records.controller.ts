import { Controller } from '@nestjs/common';
import { ServiceRecordsService } from './service-records.service';

@Controller('service-records')
export class ServiceRecordsController {
  constructor(private serviceRecordRepository: ServiceRecordsService) {}
}
