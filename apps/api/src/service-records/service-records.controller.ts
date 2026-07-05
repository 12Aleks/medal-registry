import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  ParseUUIDPipe,
} from '@nestjs/common';
import { ServiceRecordsService } from './service-records.service';
import { CreateServiceRecordDto } from './dto/create-service-record.dto';
import { ServiceRecord } from './service-record.entity';

@Controller('service-records')
export class ServiceRecordsController {
  constructor(private readonly serviceRecordsService: ServiceRecordsService) {}

  @Post()
  async create(@Body() dto: CreateServiceRecordDto): Promise<ServiceRecord> {
    return await this.serviceRecordsService.create(dto);
  }

  @Get()
  async findAll(): Promise<ServiceRecord[]> {
    return await this.serviceRecordsService.findAll();
  }

  @Get(':slug')
  async findOne(
    @Param('slug', ParseUUIDPipe) slug: string,
  ): Promise<ServiceRecord> {
    return await this.serviceRecordsService.findOne(slug);
  }

  @Delete(':slug')
  async remove(@Param('slug', ParseUUIDPipe) slug: string) {
    return await this.serviceRecordsService.remove(slug);
  }
}
