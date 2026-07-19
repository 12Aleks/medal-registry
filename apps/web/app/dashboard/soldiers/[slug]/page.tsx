import React from 'react';
import { Metadata } from "next";
import { getOneSoldier } from "@/shared/api/soldierAction";
import {
    ActionCatchState,
    ParamsPropsType,
    SoldierType,
} from "@medal-registry/types";
import { isActionError } from "@/shared/utils/checkActionData";
import ErrorComponent from "@/app/components/error/ErrorComponent";
import MedalItem from "@/app/dashboard/features/soldier/MedalItem";

type SoldierPageResponse = SoldierType & {
    awards: Array<{
        id: string;
        medal: {
            id?: string;
            name: string;
            medalType: string;
        };
    }>;
    serviceRecords: Array<{
        id: string;
        conflict: {
            id: string;
            name: string;
            startYear?: number | null;
            endYear?: number | null;
        };
    }>;
};

export async function generateMetadata({ params }: ParamsPropsType): Promise<Metadata> {
    const { slug } = await params;
    const data = await getOneSoldier(slug);

    if (isActionError(data)) {
        return {
            title: 'Soldier not found',
        };
    }

    const soldier = data as SoldierPageResponse;
    const fullName = [soldier.name, soldier.surname].filter(Boolean).join(' ');

    return {
        title: fullName || 'Soldier Profile',
        description: `This page contains military service information and awards for ${fullName}.`,
    };
}

const SoldierPage = async ({ params }: ParamsPropsType) => {
    const { slug } = await params;
    const data = await getOneSoldier(slug);
     console.log(data)
    if (isActionError(data)) return <ErrorComponent error={data} />;

    const soldier = data as unknown as SoldierPageResponse;
    const awards = soldier.awards ?? [];
    const serviceRecords = soldier.serviceRecords ?? [];
    const initials = `${soldier.name?.[0] || ''}${soldier.surname?.[0] || ''}`.toUpperCase() || 'SR';

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
                        2nd Battalion, Royal Sussex Regiment
                    </p>

                    <div className="flex flex-wrap justify-center sm:justify-start gap-x-4 gap-y-1 text-xs text-slate-400">
                        <div>
                            Service Number: <span className="font-semibold text-slate-700">{soldier.serviceNumber || 'N/A'}</span>
                        </div>
                        <div>
                            Active Years: <span className="font-semibold text-slate-700">1888 - 1901</span>
                        </div>
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
                            {serviceRecords?.map((record) => (
                                <div
                                    key={record.id}
                                    className="border border-slate-100 rounded-lg p-4 bg-slate-50/50 hover:bg-slate-50 transition-colors flex justify-between items-center"
                                >
                                    <div className="space-y-1">
                                        <h3 className="text-sm font-semibold text-slate-800">{record.conflict.name}</h3>
                                    </div>
                                    <span className="text-xs font-medium bg-white border border-slate-200 text-slate-600 px-2 py-1 rounded">
                                        {record.conflict.startYear || 'N/A'} - {record.conflict.endYear || 'Present'}
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
                                <MedalItem key={award.id} award={award} slug={slug} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SoldierPage;
