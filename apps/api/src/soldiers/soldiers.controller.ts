import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateSolderDto } from './dto/create-solder.dto';
import { SoldiersService } from './soldiers.service';

@Controller('soldiers')
export class SoldiersController {
  constructor(private soldiersRepository: SoldiersService) {}

  @Post()
  create(@Body() dto: CreateSolderDto) {
    return this.soldiersRepository.create(dto);
  }

  @Get('all')
  getAll() {
    return this.soldiersRepository.getAll();
  }

  @Get(':slug')
  findOneSoldier(@Param('slug') slug: string) {
    return this.soldiersRepository.findOneSoldier(slug);
  }

  @Get('dashboard/status')
  async getDashboardStats() {
    return this.soldiersRepository.getDashboardStats();
  }
}
