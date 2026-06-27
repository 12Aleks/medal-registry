import Loader from "@/app/components/loader/Loader";
import HeaderDashboard from "@/app/dashboard/components/HeaderDashboard";
import {Metadata} from "next";
import {getAllSoldiers} from "@/shared/api/soldierAction";
import {ActionCatchError, SoldierType} from "@medal-registry/types";
import {SoldiersTable} from "@/app/dashboard/soldiers/soldiers-table";
import ErrorComponent from "@/app/components/error/ErrorComponent";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
    title: "Soldiers list",
    description: "Soldiers list",
}

export default async function SoldersListPage() {

    const soldiersList: SoldierType[] | ActionCatchError = await getAllSoldiers();

    if(!soldiersList || !Array.isArray(soldiersList)) {
        return <ErrorComponent error={soldiersList} />;
    }


    return (
        <div className="p-6 h-full">
             <HeaderDashboard
                 title={'Soldiers list'}
                 link={'soldiers'}
                 buttonText={'Add new soldier'}
             />
            {
                !soldiersList?.length ?
                    <div className="flex items-center justify-center h-full">
                        <Loader size={0.5}/>
                    </div> : <SoldiersTable soldiers={soldiersList} />
            }
        </div>
    )
}