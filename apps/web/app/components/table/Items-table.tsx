"use client"
import {ReactNode, Key} from "react";
import styles from './table.module.scss';
import {clsx} from "clsx";
import ImageComponent from "@/app/components/image/ImageComponent";


export type Column<T> = {
    key: keyof T
    header: string
    render?: (value: unknown, row: T) => ReactNode
}

type TableProps<T> = {
    data: T[]
    columns: Column<T>[]
    rowKey: (row: T) => Key
    rowRender?: (row: T, rowIndex: number, rowContent: ReactNode[]) => ReactNode
}

export default function ItemsTable<T>  ({data, columns, rowKey, rowRender} : TableProps<T>) {
    return (
        <div className="relative overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-base border border-default">
            <table className={clsx(styles.table_wrapper, 'w-full text-sm text-left rtl:text-right text-body')}>
                <thead className="bg-background-blue text-white border-b border-default">
                <tr>
                    {columns.map((col) => (
                        <th key={String(col.key)} className="px-6 py-3 font-medium text-base tracking-wide">{col.header}</th>
                    ))}
                    <th>
                        Edit
                    </th>
                    <th>
                        Delete
                    </th>
                </tr>
                </thead>

                <tbody>
                {data.map((row, idx) => {
                    const rowContent = columns.map((col) => (
                        <td key={String(col.key)} className="px-6 py-4 tracking-wide max-w-96"
                            data-css={clsx(col?.key === 'establishedYear' && 'true')}
                        >
                            {col.key === 'images' ? (
                                <ImageComponent url={(row[col.key] as string[] | undefined)?.[0]} width={100} height={100} />
                            ) : (
                                String(row[col.key] ?? "")
                            )}
                        </td>

                    ));

                    return rowRender ? rowRender(row, idx, rowContent) : (
                        <tr key={rowKey(row)} className="bg-neutral-primary border-b border-default text-background-blue duration-300 hover:bg-gray-300/20">
                            {rowContent}
                        </tr>
                    );
                })}
                </tbody>
            </table>
        </div>
    );
}
           