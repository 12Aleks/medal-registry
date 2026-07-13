import {ConflictType} from "./conflict";
import {MedalType} from "./medal";
import {SoldierType} from "./soldier";

export interface SoldierAwardType {
    soldierId: string;
    medalId: string;
    conflictId?: string;
    yearAwarded?: number;
}

export type SoldierAwardPageType = {
    conflict: ConflictType;
        id: string
    medal: Omit<MedalType, "id" | "name" | "medalType">;
    soldier: SoldierType;
};