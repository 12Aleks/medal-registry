import React from 'react';
import {formatDate} from "@/shared/utils/dateFormat";
import { RecentSoldierType } from "@medal-registry/types";
import {handleAction} from "next/dist/server/app-render/action-handler";
import Link from "next/link";

type SoldierItemType = {
    soldier: RecentSoldierType
}

function SoldierItem({soldier} : SoldierItemType) {

    return (
        <Link
            href={`/dashboard/soldiers/${soldier.slug}`}
            className="p-4 px-6 hover:bg-slate-50 transition-colors flex items-center justify-between"
        >
            <div className="space-y-1">
                <h4 className="text-base font-semibold text-slate-800">{soldier.name}</h4>
                <p className="text-sm text-slate-400">{soldier.rank}</p>
            </div>


            <div className="flex items-center space-x-3">
                  <span className="inline-flex items-center text-sm text-slate-600 bg-slate-100 px-2 py-1 rounded">
                    📜 {soldier.conflictsCount} conflicts
                  </span>
                <span
                    className="inline-flex items-center text-sm text-amber-700 bg-amber-50 border border-amber-200 px-2 py-1 rounded">
                    🎖️ {soldier.medalsCount} medals
                  </span>
                {
                    soldier.createdAt &&
                    <span className="text-sm text-slate-400 hidden sm:inline-block w-24 text-right">
                    {formatDate({isoDate: soldier.createdAt})}
                  </span>
                }
            </div>
        </Link>
    );
}

export default SoldierItem;