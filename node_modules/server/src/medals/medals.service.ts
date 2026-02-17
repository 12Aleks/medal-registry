import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Medal } from './medals.entity'
import { Soldier } from '../soldiers/soldiers.entity'
import { MilitaryConflict } from '../conflicts/conflicts.entity'
import { CreateMedalDto } from './dto/create-medal.dto'

@Injectable()
export class MedalsService {
    constructor(
        @InjectRepository(Medal)
        private medalsRepo: Repository<Medal>,

        @InjectRepository(Soldier)
        private soldiersRepo: Repository<Soldier>,

        @InjectRepository(MilitaryConflict)
        private conflictsRepo: Repository<MilitaryConflict>,
    ) { }

    async create(dto: CreateMedalDto) {
        const soldier = await this.soldiersRepo.findOne({
            where: { id: dto.soldierId },
        })

        if (!soldier) {
            throw new NotFoundException('Soldier not found')
        }

        let conflict: MilitaryConflict | null = null

        if (dto.conflictId) {
            conflict = await this.conflictsRepo.findOne({
                where: { id: dto.conflictId },
            })

            if (!conflict) {
                throw new NotFoundException('Conflict not found')
            }
        }

        const medal = this.medalsRepo.create({
            medalType: dto.medalType,
            inscriptionText: dto.inscriptionText,
            serialNumber: dto.serialNumber,
            yearAwarded: dto.yearAwarded,
            condition: dto.condition,
            soldier,
            conflict: conflict ?? undefined,
        })

        return this.medalsRepo.save(medal)
    }
}
