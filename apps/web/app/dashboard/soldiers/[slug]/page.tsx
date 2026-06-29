import React from 'react';
import { getOneSoldier } from "@/shared/api/soldierAction";
import { Metadata } from "next";
import { ActionCatchState, ParamsPropsType, SoldierType } from "@medal-registry/types";
import { isActionError } from "@/shared/utils/checkActionData";
import ErrorComponent from "@/app/components/error/ErrorComponent";

export async function generateMetadata({ params }: ParamsPropsType): Promise<Metadata> {
    const { slug } = await params;
    const soldier: SoldierType | ActionCatchState = await getOneSoldier(slug);

    if (isActionError(soldier)) {
        return {
            title: 'Soldier not found',
        };
    }

    const fullName = [soldier.name, soldier.surname].filter(Boolean).join(' ');

    return {
        title: fullName || 'Soldier Profile',
        description: `This page contains military service information and awards for ${fullName}.`,
    };
}

const SoldierPage = async ({ params }: ParamsPropsType) => {
    const { slug } = await params;
    const soldier: SoldierType | ActionCatchState = await getOneSoldier(slug);


    const conflicts = [
        { id: "egypt", name: "Egypt Campaign", years: "1882", description: "Battle of Tel-el-Kebir" },
        { id: "sudan", name: "Sudan Expedition", years: "1884-1885", description: "The Nile Expedition" }
    ];

    const awards = [
        { id: "egypt-medal", title: "Egypt Medal", clasp: "Tel-El-Kebir", icon: "🎖️" },
        { id: "khedive-star", title: "Khedive's Star", clasp: "1882", icon: "⭐" }
    ];

    if (isActionError(soldier)) return <ErrorComponent error={soldier} />;

    // Получаем первые буквы имени и фамилии для аватарки (инициалы)
    const initials = `${soldier.name?.[0] || ''}${soldier.surname?.[0] || ''}`.toUpperCase() || '🎖️';

    return (
        <div className="space-y-6">
            <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm flex flex-col sm:flex-row items-center sm:items-start gap-6">
                <div className="w-24 h-24 bg-slate-100 rounded-xl border border-slate-200 flex items-center justify-center text-slate-400 text-3xl font-light shrink-0">
                    {initials}
                </div>

                <div className="space-y-2 text-center sm:text-left flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
                        <h1 className="text-2xl font-bold text-slate-900">
                            {soldier.name} {soldier.surname}
                        </h1>
                        <span className="inline-flex items-center self-center sm:self-auto bg-blue-50 text-blue-700 border border-blue-100 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                            {soldier.rank || 'Private'}
                        </span>
                    </div>

                    <p className="text-sm text-slate-600 font-medium">
                        {/* {soldier.regiment || 'Regiment not specified'} */}
                        2nd Battalion, Royal Sussex Regiment
                    </p>

                    <div className="flex flex-wrap justify-center sm:justify-start gap-x-4 gap-y-1 text-xs text-slate-400">
                        <div>Service Number: <span className="font-semibold text-slate-700">{soldier.serviceNumber || 'N/A'}</span></div>
                        <div>Active Years: <span className="font-semibold text-slate-700">1888 - 1901</span></div>
                    </div>
                </div>
            </div>


            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">


                <div className="lg:col-span-2 space-y-6">
                    <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
                        <h2 className="text-base font-bold text-slate-900 border-b border-slate-100 pb-3 mb-4">
                            Campaigns & Military Service
                        </h2>

                        <div className="space-y-4">
                            {conflicts.map((conflict) => (
                                <div
                                    key={conflict.id}
                                    className="border border-slate-100 rounded-lg p-4 bg-slate-50/50 hover:bg-slate-50 transition-colors flex justify-between items-start"
                                >
                                    <div className="space-y-1">
                                        <h3 className="text-sm font-semibold text-slate-800">{conflict.name}</h3>
                                        <p className="text-xs text-slate-500">{conflict.description}</p>
                                    </div>
                                    <span className="text-xs font-medium bg-white border border-slate-200 text-slate-600 px-2 py-1 rounded">
                                        {conflict.years}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>


                <div className="space-y-6">
                    <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm h-full">
                        <h2 className="text-base font-bold text-slate-900 border-b border-slate-100 pb-3 mb-4">
                            Soldier's Awards
                        </h2>

                        <div className="space-y-3">
                            {awards.map((award) => (
                                <div
                                    key={award.id}
                                    className="flex items-center gap-3 p-3 border border-slate-100 rounded-lg hover:border-slate-200 transition-all bg-white shadow-sm"
                                >
                                    <div className="w-10 h-10 bg-amber-50 border border-amber-100 text-amber-700 rounded-lg flex items-center justify-center text-lg shrink-0">
                                        {award.icon}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h3 className="text-sm font-semibold text-slate-800 truncate">{award.title}</h3>
                                        {award.clasp && (
                                            <p className="text-[11px] text-amber-600 font-medium">Clasp: {award.clasp}</p>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default SoldierPage;