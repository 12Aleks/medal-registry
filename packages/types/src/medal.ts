import {SoldierType} from "./soldier";
import {ClaspType} from "./clasp";

export interface MedalType {
  id?: string;
  name: string;
  description?: string;
  medalType: string;
  clasps?: ClaspType[];
  slug: string;
  images?: string[];
  establishedYear?: number;
  discontinuedYear?: number;
}

export type MedalPageType = {
  soldierAwards: SoldierType[];
}
