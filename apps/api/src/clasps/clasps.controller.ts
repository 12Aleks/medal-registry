import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import { ClaspsService } from './clasps.service';
import { CreateClaspDto } from './dto/create-clasp.dto';

@Controller('clasps')
export class ClaspsController {
  constructor(private readonly claspsService: ClaspsService) {}

  @Post()
  createOne(@Body() dto: CreateClaspDto) {
    return this.claspsService.create(dto);
  }

  @Get()
  findAll(@Query('medalId') medalId?: string) {
    if (medalId) {
      return this.claspsService.findByMedal(medalId);
    }
    return this.claspsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.claspsService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.claspsService.remove(id);
  }
}
