import {z} from "zod";


export const ConflictSchema = z.object({
    id: z.string().optional(),
    name: z.string(),
    description: z.string(),
    startYear: z.number().int().optional(),
    endYear: z.number().int().optional(),
    createdAt: z.number().optional(),
    updatedAt: z.number().optional(),
})

