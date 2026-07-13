import {SoldierAwardPageType, SoldierAwardType} from "./soldier_award";
import {ServiceRecordType} from "./service_record";

export interface SoldierType {
    id?: string;
    name?: string;
    surname: string;
    rank?: string;
    slug: string;
    serviceNumber?: string;
    createdAt?: string;
    updatedAt?: string;
}

export type SoldierPageType = {
    soldier: SoldierType;
    awards: SoldierAwardPageType[];
    serviceRecords: Omit<ServiceRecordType, 'conflict' | 'regiment' | 'soldier'>[];
}