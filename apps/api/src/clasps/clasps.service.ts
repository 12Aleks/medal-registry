import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Clasp } from './clasps.entity';
import { CreateClaspDto } from './dto/create-clasp.dto';
import { Medal } from '../medals/medals.entity';

@Injectable()
export class ClaspsService {
  constructor(
    @InjectRepository(Medal)
    private readonly medalRepository: Repository<Medal>,
    @InjectRepository(Clasp)
    private readonly claspRepository: Repository<Clasp>,
  ) {}

  async create(createClaspDto: CreateClaspDto) {
    const { medalId, ...data } = createClaspDto;

    const medal = await this.medalRepository.findOneBy({
      id: medalId,
    });

    if (!medal) {
      throw new NotFoundException('Medal not found');
    }

    const clasp = this.claspRepository.create({
      ...data,
      medal,
    });

    return this.claspRepository.save(clasp);
  }
}
