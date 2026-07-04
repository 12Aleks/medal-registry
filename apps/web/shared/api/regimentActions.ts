"use server"

import { createApi } from "@/shared/api/initialAxios";
import {ActionCatchState, ErrorObjectType, RegimentType} from "@medal-registry/types";
import {revalidatePath} from "next/cache";
import {slugify} from "@/shared/utils/slugify";



export async function createRegimentType(data: RegimentType):Promise<ActionCatchState>{
    try{
     const api = createApi();
     await api.post("/regiments", {
         ...data,
         slug: slugify(data?.name),
         // images: data.images || [],
     });
     return { success: true, message: "Regiment created successfully." }
    }catch(error){
        console.error("Error creating regiment:", error);
        return {
            success: false,
            message: error instanceof Error ? error.message : "An unexpected error occurred",
        }
    }
}

export async function getRegiments(): Promise<RegimentType[]> {
    try{
        const api = createApi();
        const {data} = await api.get<RegimentType[]>("/regiments/all");
        return data
    }catch(error){
        console.error("Error getting regiments:", error);
        throw error;
    }
}

export async function getOneRegiment(slug: string):Promise<RegimentType>{
    try{
        const api = createApi();
        const {data} = await api.get<RegimentType>(`/regiments/${slug}`);
        return data;
    }catch (error){
        console.error("Error getting medal:", error);
        throw error;
    }
}

export async function deleteOneRegiment(slug: string):Promise<ErrorObjectType | unknown>{
    try{
        const api = createApi();
        const {data} = await api.delete(`/regiments/${slug}`);
        revalidatePath("/dashboard/regiments")
        return data;
    }catch (error){
        console.error("Error getting regiment:", error);
        throw error;
    }
}
