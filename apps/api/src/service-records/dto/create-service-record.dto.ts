import { IsOptional, IsString } from 'class-validator';

export class CreateServiceRecordDto implements CreateServiceRecordDto {
  @IsString()
  soldier!: string;

  @IsString()
  regiment!: string;

  @IsOptional()
  @IsString()
  conflict?: string | null;

  @IsString()
  slug!: string;

  @IsOptional()
  startYear?: number;

  @IsOptional()
  endYear?: number;
}
