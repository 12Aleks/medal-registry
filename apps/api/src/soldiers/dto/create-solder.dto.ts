import { Solder } from '@medal-registry/types';
import { IsOptional, IsString } from 'class-validator';

export class CreateSolderDto implements Solder {
  @IsOptional()
  @IsString()
  name?: string;

  @IsString()
  surname!: string;

  @IsOptional()
  @IsString()
  rank?: string;
  @IsString()
  slug!: string;

  @IsOptional()
  @IsString()
  serviceNumber?: string;

  @IsOptional()
  @IsString()
  createdAt?: string;

  @IsOptional()
  @IsString()
  updatedAt?: string;
}
