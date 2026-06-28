"use server"
import {ActionCatchState, ConflictType, ErrorObjectType} from "@medal-registry/types";
import {createApi} from "@/shared/api/initialAxios";
import {slugify} from "@/shared/utils/slugify";
import {revalidatePath} from "next/cache";

export async function createConflict(data: ConflictType): Promise<ActionCatchState> {
    try {
        const api = createApi();
        await api.post<ConflictType>("/conflicts", {
            ...data,
            slug: slugify(data.name),
        });
        revalidatePath("/dashboard/conflicts");
        return { success: true, message: "Conflicts created successfully." };
    }catch(error){
        console.error("Error creating conflict:", error);
        return { success: false, message: error instanceof Error ? error.message : 'An unexpected error occurred' };
    }
}

export async function getConflicts(): Promise<ConflictType[] | ActionCatchState> {
    try{
        const api = createApi();
        const {data} = await api.get<ConflictType[]>("/conflicts/all");
        return data
    }catch(error){
        console.error("Error getting conflicts:", error);
        return { success: false, message: error instanceof Error ? error.message : 'An unexpected error occurred' };
    }
}

export async function getOneConflict(slug: string): Promise<ConflictType | ActionCatchState>{
    try{
        const api = createApi();
        const {data} = await api.get(`/conflicts/${slug}`);
        return data
    }catch(error){
        console.error("Error getting conflict:", error);
        return { success: false, message: error instanceof Error ? error.message : 'An unexpected error occurred' };
    }
}

export async  function deleteConflict(slug: string):Promise< ActionCatchState | unknown> {
    try{
        const api = createApi();
        const data = await api.delete(`/conflicts/${slug}`);
        revalidatePath("/dashboard/conflicts");
        return data
    }catch (error){
        console.error("Error getting conflict:", error);
        return { success: false, message: error instanceof Error ? error.message : 'An unexpected error occurred' };
    }
}

