import {ActionCatchError, SoldierAwardType} from "@medal-registry/types";
import {api} from "@/shared/api/initialAxios";
import {revalidatePath} from "next/cache";


export async function createSoldierAward(data: SoldierAwardType):Promise<SoldierAwardType | ActionCatchError> {
    try {
        await api.post("/soldier-awards", data);
        revalidatePath("/dashboard/soldiers");
        return { success: true,  message: "The soldier card has been created." };
    } catch (error) {
        console.error("Error awarding soldier:", error);
        return { success: false, message: error instanceof Error ? error.message : 'An unexpected error occurred' };
    }
}

export async function getAllSoldierAwards(): Promise<SoldierAwardType[] | ActionCatchError> {
    try{
        return await api.get("/soldier-awards");
    }catch(error){
        console.error("Error awarding getAllSoldierAwards");
        return { success: false, message: error instanceof Error ? error.message : 'An unexpected error occurred' };
    }
}