import {
  Body,
  Controller,
  Get,
  Param,
  ParseUUIDPipe,
  Post,
} from '@nestjs/common';
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

  @Get(':slug')
  getOneRegiment(@Param('slug') slug: string) {
    return this.regimentService.findOne(slug);
  }
}
