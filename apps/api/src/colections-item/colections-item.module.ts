import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CollectionItem } from './colections-item.entity';

@Module({
    imports: [TypeOrmModule.forFeature([CollectionItem])],
})
export class ColectionItemModule {}
