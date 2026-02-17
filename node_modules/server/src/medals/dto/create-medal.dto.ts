// apps/api/src/medals/dto/create-medal.dto.ts
import { IsString, IsOptional, IsUUID, IsNumber } from 'class-validator'
import { CreateMedalInput } from '@medal-registry/types'

export class CreateMedalDto implements CreateMedalInput {
  @IsUUID()
  soldierId: string

  @IsString()
  medalType: string

  @IsOptional()
  @IsString()
  inscriptionText?: string

  @IsOptional()
  @IsString()
  serialNumber?: string

  @IsOptional()
  @IsNumber()
  yearAwarded?: number

  @IsOptional()
  @IsString()
  condition?: string

  @IsOptional()
  @IsUUID()
  conflictId?: string
}
