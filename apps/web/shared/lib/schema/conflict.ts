import {z} from "zod";


export const ConflictSchema = z.object({
    id: z.string().optional(),
    name: z.string(),
    description: z.string(),
    startYear: z.number().optional(),
    endYear: z.number().optional(),
    createdAt: z.number().optional(),
    updatedAt: z.number().optional(),
})

