"use client"

import {MedalType} from "@medal-registry/types";
import ItemsTable, {Column} from "@/app/components/table/Items-table";

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
        <ItemsTable data={medals} columns={columnsName} rowKey={(row) =>  row.id ?? row.name}/>
    )
}