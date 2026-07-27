import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Medal } from './medals.entity';
import { CreateMedalDto } from './dto/create-medal.dto';
import { SoldierAward } from '../soldiers-award/soldiers-award.entity';

@Injectable()
export class MedalsService {
  constructor(
    @InjectRepository(Medal) private medalsRepo: Repository<Medal>,
    @InjectRepository(SoldierAward)
    private soldierAwardsRepo: Repository<SoldierAward>,
  ) {}

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
    const medal = await this.medalsRepo.findOne({
      where: { slug },
    });

    if (!medal) {
      throw new NotFoundException(`Medal ${slug} not found`);
    }

    medal.soldierAwards = await this.soldierAwardsRepo.find({
      where: {
        medal: {
          id: medal.id,
        },
      },
      relations: {
        soldier: true,
      },
      order: {
        createdAt: 'DESC',
      },
      take: 3,
    });

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
