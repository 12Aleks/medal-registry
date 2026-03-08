import {z} from "zod";


export const medalSchema = z.object({
  name: z.string().min(1, "Please enter a title"),
  medalType: z.string().min(1, "Please enter a type"),
  description: z.string().optional(),
  establishedYear: z.number().int().optional(),
  discontinuedYear: z.number().int().optional(),
});