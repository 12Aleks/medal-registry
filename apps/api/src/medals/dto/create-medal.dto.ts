// apps/api/src/medals/dto/create-medal.dto.ts
import { IsString, IsOptional, IsNumber } from 'class-validator'
import { CreateMedalInput } from '@medal-registry/types'


export class CreateMedalDto implements CreateMedalInput {
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  description?: string

  @IsString()
  medalType: string

  @IsOptional()
  @IsNumber()
  establishedYear?: number

  @IsOptional()
  @IsNumber()
  discontinuedYear?: number
}