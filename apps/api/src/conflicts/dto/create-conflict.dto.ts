import { ConflictType } from '@medal-registry/types';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class MilitaryConflictDto implements ConflictType {
  @IsString()
  @IsNotEmpty()
  name!: string;

  @IsString()
  @IsNotEmpty()
  description!: string;

  @IsNumber()
  @IsOptional()
  startYear?: number;

  @IsNumber()
  @IsOptional()
  endYear?: number;

  @IsString()
  @IsNotEmpty()
  slug!: string;
}
