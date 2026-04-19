import React from 'react';
import ItemsTable, {Column} from "@/app/components/table/Items-table";
import {ConflictType} from "@medal-registry/types";
import {SquarePen, SquareX} from "lucide-react";
import {deleteOneMedal} from "@/shared/api/medalActions";
import {router} from "next/client";

type ConflictTypeProps = {
    conflicts: ConflictType[];
}


const columnsName: Column<ConflictType>[]  = [
    { key: "name", header: "Name" },
    { key: "description", header: "Description" },
    { key: "startYear", header: "Start year" },
    { key: "endYear", header: "End year" },
]

const ConflictsTable = ({conflicts}: ConflictTypeProps) => {
    return (
        <ItemsTable
            data={conflicts}
            columns={columnsName}
            rowKey={(row) => row.id ?? row.name}
            rowRender={(row, idx, rowContent) => (
                <tr
                    key={row.id ?? row.name}
                    onClick={() => router.push(`/dashboard/conflicts/${row.slug}`)}
                    className="bg-neutral-primary border-b border-default text-background-blue duration-300 hover:bg-gray-300/20 cursor-pointer"
                >
                    {rowContent}
                    <td data-css="true">
                        <SquarePen
                            size={30}
                            className="text-green-900 hover:text-green-950 duration-300 relative z-10"
                        />
                    </td>
                    <td data-css="true">
                        <SquareX
                            size={30}
                            onClick={(e) => {
                                e.stopPropagation();
                                deleteOneMedal(row.slug)
                            }}
                            className='text-red-900 hover:text-red-950 duration-300 relative z-10'/>
                    </td>
                </tr>
            )}
        />
    );
};

export default ConflictsTable;