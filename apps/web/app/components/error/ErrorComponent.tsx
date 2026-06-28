"use client"
import {useEffect} from 'react';
import {ActionCatchState} from "@medal-registry/types";
import {useRouter} from "next/navigation";
import {Button} from "@/components/ui/button";

type ErrorComponentType = {
    error: ActionCatchState;
}

const ErrorComponent = ({ error } : ErrorComponentType) => {
    const router = useRouter();
    useEffect(() => {
        console.error('Dashboard error:', error.message);
    }, [error]);


    return (
        <div className="flex items-center justify-center h-full">
            <div className="p-3 flex flex-col max-w-[600px] min-h-[250px] items-center justify-center gap-4 border border-blue-800 rounded-md">
                <div className="flex-1 flex flex-col items-center justify-center gap-2 text-center">
                <h2 className="text-xl font-semibold text-red-600 uppercase">
                    Failed to load data
                </h2>
                <p className="text-gray-500 text-md">
                    Something went wrong while fetching the soldiers list.
                    {error.message}
                </p>
                </div>
                <div className="flex items-center justify-between w-full p-4">
                    <Button
                        onClick={() => router.refresh()}
                        className="cursor-pointer"
                        variant="customBlue"
                    >
                        Try again
                    </Button>

                    <Button
                        onClick={() => router.push('/')}
                        className="cursor-pointer"
                        variant="customBlue"
                    >
                        Return to home page
                    </Button>
                </div>

            </div>
        </div>
    );
};

export default ErrorComponent;