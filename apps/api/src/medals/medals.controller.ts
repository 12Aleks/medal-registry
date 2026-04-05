import { Controller, Post, Body, Param, Get, Delete } from '@nestjs/common';
import { MedalsService } from './medals.service';
import { CreateMedalDto } from './dto/create-medal.dto';

@Controller('medals')
export class MedalsController {
  constructor(private readonly medalsService: MedalsService) {}

  @Post()
  create(@Body() dto: CreateMedalDto) {
    return this.medalsService.create(dto);
  }

  @Get('all')
  findAllMedals() {
    return this.medalsService.findAll();
  }

  @Get(':slug')
  findOneMedal(@Param('slug') slug: string) {
    return this.medalsService.findOne(slug);
  }

  @Delete(':slug')
  deleteMedal(@Param('slug') slug: string) {
    console.log(slug);
    return this.medalsService.deleteOne(slug);
  }
}
