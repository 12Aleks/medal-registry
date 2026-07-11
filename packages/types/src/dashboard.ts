import {SoldierType} from "./soldier";

export type RecentSoldierType = Omit<SoldierType, 'surname' | 'serviceNumber' | 'updatedAt'> & {
    conflictsCount: number,
    medalsCount: number,
}

export type DashboardType = {
    stats: {
        soldiersCount: number,
        medalsLinkedCount: number,
        conflictsCount: number,
        serviceRecordsCount: number,
    },
    recentSoldiers: RecentSoldierType[],
}