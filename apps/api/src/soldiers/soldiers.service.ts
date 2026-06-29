import { Injectable, NotFoundException, Param } from '@nestjs/common';
import { Soldier } from './soldiers.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateSolderDto } from './dto/create-solder.dto';
import { SoldierAward } from '../soldiers-award/soldiers-award.entity';
import { MilitaryConflict } from '../conflicts/conflicts.entity';

@Injectable()
export class SoldiersService {
  constructor(
    @InjectRepository(Soldier) private soldiersRepository: Repository<Soldier>,
    @InjectRepository(SoldierAward)
    private awardsRepo: Repository<SoldierAward>,
    @InjectRepository(MilitaryConflict)
    private conflictsRepo: Repository<MilitaryConflict>,
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

  async getDashboardStats() {
    const [soldiersCount, medalsLinkedCount, conflictsCount] =
      await Promise.all([
        this.soldiersRepository.count(),
        this.awardsRepo.count(),
        this.conflictsRepo.count(),
      ]);

    const recentSoldiersRaw = await this.soldiersRepository.find({
      order: { createdAt: 'DESC' },
      take: 3,
      relations: ['awards', 'serviceRecords'],
    });

    const recentSoldiers = recentSoldiersRaw.map((soldier) => ({
      id: soldier.id,
      name: `${soldier.name} ${soldier.surname}`.trim(),
      rank: soldier.rank || 'Private',
      slug: soldier.slug,
      medalsCount: soldier.awards?.length || 0,
      conflictsCount:
        new Set(soldier.serviceRecords?.map((sr) => sr?.id)).size || 0,
      createdAt: soldier.createdAt,
    }));

    return {
      stats: {
        soldiersCount,
        medalsLinkedCount,
        conflictsCount,
      },
      recentSoldiers,
    };
  }
}
