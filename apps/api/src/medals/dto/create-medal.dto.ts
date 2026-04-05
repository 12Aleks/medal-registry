import { IsString, IsOptional, IsNumber } from 'class-validator';
import { MedalType } from '@medal-registry/types';

export class CreateMedalDto implements MedalType {
  @IsString()
  name!: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsString()
  medalType!: string;

  @IsString()
  slug!: string;

  @IsOptional()
  @IsNumber()
  establishedYear?: number;

  @IsOptional()
  @IsNumber()
  discontinuedYear?: number;
}
