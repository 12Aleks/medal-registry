import React from 'react';
import HeaderDashboard from "@/app/dashboard/components/HeaderDashboard";
import {getConflicts} from "@/shared/api/conflictActions";
import {ConflictType} from "@medal-registry/types";
import ConflictsTable from "@/app/dashboard/conflicts/conflicts-table";
import Loader from "@/app/components/loader/Loader";

export const dynamic = "force-dynamic";

const ConflictListPage = async () => {
    const conflicts: ConflictType[] = await getConflicts()
    return (
        <div className="p-6 h-full">
            <HeaderDashboard
                title={'Conflict list'}
                link={'conflicts'} />
            {
               !conflicts?.length?
                    <div className="flex items-center justify-center h-full">
                        <Loader size={0.5}/>
                    </div> :
                  <ConflictsTable  conflicts={conflicts} />
            }
            
        </div>
    );
};

export default ConflictListPage;