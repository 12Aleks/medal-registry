import {Metadata} from "next";
import {ClaspType, MedalPageType, MedalType, ParamsPropsType} from "@medal-registry/types";
import {getOneMedal} from "@/shared/api/medalActions";
import Index from "@/app/components/loader";
import ImageComponent from "@/app/components/image/ImageComponent";
import Link from "next/link";
import SoldierItem from "@/app/dashboard/components/SoldierItem";
import {Button} from "@/components/ui/button";

export async function generateMetadata({ params }: ParamsPropsType): Promise<Metadata> {
    const { slug } = await params;
    const medal: MedalType = await getOneMedal(slug);
    return {
        title: medal?.name || "Medal Details",
        description: medal?.description,
    };
}

const MedalPage = async ({params}: ParamsPropsType) => {
    const {slug} = await params;
    const medal: MedalType & MedalPageType = await getOneMedal(slug);

    if (!medal) {
        return (
            <div className="flex items-center justify-center min-h-[400px]">
                <Index size={0.5} />
            </div>
        );
    }
    const imageUrl = medal?.images?.at(0);

    return (
        <div className="min-h-screen bg-[#F8FAFC] p-6 text-slate-800">

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
                <div className="space-y-6 lg:col-span-5">
                    <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
                        <div className="relative mb-6 flex h-64 w-full items-center justify-center overflow-hidden rounded-xl bg-slate-100 border border-slate-100">
                            {imageUrl ? (
                                <ImageComponent
                                    className="h-full w-full object-contain p-2"
                                    url={imageUrl}
                                    title={medal.name}
                                    width={300}
                                    height={300}
                                />
                            ) : (
                                <div className="flex flex-col items-center gap-2 text-slate-400">
                                    <svg
                                        className="h-16 w-16 stroke-1"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                                        />
                                    </svg>
                                    <span className="text-xs font-medium">No Image Available</span>
                                </div>
                            )}
                        </div>

                        <div className="mb-6 rounded-lg bg-[#FEF3C7] py-2.5 text-center text-xs font-bold uppercase tracking-wider text-[#92400E]">
                            TYPE: {medal.medalType || "Campaign Medal"}
                        </div>


                        <div>
                            <h3 className="mb-2 text-sm font-semibold text-slate-900">Overview</h3>
                            <p className="text-xs leading-relaxed text-slate-600">
                                {medal.description || "No description provided for this medal."}
                            </p>
                        </div>
                    </div>


                    <div className="rounded-2xl bg-[#0B0F19] p-5 text-white shadow-md">
            <span className="text-[10px] font-bold tracking-widest text-slate-400 uppercase">
              Quick Stats
            </span>
                        <div className="mt-3 grid grid-cols-2 gap-4">
                            <div>
                                <p className="text-xl font-bold text-white">
                                    {medal?.soldierAwards?.length ?? 0}
                                </p>
                                <p className="text-xs text-slate-400">Soldiers linked</p>
                            </div>
                            <div>
                                <p className="text-xl font-bold text-white">
                                    {medal?.clasps?.length ?? 0}
                                </p>
                                <p className="text-xs text-slate-400">Bars available</p>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="space-y-6 lg:col-span-7">

                    <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
                        <div className="mb-4 flex items-center justify-between">
                            <h2 className="text-base font-semibold text-slate-900">Medal Clasps / Bars</h2>
                            <Link
                                href={`/dashboard/medals/${medal.slug}/create-clasp`}
                                className='text-sm/6 cursor-pointer'
                            >+ Add Clasp</Link>
                        </div>

                        {medal?.clasps && medal.clasps.length > 0 ? (
                            <div className="flex flex-wrap gap-2">
                                {medal.clasps.map((clasp: ClaspType, index: number) => (
                                    <div
                                        key={index}
                                        className="flex items-center gap-2 rounded-lg border border-slate-100 bg-slate-50 px-3 py-2 text-xs font-medium text-slate-700"
                                    >
                                        <span>🎖️</span>
                                        <span>{clasp.name}</span>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="rounded-xl border border-dashed border-slate-200 p-6 text-center text-xs text-slate-400">
                                No clasps or bars added to this medal yet.
                            </div>
                        )}
                    </div>


                    <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
                        <div className="mb-4 flex items-center justify-between">
                            <h2 className="text-base font-semibold text-slate-900">Recently Added Soldiers</h2>
                            <Link href="/soldiers" className="text-xs font-semibold text-slate-500 hover:text-slate-800">
                                View All
                            </Link>
                        </div>

                        {medal?.soldierAwards && medal.soldierAwards.length > 0 ? (
                            <div className="divide-y divide-slate-100">
                                {medal.soldierAwards.map((award: any) => (
                                    <SoldierItem soldier={award.soldier} key={award.soldier?.id} />
                                ))}
                            </div>
                        ) : (
                            <div className="rounded-xl border border-dashed border-slate-200 p-8 text-center text-xs text-slate-400">
                                No soldiers linked to this medal yet.
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MedalPage;