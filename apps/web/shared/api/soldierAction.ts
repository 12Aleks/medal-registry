"use server"

import {createApi} from "@/shared/api/initialAxios";
import {SoldierType} from "@medal-registry/types";

export async function getAllSoldiers(){
    try{
        const api = createApi();
        const { data } = await api.get<SoldierType[]>('/soldiers/all');
        return data;
    }catch (error){
        console.error("Error creating medal:", error);
        return { success: false, message: error instanceof Error ? error.message : 'An unexpected error occurred' };
    }
}