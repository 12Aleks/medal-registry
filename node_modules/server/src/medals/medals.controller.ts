import { Controller, Post, Body, Query, Param, Get } from '@nestjs/common'
import { MedalsService } from './medals.service'
import { CreateMedalDto } from './dto/create-medal.dto'

@Controller('medals')
export class MedalsController {
  constructor(private readonly medalsService: MedalsService) { }

  @Post()
  create(@Body() dto: CreateMedalDto) {
    return this.medalsService.create(dto)
  }


  @Get()
  findOneMedal(@Param('id') id: string) {
     return this.medalsService.findOne(id)
  }
}
