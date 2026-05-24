import { Module } from '@nestjs/common';
import { Regiment } from './regiments.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RegimentsController } from './regiments.controller';
import { RegimentsService } from './regiments.service';

@Module({
    imports: [TypeOrmModule.forFeature([Regiment])],
    controllers: [RegimentsController],
    providers: [RegimentsService]
})
export class RegimentsModule {}
