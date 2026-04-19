"use server"
import {ConflictType} from "@medal-registry/types";
import {createApi} from "@/shared/api/initialAxios";


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