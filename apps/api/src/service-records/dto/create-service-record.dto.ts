import { IsOptional, IsString, IsNumber, IsEnum } from 'class-validator';

export enum ServiceType {
  ACTIVE = 'active',
  RESERVE = 'reserve',
  RETIRED = 'retired',
  KIA = 'kia',
  DIED = 'died',
  DISCHARGED = 'discharged',
}

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

  @IsOptional()
  @IsEnum(ServiceType)
  serviceType?: ServiceType;
}
