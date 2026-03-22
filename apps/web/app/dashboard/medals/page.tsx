import Link from "next/link"
import {MedalType} from "@medal-registry/types";
import {getMedals} from "@/shared/api/medalActions";
import {MedalsTable} from "@/app/dashboard/medals/ medals-table";
import Loader from "@/app/components/loader/Loader";

export const dynamic = "force-dynamic";

export default async function MedalsListPage() {
    const medalsList:MedalType[] = await getMedals();

    console.log("Medals data:", medalsList);

    return (
    <div className="p-6 h-full">
      <div className="flex justify-between items-center mb-6 ">
        <h1 className="text-2xl font-bold">Medal list</h1>
        <Link href="/dashboard/medals/create" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all bg-primary text-primary-foreground hover:bg-primary/90 h-9 px-4 py-2">
          Add new medal
        </Link>
      </div>
        {
            !medalsList.length ?
                <div className="flex items-center justify-center h-full">
                <Loader size={0.5}/>
                </div> :
                <MedalsTable medals={medalsList} />
        }
    </div>
  )
}