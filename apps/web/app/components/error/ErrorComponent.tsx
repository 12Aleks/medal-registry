"use client"
import {useEffect} from 'react';
import {ActionCatchError} from "@medal-registry/types";

type ErrorComponentType = {
    error: ActionCatchError;
    reset: () => void;
}

const ErrorComponent = ({error, reset} : ErrorComponentType) => {

    useEffect(() => {
        console.error('Dashboard error:', error.message);
    }, [error]);


    return (
        <div className="p-6 flex flex-col items-center justify-center h-full min-h-[400px] gap-4">
            <h2 className="text-xl font-semibold text-red-500">
                Failed to load data
            </h2>
            <p className="text-gray-500 text-sm">
                Something went wrong while fetching the soldiers list.
                {error.message}
            </p>
            <button
                onClick={() => reset()}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
                Try again
            </button>
        </div>
    );
};

export default ErrorComponent;