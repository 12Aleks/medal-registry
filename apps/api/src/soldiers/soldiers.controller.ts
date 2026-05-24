import { Body, Controller, Get, Post } from '@nestjs/common';
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
}
