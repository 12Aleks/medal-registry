import { Injectable } from '@nestjs/common';
import { SoldierAward } from './soldiers-award.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateSoldierAwardDto } from './dto/create-soldier-award.dto';

@Injectable()
export class SoldiersAwardService {
  constructor(
    @InjectRepository(SoldierAward)
    private readonly awardRepository: Repository<SoldierAward>,
  ) {}

  async create(dto: CreateSoldierAwardDto): Promise<SoldierAward> {
    const newAward = this.awardRepository.create({
      yearAwarded: dto.yearAwarded,
      soldier: { id: dto.soldierId },
      medal: { id: dto.medalId },
      conflict: dto.conflictId ? { id: dto.conflictId } : undefined,
    });

    return await this.awardRepository.save(newAward);
  }

  async findAll(): Promise<SoldierAward[]> {
    return await this.awardRepository.find();
  }

  async findBySoldier(soldierId: string): Promise<SoldierAward[]> {
    return await this.awardRepository.find({
      where: { soldier: { id: soldierId } },
    });
  }
}
