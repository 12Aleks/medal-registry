import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ServiceRecord } from './service-record.entity';
import { CreateServiceRecordDto } from './dto/create-service-record.dto';
import { Soldier } from '../soldiers/soldiers.entity';
import { Regiment } from '../regiments/regiments.entity';

@Injectable()
export class ServiceRecordsService {
  constructor(
    @InjectRepository(ServiceRecord)
    private readonly serviceRecordRepository: Repository<ServiceRecord>,

    @InjectRepository(Soldier)
    private readonly soldiersRepo: Repository<Soldier>,

    @InjectRepository(Regiment)
    private readonly regimentsRepo: Repository<Regiment>,
  ) {}

  async create(dto: CreateServiceRecordDto): Promise<ServiceRecord> {
    const soldier = await this.soldiersRepo.findOneBy({ id: dto.soldierId });
    if (!soldier) {
      throw new NotFoundException(`Soldier with id ${dto.soldierId} not found`);
    }

    const regiment = await this.regimentsRepo.findOneBy({ id: dto.regimentId });
    if (!regiment) {
      throw new NotFoundException(
        `Regiment with id ${dto.regimentId} not found`,
      );
    }

    const newRecord = this.serviceRecordRepository.create({
      soldier,
      regiment,
      startYear: dto.startYear,
      endYear: dto.endYear,
      conflict: dto.conflictId ? { id: dto.conflictId } : undefined,
    });

    return await this.serviceRecordRepository.save(newRecord);
  }

  async findAll(): Promise<ServiceRecord[]> {
    return await this.serviceRecordRepository.find();
  }

  async findOne(id: string): Promise<ServiceRecord> {
    const record = await this.serviceRecordRepository.findOneBy({ id });
    if (!record) {
      throw new NotFoundException(`Service record with id ${id} not found`);
    }
    return record;
  }

  async remove(id: string): Promise<{ message: string }> {
    const record = await this.findOne(id); // Проверяем, существует ли она
    await this.serviceRecordRepository.remove(record);
    return { message: `Service record with id ${id} successfully deleted` };
  }
}
