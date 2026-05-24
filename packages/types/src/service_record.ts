import {Soldier} from "server/dist/soldiers/soldiers.entity";
import {Regiment} from "server/dist/regiments/regiments.entity";
import {MilitaryConflict} from "server/dist/conflicts/conflicts.entity";

export interface ServiceRecord {
    id?: string;
    soldier: Soldier;
    regiment: Regiment;
    conflict?: MilitaryConflict | null;
    startYear?: number | null;
    endYear?: number | null;
    slug: string;
    createdAt?: Date;
    updatedAt?: Date;
}