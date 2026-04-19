import {MedalType} from "@medal-registry/types";
import {getMedals} from "@/shared/api/medalActions";
import {MedalsTable} from "@/app/dashboard/medals/ medals-table";
import Loader from "@/app/components/loader/Loader";
import HeaderDashboard from "@/app/dashboard/components/HeaderDashboard";

export const dynamic = "force-dynamic";

export default async function MedalsListPage() {
    const medalsList: MedalType[] = await getMedals();

    return (
        <div className="p-6 h-full">
             <HeaderDashboard title={'Medal list'} link={'medals'} />
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