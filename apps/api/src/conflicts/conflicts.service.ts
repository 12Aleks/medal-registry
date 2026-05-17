import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MilitaryConflict } from './conflicts.entity';
import { Repository } from 'typeorm';
import { MilitaryConflictDto } from './dto/create-conflict.dto';

@Injectable()
export class ConflictsService {
  constructor(
    @InjectRepository(MilitaryConflict)
    private conflictRepo: Repository<MilitaryConflict>,
  ) {}

  async ensureExists(slug: string) {
    const medal = await this.conflictRepo.findOne({ where: { slug } });
    if (!medal) throw new NotFoundException(`Conflict ${slug} not found`);
    return medal;
  }

  async create(data: MilitaryConflictDto): Promise<MilitaryConflict> {
    const conflict = this.conflictRepo.create({
      name: data.name,
      description: data.description,
      startYear: data.startYear,
      endYear: data.endYear,
      slug: data.slug,
    });
    return await this.conflictRepo.save(conflict);
  }

  async findAll(): Promise<MilitaryConflict[]> {
    return await this.conflictRepo.find();
  }

  async findOne(slug: string): Promise<MilitaryConflict> {
    return await this.ensureExists(slug);
  }

  async delete(slug: string) {
    await this.ensureExists(slug);
    await this.conflictRepo.delete({ slug });
    return {
      statusCode: 200,
      message: `Medal ${slug} deleted successfully.`,
    };
  }
}
