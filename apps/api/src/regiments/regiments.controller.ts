import { Body, Controller, Get, Post } from '@nestjs/common';
import { RegimentsService } from './regiments.service';
import { CreateRegimentDto } from './dto/create-regiment.dto';

@Controller('regiments')
export class RegimentsController {
  constructor(private readonly regimentService: RegimentsService) {}

  @Post()
  create(@Body() dto: CreateRegimentDto) {
    return this.regimentService.create(dto);
  }

  @Get('all')
  getAll() {
    return this.regimentService.getAll();
  }
}
