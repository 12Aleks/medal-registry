import {ActionCatchState, RegimentType} from "@medal-registry/types";
import HeaderDashboard from "@/app/dashboard/components/HeaderDashboard";
import {Metadata} from "next";
import {isActionError} from "@/shared/utils/checkActionData";
import ErrorComponent from "@/app/components/error/ErrorComponent";
import Loading from "@/app/components/loader/Loading";
import EmptyListPlaceholder from "@/app/components/feedback/EmptyListPlaceholder";
import {RegimentsTable} from "@/app/dashboard/regiments/regiments-table";
import {getRegiments} from "@/shared/api/regimentActions";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
    title: "Regiment list",
    description: "Regiments list",
}

export default async function RegimentsListPage() {
    const regimentsList: RegimentType[] | ActionCatchState = await getRegiments();

    if (isActionError(regimentsList)) return  <ErrorComponent error={regimentsList} />

    return (
        <div className="p-6 h-full">
             <HeaderDashboard
                 title={'Medal list'}
                 link={'medals'}
                 buttonText={'Add new medal'}
             />
            {
                !regimentsList &&  <Loading />
            }

            {
                regimentsList && regimentsList.length === 0 && <EmptyListPlaceholder
                    information={'Regiments not found. The list is empty.'}/>
            }

            {
                regimentsList && regimentsList.length > 0 && <RegimentsTable regiments={regimentsList}/>

            }
        </div>
    )
}