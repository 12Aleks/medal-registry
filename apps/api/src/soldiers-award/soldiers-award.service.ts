import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { SoldierAward } from './soldiers-award.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, In } from 'typeorm';
import { CreateSoldierAwardDto } from './dto/create-soldier-award.dto';
import { Medal } from '../medals/medals.entity';
import { Soldier } from '../soldiers/soldiers.entity';
import { Clasp } from '../clasps/clasps.entity';

@Injectable()
export class SoldiersAwardService {
  constructor(
    @InjectRepository(SoldierAward)
    private readonly awardRepository: Repository<SoldierAward>,
    @InjectRepository(Medal) private readonly medalsRepo: Repository<Medal>,
    @InjectRepository(Soldier)
    private readonly soldiersRepo: Repository<Soldier>,
    @InjectRepository(Clasp)
    private readonly claspsRepo: Repository<Clasp>,
  ) {}

  async create(dto: CreateSoldierAwardDto): Promise<SoldierAward> {
    const soldier = await this.soldiersRepo.findOneBy({ id: dto.soldierId });
    if (!soldier)
      throw new NotFoundException(`Soldier with id ${dto.soldierId} not found`);

    const medal = await this.medalsRepo.findOneBy({ id: dto.medalId });
    if (!medal)
      throw new NotFoundException(`Medal with id ${dto.medalId} not found`);

    let clasps: Clasp[] = [];

    if (dto.claspIds && dto.claspIds.length > 0) {
      clasps = await this.claspsRepo.find({
        where: { id: In(dto.claspIds) },
        relations: {
          medal: true,
        },
      });

      if (clasps.length !== dto.claspIds.length) {
        throw new NotFoundException('One or more clasps were not found');
      }

      const invalidClasp = clasps.find((c) => c.medal.id !== medal.id);
      if (invalidClasp) {
        throw new BadRequestException(
          `Clasp '${invalidClasp.name}' does not belong to the selected medal`,
        );
      }
    }

    const newAward = this.awardRepository.create({
      soldier,
      medal,
      clasps,
      yearAwarded: dto.yearAwarded,
      conflict: dto.conflictId ? { id: dto.conflictId } : undefined,
    });

    return await this.awardRepository.save(newAward);
  }

  async findAll(): Promise<SoldierAward[]> {
    return await this.awardRepository.find({
      relations: {
        soldier: true,
        medal: true,
        clasps: true,
        conflict: true,
      },
    });
  }

  async findBySoldier(soldierSlug: string): Promise<SoldierAward[]> {
    return await this.awardRepository.find({
      where: { soldier: { slug: soldierSlug } },
      relations: {
        medal: true,
        clasps: true,
        conflict: true,
      },
    });
  }
}
