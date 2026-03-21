"use server"

import {api} from "@/shared/api/initialAxios";
import {MedalType} from "@medal-registry/types";
import {revalidatePath} from "next/cache";


export async function createMedal(data: MedalType):Promise<{ success: boolean }>{
    try{
     await api.post("/medals", data);
     revalidatePath("/dashboard/medals")
     return { success: true }
    }catch(error){
        console.error("Error creating medal:", error);
        return { success: false }
    }
}

export async function getMedals(): Promise<MedalType[]> {
    try{
        const {data} = await api.get<MedalType[]>("/medals/all");
        return data
    }catch(error){
        console.error("Error getting medals:", error);
        throw error;
    }
}