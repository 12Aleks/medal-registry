"use server"

import {createApi} from "@/shared/api/initialAxios";
import {ErrorObjectType, MedalPageType, MedalType} from "@medal-registry/types";
import {revalidatePath} from "next/cache";
import {slugify} from "@/shared/utils/slugify";
import {PATHS} from "@/shared/config/paths";



export async function createMedal(data: MedalType):Promise<{ success: boolean }>{
    try{
        const api = createApi();
     await api.post( PATHS.dashboard.medals.main , {
         ...data,
         slug: slugify(data?.name),
         images: data.images || [],
     });
     revalidatePath(PATHS.dashboard.medals.list);
     return { success: true }
    }catch(error){
        console.error("Error creating medal:", error);
        return { success: false }
    }
}

export async function getMedals(): Promise<MedalType[]> {
    try{
        const api = createApi();
        const {data} = await api.get<MedalType[]>("/medals/all");
        return data
    }catch(error){
        console.error("Error getting medals:", error);
        throw error;
    }
}

export async function getOneMedal(slug: string):Promise<MedalType & MedalPageType>{
    try{
        const api = createApi();
        const {data} = await api.get<MedalType & MedalPageType>(`/medals/${slug}`);
        return data;
    }catch (error){
        console.error("Error getting medal:", error);
        throw error;
    }
}

export async function deleteOneMedal(slug: string):Promise<ErrorObjectType | unknown>{
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