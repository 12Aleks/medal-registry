"use client"
import {MedalType} from "@medal-registry/types";
import ItemsTable, {Column} from "@/app/components/table/Items-table";
import {useRouter} from "next/navigation";
import {SquarePen, SquareX} from "lucide-react";
import {deleteOneMedal} from "@/shared/api/medalActions";

type Props = {
    medals: MedalType[]
}

const columnsName: Column<MedalType>[]  = [
    { key: "name", header: "Name" },
     {key: "images", header: "Images" },
    { key: "description", header: "Description" },
    { key: "medalType", header: "Type" },
    { key: "establishedYear", header: "Year" },
]

export function MedalsTable({ medals }: Props) {
    const router = useRouter();
    return (
        <ItemsTable
            data={medals}
            columns={columnsName}
            rowKey={(row) => row.id ?? row.name}
            rowRender={(row, idx, rowContent) => (
                <tr
                    key={row.id ?? row.name}
                    onClick={() => router.push(`/dashboard/medals/${row.slug}`)}
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
    )
}