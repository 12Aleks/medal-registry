import { Injectable, NotFoundException, Param } from '@nestjs/common';
import { Soldier } from './soldiers.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateSolderDto } from './dto/create-solder.dto';
import { SoldierAward } from '../soldiers-award/soldiers-award.entity';
import { MilitaryConflict } from '../conflicts/conflicts.entity';
import { ServiceRecord } from '../service-records/service-record.entity';

@Injectable()
export class SoldiersService {
  constructor(
    @InjectRepository(Soldier) private soldiersRepository: Repository<Soldier>,
    @InjectRepository(SoldierAward)
    private awardsRepo: Repository<SoldierAward>,
    @InjectRepository(MilitaryConflict)
    private conflictsRepo: Repository<MilitaryConflict>,
    @InjectRepository(ServiceRecord)
    private serviceRecordsRepo: Repository<ServiceRecord>,
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
    const soldier = await this.soldiersRepository.findOne({
      where: { slug },
      relations: {
        awards: {
          medal: true,
        },
        serviceRecords: {
          conflict: true,
        },
      },
      select: {
        id: true,
        name: true,
        surname: true,
        rank: true,
        slug: true,
        awards: {
          id: true,
          medal: {
            id: true,
            name: true,
            medalType: true,
          },
        },
        serviceRecords: {
          id: true,
          conflict: {
            id: true,
            name: true,
            startYear: true,
            endYear: true,
          },
          regiment: {
            id: true,
            name: true,
          },
        },
      },
    });
    if (!soldier) throw new NotFoundException(`Soldier ${slug} is not found`);

    return soldier;
  }

  async getDashboardStats() {
    const [
      soldiersCount,
      medalsLinkedCount,
      conflictsCount,
      serviceRecordsCount,
    ] = await Promise.all([
      this.soldiersRepository.count(),
      this.awardsRepo.count(),
      this.conflictsRepo.count(),
      this.serviceRecordsRepo.count(),
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
        serviceRecordsCount,
      },
      recentSoldiers,
    };
  }
}
