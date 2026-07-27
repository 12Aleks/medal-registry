import {SoldierAwardPageType} from "./soldier_award";
import {ServiceRecordType} from "./service_record";
import {SoldierType} from "./soldier";

export interface MedalType {
  id?: string;
  name: string;
  description?: string;
  medalType: string
  slug: string;
  images?: string[];
  establishedYear?: number;
  discontinuedYear?: number;
}

export type MedalPageType = {
  soldierAwards: SoldierType[];
}

// export interface CreateSoldierAwardInput {
//   soldierId: string
//   medalId: string
//   conflictId?: string
//   yearAwarded?: number
// }


// export interface CreateCollectionItemInput {
//   soldierAwardId: string
//   inscriptionText?: string
//   serialNumber?: string
//   condition?: string
// }