"use server"
import { api } from "@/shared/api/initialAxios";
import { revalidatePath } from "next/cache";
import { PATHS } from "@/shared/config/paths";

export async function createClasp(data: { name: string; medalId: string }) {
    try {
        await api.post(`${PATHS.dashboard.clasp.main}`, data);
        revalidatePath(`${PATHS.dashboard.medals.details(data.medalId)}`);
        return { success: true, message: 'Clasp successfully created!' };
    } catch (error) {
        console.error("Error creating clasp:", error);
        return { success: false, message: error instanceof Error ? error.message : 'An unexpected error occurred' };
    }
}