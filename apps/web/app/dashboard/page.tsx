import {isActionError} from "@/shared/utils/checkActionData";
import ErrorComponent from "@/app/components/error/ErrorComponent";
import {getDashboardData} from "@/shared/api/dashboardActions";
import {ActionCatchState, DashboardType} from "@medal-registry/types";
import {Metadata} from "next";
import SoldierItem from "@/app/dashboard/features/dashboard/SoldierItem";
import Link from "next/link";
import QuickAction from "@/app/dashboard/features/dashboard/QuickAction";

export const metadata: Metadata = {
    title: "Dashboard",
    description: "Welcome to the Medal Registry Dashboard. Here you can manage your soldiers, conflicts, and medals.",
}

const DashboardPage = async ({}) => {
    const data: DashboardType | ActionCatchState = await getDashboardData()
    console.log(data)
    if (isActionError(data)) return <ErrorComponent error={data}/>

    const {stats, recentSoldiers} = data;

    return (
        <div className="space-y-6">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                <div
                    className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between">
                        <span
                            className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Soldiers Added</span>
                        <span className="p-2 bg-blue-50 rounded-lg text-blue-600 text-lg">🪖</span>
                    </div>
                    <div className="flex items-baseline justify-between mt-3">
                        <span className="text-3xl font-bold text-slate-800">{stats?.soldiersCount}</span>
                        <span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">+4 this week</span>
                    </div>
                </div>

                <div
                    className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between">
                        <span
                            className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Medals Linked</span>
                        <span className="p-2 bg-amber-50 rounded-lg text-amber-600 text-lg">🎖️</span>
                    </div>
                    <div className="flex items-baseline justify-between mt-3">
                        <span className="text-3xl font-bold text-slate-800">{stats.medalsLinkedCount}</span>
                        <span className="text-xs font-medium text-amber-600 bg-amber-50 px-2 py-0.5 rounded-full">Total awards</span>
                    </div>
                </div>

                <div
                    className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between">
                        <span
                            className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Conflicts Linked</span>
                        <span className="p-2 bg-slate-100 rounded-lg text-slate-700 text-lg">📜</span>
                    </div>
                    <div className="flex items-baseline justify-between mt-3">
                        <span className="text-3xl font-bold text-slate-800">{stats.conflictsCount}</span>
                        <span
                            className="text-xs font-medium text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full">Campaigns</span>
                    </div>
                </div>

                <div
                    className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between">
                        <span
                            className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Contributor Rank</span>
                        <span className="p-2 bg-emerald-50 rounded-lg text-emerald-600 text-lg">⭐</span>
                    </div>
                    <div className="flex flex-col mt-2">
                        <span className="text-lg font-bold text-slate-800">Archivist</span>
                        <span className="text-xs text-slate-400 mt-1">Top 15% of contributors</span>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">


                <div className="lg:col-span-2 bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
                    <div className="px-6 py-4 border-b border-slate-100 flex justify-between items-center">
                        <h3 className="text-base font-bold text-slate-900">Your Recently Added Soldiers</h3>
                        <Link
                            href="/dashboard/soldiers"
                            className="text-sm font-semibold text-blue-600 hover:text-blue-800 cursor-pointer">
                            View All
                        </Link>
                    </div>

                    <div className="divide-y divide-slate-100">
                        { recentSoldiers?.map((soldier) =>
                            <SoldierItem key={soldier.id} soldier={soldier} />
                        )}
                    </div>
                </div>


                <QuickAction />

            </div>
        </div>
    );
}
export default DashboardPage;