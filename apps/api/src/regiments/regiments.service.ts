import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Regiment } from './regiments.entity';
import { Repository } from 'typeorm';
import { CreateRegimentDto } from './dto/create-regiment.dto';

@Injectable()
export class RegimentsService {
  constructor(
    @InjectRepository(Regiment)
    private regimentRepository: Repository<Regiment>,
  ) {}

  async ensureNotExists(slug: string) {
    const regiment = await this.regimentRepository.findOne({ where: { slug } });
    if (regiment) throw new ConflictException(`This regiment already exists`);
  }

  async create(dto: CreateRegimentDto): Promise<Regiment> {
    await this.ensureNotExists(dto.slug);
    const regiment = this.regimentRepository.create({
      ...dto,
    });

    return this.regimentRepository.save(regiment);
  }

  async findOne(slug: string): Promise<Regiment> {
    const regiment = await this.regimentRepository.findOne({ where: { slug } });
    if (!regiment) throw new NotFoundException(`Regiment ${slug} not found`);
    return regiment;
  }

  async getAll(): Promise<Regiment[]> {
    return await this.regimentRepository.find();
  }
}
