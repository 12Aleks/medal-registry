import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  ParseUUIDPipe,
} from '@nestjs/common';
import { CreateSoldierAwardDto } from './dto/create-soldier-award.dto';
import { SoldiersAwardService } from './soldiers-award.service';

@Controller('soldiers-award')
export class SoldiersAwardController {
  constructor(private readonly awardService: SoldiersAwardService) {}

  @Post()
  async create(@Body() dto: CreateSoldierAwardDto) {
    return await this.awardService.create(dto);
  }

  @Get()
  async findAll() {
    return await this.awardService.findAll();
  }

  @Get('soldier/:id')
  async findBySoldier(@Param('id', ParseUUIDPipe) id: string) {
    return await this.awardService.findBySoldier(id);
  }
}
