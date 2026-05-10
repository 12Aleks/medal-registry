"use server"
import {ConflictType, ErrorObject} from "@medal-registry/types";
import {createApi} from "@/shared/api/initialAxios";
import {slugify} from "@/shared/utils/slugify";
import {revalidatePath} from "next/cache";

export async function createConflict(data: ConflictType): Promise<{ success: boolean }> {
    try {
        const api = createApi();
        await api.post<ConflictType>("/conflicts", {
            ...data,
            slug: slugify(data.name),
        });
        revalidatePath("/dashboard/conflicts");
        return { success: true }
    }catch(error){
        console.error("Error creating conflict:", error);
        return { success: false }
    }
}

export async function getConflicts(): Promise<ConflictType[]> {
    try{
        const api = createApi();
        const {data} = await api.get<ConflictType[]>("/conflicts/all");
        return data
    }catch(error){
        console.error("Error getting conflicts:", error);
        throw error;
    }
}

export async  function deleteConflict(slug: string):Promise<ErrorObject | unknown> {
    try{
        const api = createApi();
        const data = await api.delete(`/conflicts/${slug}`);
        revalidatePath("/dashboard/conflicts");
        return data
    }catch (error){
        console.error("Error getting conflict:", error);
        throw error;
    }
}

// export async function getConflictById(id: string): Promise<ConflictType> {
//
// }
