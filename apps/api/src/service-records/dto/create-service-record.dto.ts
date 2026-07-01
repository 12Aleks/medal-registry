import { IsOptional, IsString, IsNumber } from 'class-validator';

export class CreateServiceRecordDto {
  @IsString()
  soldierId!: string;

  @IsString()
  regimentId!: string;

  @IsOptional()
  @IsString()
  conflictId?: string | null;

  @IsOptional()
  @IsNumber()
  startYear?: number;

  @IsOptional()
  @IsNumber()
  endYear?: number;
}
