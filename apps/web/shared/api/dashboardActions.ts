import {api} from "@/shared/api/initialAxios";
import {ActionCatchState, DashboardType} from "@medal-registry/types";


export const getDashboardData = async (): Promise<DashboardType | ActionCatchState> => {
    try{
        const { data } = await api.get('/soldiers/dashboard/status');
        return data;
    }catch(error){
        console.error("Error getting medal:", error);
        return { success: false, message: error instanceof Error ? error.message : 'An unexpected error occurred' };
    }
}