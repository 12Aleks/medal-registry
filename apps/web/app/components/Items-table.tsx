"use client"
import {ReactNode, Key} from "react";


export type Column<T> = {
    key: keyof T
    header: string
    render?: (value: unknown, row: T) => ReactNode
}

type TableProps<T> = {
    data: T[]
    columns: Column<T>[]
    rowKey: (row: T) => Key
}

export default function ItemsTable<T>  ({data, columns, rowKey} : TableProps<T>) {
    return (
        <div className="relative overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-base border border-default">
            <table className="w-full text-sm text-left rtl:text-right text-body">
                <thead className="bg-background-blue text-white border-b border-default">
                <tr>
                    {columns?.map((col) => (
                        <th key={String(col.key)} className="px-6 py-3 font-medium text-base tracking-wide">{col.header}</th>
                    ))}
                </tr>
                </thead>

                <tbody>
                {data?.map((row) => (
                    <tr key={rowKey(row)} className="bg-neutral-primary border-b border-default text-background-blue ">
                        {columns?.map((col) => (
                            <td key={String(col.key)} className="px-6 py-4 tracking-wide">
                                {col.render
                                    ? col.render(row[col.key], row)
                                    : String(row[col.key] ?? "")}
                            </td>
                        ))}
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}
           