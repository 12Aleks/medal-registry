import { SoldierType } from './soldier';
import { RegimentType } from './regiment';
import { ConflictType } from './conflict';

export interface ServiceRecordType {
    id?: string;
    soldier: SoldierType;
    regiment: RegimentType;
    conflict?: ConflictType | null;
    startYear?: number | null;
    endYear?: number | null;
    slug: string;
    createdAt?: Date;
    updatedAt?: Date;
}