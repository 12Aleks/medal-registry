import {z} from "zod";

export const regimentSchema = z.object({
    name: z.string().min(1, "Please enter a title"),
    description: z.string().optional(),
    country: z.string().optional(),
});