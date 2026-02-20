import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Medal } from './medals.entity'
import { MilitaryConflict } from '../conflicts/conflicts.entity'
import { CreateMedalDto } from './dto/create-medal.dto'

@Injectable()
export class MedalsService {
    constructor(
        @InjectRepository(Medal)
        private medalsRepo: Repository<Medal>
    ) { }

    async create(dto: CreateMedalDto) {
 
    const medal = this.medalsRepo.create({
      name: dto?.name,
      description: dto?.description,
      medalType: dto?.medalType,
      establishedYear: dto?.establishedYear,
      discontinuedYear: dto?.discontinuedYear,
    });

    return this.medalsRepo.save(medal);
  }

  async findAll() {
    return this.medalsRepo.find();
  }

  async findOne(id: string) {
    const medal = await this.medalsRepo.findOne({ where: { id } });
    if (!medal) throw new NotFoundException('Medal not found');
    return medal;
  }
}
