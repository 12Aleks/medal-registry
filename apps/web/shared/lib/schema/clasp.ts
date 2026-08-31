import { z } from "zod";

export const claspSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    medalId: z.string().uuid("Invalid medal ID"),
});

export type ClaspFormValues = z.infer<typeof claspSchema>;