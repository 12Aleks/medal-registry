"use server"

import {createApi} from "@/shared/api/initialAxios";
import {ErrorObject, MedalType} from "@medal-registry/types";
import {revalidatePath} from "next/cache";
import {slugify} from "@/shared/utils/slugify";



export async function createMedal(data: MedalType):Promise<{ success: boolean }>{
    try{
        const api = createApi();
     await api.post("/medals", {
         ...data,
         slug: slugify(data?.name),
         images: data.images || [],
     });
     revalidatePath("/dashboard/medals")
     return { success: true }
    }catch(error){
        console.error("Error creating medal:", error);
        return { success: false }
    }
}

export async function getMedals(): Promise<MedalType[]> {
    try{
        const api = createApi()
        const {data} = await api.get<MedalType[]>("/medals/all");
        return data
    }catch(error){
        console.error("Error getting medals:", error);
        throw error;
    }
}

export async function getOneMedal(slug: string):Promise<MedalType>{
    try{
        const api = createApi();
        const {data} = await api.get<MedalType>(`/medals/${slug}`);
        return data;
    }catch (error){
        console.error("Error getting medal:", error);
        throw error;
    }
}

export async function deleteOneMedal(slug: string):Promise<ErrorObject | unknown>{
    try{
        const api = createApi();
        const {data} = await api.delete(`/medals/${slug}`);
        revalidatePath("/dashboard/medals")
        return data;
    }catch (error){
        console.error("Error getting medal:", error);
        throw error;
    }
}