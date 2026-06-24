import { IsUUID, IsOptional, IsNumber } from 'class-validator';

export class CreateSoldierAwardDto {
  @IsUUID()
  soldierId!: string;

  @IsUUID()
  medalId!: string;

  @IsOptional()
  @IsUUID()
  conflictId?: string;

  @IsOptional()
  @IsNumber()
  yearAwarded?: number;
}
