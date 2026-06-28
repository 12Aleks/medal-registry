import {ActionCatchState, MedalType} from "@medal-registry/types";
import {getMedals} from "@/shared/api/medalActions";
import {MedalsTable} from "@/app/dashboard/medals/ medals-table";
import Index from "@/app/components/loader";
import HeaderDashboard from "@/app/dashboard/components/HeaderDashboard";
import {Metadata} from "next";
import {isActionError} from "@/shared/utils/checkActionData";
import ErrorComponent from "@/app/components/error/ErrorComponent";
import Loading from "@/app/components/loader/Loading";
import EmptyListPlaceholder from "@/app/components/feedback/EmptyListPlaceholder";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
    title: "Medal list",
    description: "Medals list for medal",
}

export default async function MedalsListPage() {
    const medalsList: MedalType[] | ActionCatchState = await getMedals();

    if (isActionError(medalsList)) return  <ErrorComponent error={medalsList} />

    return (
        <div className="p-6 h-full">
             <HeaderDashboard
                 title={'Medal list'}
                 link={'medals'}
                 buttonText={'Add new medal'}
             />
            {
                !medalsList &&  <Loading />
            }

            {
                medalsList && medalsList.length === 0 && <EmptyListPlaceholder
                    information={'Medals not found. The list is empty.'}/>
            }

            {
                medalsList && medalsList.length > 0 && <MedalsTable medals={medalsList}/>

            }
        </div>
    )
}