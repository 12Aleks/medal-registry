import React from 'react';
import Link from "next/link";
import {PATHS} from "@/shared/config/paths";

type MedalItemType = {
    award: {
        id: string;
        medal: {
            id?: string;
            name: string;
            medalType: string;
            slug: string;
        };
    }

}

const MedalItem = ({ award }: MedalItemType) => {
    return (
        <Link
            href={`${PATHS.dashboard.medals.list}${award.medal.slug}`}
            className="flex items-center gap-3 p-3 border border-slate-100 rounded-lg hover:border-slate-200 transition-all bg-white shadow-sm"
        >
            <div className="w-10 h-10 bg-amber-50 border border-amber-100 text-amber-700 rounded-lg flex items-center justify-center text-lg shrink-0">
                🎖️
            </div>
            <div className="flex-1 min-w-0">
                <h3 className="text-sm font-semibold text-slate-800 truncate">{award.medal.name}</h3>
                <h3 className="text-sm font-semibold text-slate-800 truncate">{award.medal.medalType}</h3>
            </div>
        </Link>
    );
};

export default MedalItem;