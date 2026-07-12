import { Body, Controller, Post } from '@nestjs/common';
import { ClaspsService } from './clasps.service';
import { CreateClaspDto } from './dto/create-clasp.dto';

@Controller('clasps')
export class ClaspsController {
  constructor(private readonly claspsService: ClaspsService) {}

  @Post()
  createOne(@Body() dto: CreateClaspDto) {
    return this.claspsService.create(dto);
  }
}
