"use server"

import { api } from "@/shared/api/initialAxios";
import {ErrorObjectType, RegimentType} from "@medal-registry/types";
import {revalidatePath} from "next/cache";
import {slugify} from "@/shared/utils/slugify";



export async function createRegimentType(data: RegimentType):Promise<{ success: boolean }>{
    try{
     await api.post("/regiments", {
         ...data,
         slug: slugify(data?.name),
         // images: data.images || [],
     });
     revalidatePath("/dashboard/regiments")
     return { success: true }
    }catch(error){
        console.error("Error creating regiment:", error);
        return { success: false }
    }
}

export async function getRegiments(): Promise<RegimentType[]> {
    try{
        const {data} = await api.get<RegimentType[]>("/regiments/all");
        return data
    }catch(error){
        console.error("Error getting regiments:", error);
        throw error;
    }
}

export async function getOneRegiment(slug: string):Promise<RegimentType>{
    try{
        const {data} = await api.get<RegimentType>(`/regiments/${slug}`);
        return data;
    }catch (error){
        console.error("Error getting medal:", error);
        throw error;
    }
}

export async function deleteOneRegiment(slug: string):Promise<ErrorObjectType | unknown>{
    try{
        const {data} = await api.delete(`/regiments/${slug}`);
        revalidatePath("/dashboard/regiments")
        return data;
    }catch (error){
        console.error("Error getting medal:", error);
        throw error;
    }
}