import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ConflictsService } from './conflicts.service';
import { MilitaryConflictDto } from './dto/create-conflict.dto';

@Controller('conflicts')
export class ConflictsController {
  constructor(private readonly conflictsService: ConflictsService) {}

  @Get('all')
  findAllConflicts() {
    return this.conflictsService.findAll();
  }

  @Post()
  createOne(@Body() dto: MilitaryConflictDto) {
    return this.conflictsService.create(dto);
  }

  @Delete(':slug')
  deleteOne(@Param('slug') slug: string) {
    return this.conflictsService.delete(slug);
  }
}
