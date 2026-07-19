"use client"
import {Button} from "@/components/ui/button";
import {useRouter} from "next/navigation";
import {PATHS} from "@/shared/config/paths";

const QuickAction = () => {
    const router = useRouter();

    const quickAction = () => {
        router.push(PATHS.dashboard.soldiers.create);
    }

    return (
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
            <Button
                variant='outline'
                className='w-full text-slate-950 text-sm py-2.5 px-4 cursor-pointer'
                onClick={quickAction}>
                + Add New Soldier
            </Button>
        </div>
    );
};

export default QuickAction;