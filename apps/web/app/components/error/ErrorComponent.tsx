"use client"
import {useEffect} from 'react';
import {ActionCatchError} from "@medal-registry/types";
import {useRouter} from "next/navigation";
import {Button} from "@/components/ui/button";

type ErrorComponentType = {
    error: ActionCatchError;
}

const ErrorComponent = ({ error } : ErrorComponentType) => {
    const router = useRouter();
    useEffect(() => {
        console.error('Dashboard error:', error.message);
    }, [error]);


    return (
        <div className="flex items-center justify-center h-full">
            <div className="p-3 flex flex-col min-h-[250px] items-center justify-center gap-4 border border-blue-800 rounded-md ">
                <h2 className="text-xl font-semibold text-red-500">
                    Failed to load data
                </h2>
                <p className="text-gray-500 text-md">
                    Something went wrong while fetching the soldiers list.
                    {error.message}
                </p>
                <Button onClick={() => router.refresh()} className={'cursor-pointer'}  variant="customBlue" >Try again </Button>
            </div>
        </div>
    );
};

export default ErrorComponent;