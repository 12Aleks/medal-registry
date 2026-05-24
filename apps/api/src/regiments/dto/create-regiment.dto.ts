import { RegimentType } from '@medal-registry/types';
import { IsString } from 'class-validator';

export class CreateRegimentDto implements RegimentType {
  @IsString()
  name!: string;

  @IsString()
  description!: string;

  @IsString()
  country!: string;

  @IsString()
  slug!: string;
}
