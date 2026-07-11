import {isActionError} from "@/shared/utils/checkActionData";
import ErrorComponent from "@/app/components/error/ErrorComponent";
import {getDashboardData} from "@/shared/api/dashboardActions";
import {ActionCatchState, DashboardType} from "@medal-registry/types";
import {formatDate} from "@/shared/utils/dateFormat";

const DashboardPage = async ({}) => {
    const data: DashboardType | ActionCatchState = await getDashboardData()

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
                        <span className="text-3xl font-bold text-slate-800">42</span>
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
                        <span className="text-3xl font-bold text-slate-800">11</span>
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
                        <button className="text-xs font-semibold text-blue-600 hover:text-blue-800 cursor-pointer">
                            View All
                        </button>
                    </div>

                    <div className="divide-y divide-slate-100">
                        {recentSoldiers.map((soldier) => (
                            <div key={soldier.id}
                                 className="p-4 px-6 hover:bg-slate-50 transition-colors flex items-center justify-between">
                                <div className="space-y-1">
                                    <h4 className="text-sm font-semibold text-slate-800">{soldier.name}</h4>
                                    <p className="text-xs text-slate-400">{soldier.rank}</p>
                                </div>


                                <div className="flex items-center space-x-3">
                  <span className="inline-flex items-center text-xs text-slate-600 bg-slate-100 px-2 py-1 rounded">
                    📜 {soldier.conflictsCount} conflicts
                  </span>
                                    <span
                                        className="inline-flex items-center text-xs text-amber-700 bg-amber-50 border border-amber-200 px-2 py-1 rounded">
                    🎖️ {soldier.medalsCount} medals
                  </span>
                                    {
                                        soldier.createdAt &&
                                        <span className="text-xs text-slate-400 hidden sm:inline-block w-24 text-right">
                    {formatDate({isoDate: soldier.createdAt})}
                  </span>
                                    }
                                </div>
                            </div>
                        ))}
                    </div>
                </div>


                <div
                    className="bg-slate-950 text-white border border-slate-900 rounded-xl p-6 shadow-sm flex flex-col justify-between min-h-[220px]">
                    <div className="space-y-2">
                        <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Quick Action</span>
                        <h3 className="text-lg font-bold">Expand the Registry</h3>
                        <p className="text-slate-400 text-xs leading-relaxed">
                            Do you know a veteran or an ancestor who served? Add their record, link their medals, and
                            preserve history.
                        </p>
                    </div>
                    <button
                        className="w-full mt-4 bg-white text-slate-950 font-semibold text-sm py-2.5 px-4 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer text-center shadow-sm">
                        + Add New Soldier
                    </button>
                </div>

            </div>
        </div>
    );
}
export default DashboardPage;