import Link from "next/link"
import {MedalType} from "@medal-registry/types";
import {getMedals} from "@/shared/api/medalActions";
import {MedalsTable} from "@/app/dashboard/medals/ medals-table";
import Loader from "@/app/components/loader/Loader";
import {Button} from "@/components/ui/button";

export const dynamic = "force-dynamic";

export default async function MedalsListPage() {
    const medalsList: MedalType[] = await getMedals();

    console.log("Medals data:", medalsList.length);

    return (
        <div className="p-6 h-full">
            <div className="flex justify-between items-center mb-6 ">
                <h1 className="text-2xl font-bold">Medal list</h1>
                <Button variant="customBlue">
                    <Link href="/dashboard/medals/create">
                        Add new medal
                    </Link>
                </Button>
            </div>
            {
                !medalsList.length ?
                    <div className="flex items-center justify-center h-full">
                        <Loader size={0.5}/>
                    </div> :
                    <MedalsTable medals={medalsList}/>

            }
        </div>
    )
}