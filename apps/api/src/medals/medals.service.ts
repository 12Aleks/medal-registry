import {ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Medal } from './medals.entity';
import { CreateMedalDto } from './dto/create-medal.dto';

@Injectable()
export class MedalsService {
  constructor(@InjectRepository(Medal) private medalsRepo: Repository<Medal>) {}

  async checkMedal(slug: string) {
    const existingMedal = await this.medalsRepo.findOne({ where: { slug } });
    if (existingMedal) {
      throw new ConflictException('Medal with this name already exists');
    }
  }

  async create(dto: CreateMedalDto) {
    await this.checkMedal(dto.slug);
    const medal = this.medalsRepo.create({
      name: dto?.name,
      description: dto?.description,
      medalType: dto?.medalType,
      slug: dto?.slug,
      establishedYear: dto?.establishedYear,
      discontinuedYear: dto?.discontinuedYear,
    });

    return this.medalsRepo.save(medal);
  }

  async findAll() {
    return this.medalsRepo.find();
  }

  async findOne(slug: string) {
    const medal = await this.medalsRepo.findOne({ where: { slug } });
    if (!medal) throw new NotFoundException('Medal not found');
    return medal;
  }

  async deleteOne(slug: string) {
    const medal = await this.medalsRepo.delete({ slug });
    if (medal.affected === 0) {
      throw new NotFoundException(`Medal ${slug} not found`);
    }
    return {
      statusCode: 200,
      message: `Medal ${slug} deleted successfully.`,
    };
  }
}
