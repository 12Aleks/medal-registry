import HeaderDashboard from "@/app/dashboard/components/HeaderDashboard";
import {getConflicts} from "@/shared/api/conflictActions";
import {ActionCatchState, ConflictType} from "@medal-registry/types";
import ConflictsTable from "@/app/dashboard/conflicts/conflicts-table";
import {Metadata} from "next";
import Loading from "@/app/components/loader/Loading";
import EmptyListPlaceholder from "@/app/components/feedback/EmptyListPlaceholder";
import {isActionError} from "@/shared/utils/checkActionData";
import ErrorComponent from "@/app/components/error/ErrorComponent";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
    title: "Conflict list",
    description: "List of conflicts",
}

const ConflictListPage = async () => {
    const conflicts: ConflictType[] | ActionCatchState = await getConflicts()

    if (isActionError(conflicts)) return <ErrorComponent error={conflicts} />

    return (
        <div className="p-6 h-full">
            <HeaderDashboard
                title={'Conflict list'}
                link={'conflicts'}
                buttonText={'Add new conflict'}
            />
            {
                !conflicts && <Loading />
            }

            {conflicts && conflicts.length === 0 && <EmptyListPlaceholder
                information={'Conflicts not found. The list is empty.'}/>
            }

            { conflicts && conflicts.length > 0 &&
                  <ConflictsTable  conflicts={conflicts} />
            }
            
        </div>
    );
};

export default ConflictListPage;