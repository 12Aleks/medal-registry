import { IsUUID, IsOptional, IsNumber, IsArray } from 'class-validator';

export class CreateSoldierAwardDto {
  @IsUUID()
  soldierId!: string;

  @IsUUID()
  medalId!: string;

  @IsOptional()
  @IsUUID()
  conflictId?: string;

  @IsOptional()
  @IsArray()
  @IsUUID('4', { each: true })
  claspIds?: string[];

  @IsOptional()
  @IsNumber()
  yearAwarded?: number;
}
