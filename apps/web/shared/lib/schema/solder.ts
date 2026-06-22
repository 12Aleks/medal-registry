import {z} from "zod";


export const solderSchema = z.object({
    name: z.string().min(1, "Please enter solder name").optional(),
    surname: z.string().min(1, "Please enter a solder surname"),
    rank: z.string().optional(),
    serviceNumber: z.string().optional(),
});