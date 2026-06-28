import Index from "@/app/components/loader";
import HeaderDashboard from "@/app/dashboard/components/HeaderDashboard";
import {Metadata} from "next";
import {getAllSoldiers} from "@/shared/api/soldierAction";
import {ActionCatchState, SoldierType} from "@medal-registry/types";
import {SoldiersTable} from "@/app/dashboard/soldiers/soldiers-table";
import ErrorComponent from "@/app/components/error/ErrorComponent";
import {isActionError} from "@/shared/utils/checkActionData";
import Loading from "@/app/components/loader/Loading";
import EmptyListPlaceholder from "@/app/components/feedback/EmptyListPlaceholder";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
    title: "Soldiers list",
    description: "Soldiers list",
}

export default async function SoldersListPage() {

    const soldiersList: SoldierType[] | ActionCatchState = await getAllSoldiers();

    if (isActionError(soldiersList)) return  <ErrorComponent error={soldiersList} />

    return (
        <div className="p-6 h-full">
             <HeaderDashboard
                 title={'Soldiers list'}
                 link={'soldiers'}
                 buttonText={'Add new soldier'}
             />
            {
                !soldiersList &&  <Loading />
            }

            {
                soldiersList && soldiersList.length === 0 && <EmptyListPlaceholder
                information={'Soldiers not found. The list is empty.'}/>
            }

            {
                soldiersList && soldiersList.length > 0 && <SoldiersTable soldiers={soldiersList} />
            }
        </div>
    )
}