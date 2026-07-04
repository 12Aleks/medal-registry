"use client"
import {RegimentType} from "@medal-registry/types";
import ItemsTable, { ColumnType } from "@/app/components/table/Items-table";
import {useRouter} from "next/navigation";
import {SquarePen, SquareX} from "lucide-react";
import {deleteOneRegiment} from "@/shared/api/regimentActions";

type RegimentsTableType = {
    regiments: RegimentType[]
}

const columnsName: ColumnType<RegimentType>[]  = [
    { key: "name", header: "Name" },
    { key: "description", header: "Description" },
    { key: "country", header: "Country" },
]

export function RegimentsTable({ regiments }: RegimentsTableType) {
    const router = useRouter();
    return (
        <ItemsTable
            data={regiments}
            columns={columnsName}
            rowKey={(row) => row.id ?? row.name}
            rowRender={(row, idx, rowContent) => (
                <tr
                    key={row.id ?? row.name}
                    onClick={() => router.push(`/dashboard/regiments/${row.slug}`)}
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
                                deleteOneRegiment(row.slug)
                            }}
                            className='text-red-900 hover:text-red-950 duration-300 relative z-10'/>
                    </td>
                </tr>
            )}
        />
    )
}
