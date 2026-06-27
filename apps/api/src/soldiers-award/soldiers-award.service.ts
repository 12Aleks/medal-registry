import { Injectable, NotFoundException } from '@nestjs/common';
import { SoldierAward } from './soldiers-award.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateSoldierAwardDto } from './dto/create-soldier-award.dto';
import { Medal } from '../medals/medals.entity';
import { Soldier } from '../soldiers/soldiers.entity';

@Injectable()
export class SoldiersAwardService {
  constructor(
    @InjectRepository(SoldierAward)
    private readonly awardRepository: Repository<SoldierAward>,
    @InjectRepository(Medal) private readonly medalsRepo: Repository<Medal>,
    @InjectRepository(Soldier)
    private readonly soldiersRepo: Repository<Soldier>,
  ) {}

  async create(dto: CreateSoldierAwardDto): Promise<SoldierAward> {
    const soldier = await this.soldiersRepo.findOneBy({ id: dto.soldierId });
    if (!soldier)
      throw new NotFoundException(`Soldier with id ${dto.soldierId} not found`);

    const medal = await this.medalsRepo.findOneBy({ id: dto.medalId });
    if (!medal)
      throw new NotFoundException(`Medal with id ${dto.medalId} not found`);

    const newAward = this.awardRepository.create({
      soldier,
      medal,
      yearAwarded: dto.yearAwarded,
      conflict: dto.conflictId ? { id: dto.conflictId } : undefined,
    });

    return await this.awardRepository.save(newAward);
  }

  async findAll(): Promise<SoldierAward[]> {
    return await this.awardRepository.find();
  }

  async findBySoldier(soldierId: string): Promise<SoldierAward[]> {
    return await this.awardRepository.find({
      where: { soldier: { slug: soldierId } },
    });
  }
}
