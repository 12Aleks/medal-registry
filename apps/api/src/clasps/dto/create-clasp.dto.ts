import { IsInt, IsOptional, IsString, IsUUID } from 'class-validator';

export class CreateClaspDto {
  @IsString()
  name!: string;

  @IsOptional()
  @IsInt()
  year?: number;

  @IsOptional()
  @IsString()
  description?: string;

  @IsUUID()
  medalId!: string;
}
