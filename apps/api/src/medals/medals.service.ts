import {ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Medal } from './medals.entity';
import { CreateMedalDto } from './dto/create-medal.dto';

@Injectable()
export class MedalsService {
  constructor(@InjectRepository(Medal) private medalsRepo: Repository<Medal>) {}

  async ensureExists(slug: string) {
    const medal = await this.medalsRepo.findOne({ where: { slug } });
    if (!medal) throw new NotFoundException(`Medal ${slug} not found`);
    return medal;
  }

  async ensureNotExists(slug: string) {
    const medal = await this.medalsRepo.findOne({ where: { slug } });
    if (medal) throw new ConflictException(`Medal already exists`);
  }

  async create(dto: CreateMedalDto) {
    await this.ensureNotExists(dto.slug);
    const medal = this.medalsRepo.create({
      name: dto?.name,
      description: dto?.description,
      medalType: dto?.medalType,
      slug: dto?.slug,
      images: dto.images || [],
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
    if (!medal) throw new NotFoundException(`Medal ${slug} not found`);
    return medal;
  }

  async deleteOne(slug: string) {
    await this.ensureExists(slug);
    await this.medalsRepo.delete({ slug });
    return {
      statusCode: 200,
      message: `Medal ${slug} deleted successfully.`,
    };
  }
}
