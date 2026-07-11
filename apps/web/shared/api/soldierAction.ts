"use server"
import { api } from "@/shared/api/initialAxios";
import { ActionCatchState, SoldierType } from "@medal-registry/types";
import {slugify} from "@/shared/utils/slugify";
import {revalidatePath} from "next/cache";


export async function createSoldier(data: SoldierType): Promise<ActionCatchState>{
    try{
     const slugData = `${data?.name ?? ''} ${data?.surname ?? ''} ${data?.serviceNumber ?? ''}`.trim();
     await api.post('/soldiers', {
         ...data,
         slug: slugify(slugData),
     })
     revalidatePath("/dashboard/conflicts");
     return { success: true, message: 'Solder successfully created!' };
    }catch (error){
        console.error("Error creating solder:", error);
        return { success: false, message: error instanceof Error ? error.message : 'An unexpected error occurred' };
    }
}

export async function getAllSoldiers(): Promise<SoldierType[] | ActionCatchState>{
    try{
        const { data } = await api.get<SoldierType[]>('/soldiers/all');
        return data;
    }catch (error){
        console.error("Error creating solder:", error);
        return { success: false, message: error instanceof Error ? error.message : 'An unexpected error occurred' };
    }
}

export async function getOneSoldier(slug: string):Promise<SoldierType | ActionCatchState>{
    try{
        const {data} = await api.get<SoldierType>(`/soldiers/${slug}`);
        return data;
    }catch (error){
        console.error("Error getting medal:", error);
        return { success: false, message: error instanceof Error ? error.message : 'An unexpected error occurred' };
    }
}


