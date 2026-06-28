import { Injectable, NotFoundException, Param } from '@nestjs/common';
import { Soldier } from './soldiers.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateSolderDto } from './dto/create-solder.dto';

@Injectable()
export class SoldiersService {
  constructor(
    @InjectRepository(Soldier) private soldiersRepository: Repository<Soldier>,
  ) {}

  async create(dto: CreateSolderDto): Promise<Soldier> {
    const solder = this.soldiersRepository.create({
      ...dto,
      slug: dto.slug,
    });

    return this.soldiersRepository.save(solder);
  }

  async getAll(): Promise<Soldier[]> {
    return this.soldiersRepository.find();
  }

  async findOneSoldier(@Param('slug') slug: string): Promise<Soldier> {
    const soldier = await this.soldiersRepository.findOne({ where: { slug } });
    if (!soldier) throw new NotFoundException(`Soldier ${slug} is not found`);
    return soldier;
  }
}
