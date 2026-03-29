"use client"

import {MedalType} from "@medal-registry/types";
import ItemsTable, {Column} from "@/app/components/table/Items-table";
import Link from "next/link";

type Props = {
    medals: MedalType[]
}

const columnsName: Column<MedalType>[]  = [
    { key: "name", header: "Name" },
    { key: "description", header: "Description" },
    { key: "medalType", header: "Type" },
    { key: "establishedYear", header: "Year" },
]

export function MedalsTable({ medals }: Props) {
    return (
        <ItemsTable
            data={medals}
            columns={columnsName}
            rowKey={(row) =>  row.id ?? row.name}
            rowRender={(row, idx, rowContent) => (
                <tr key={row.id ?? row.name} className="relative bg-neutral-primary border-b border-default text-background-blue duration-300 hover:bg-gray-300/20 cursor-pointer">
                    <Link href={`/medals/${row.id}`} className="absolute inset-0 z-10" />
                    {rowContent}
                </tr>
            )}
        />
    )
}