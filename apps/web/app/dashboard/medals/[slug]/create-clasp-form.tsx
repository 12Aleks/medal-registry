"use client"

import { useForm, SubmitHandler } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { claspSchema, ClaspFormValues } from "@/shared/lib/schema/clasp";
import { createClasp } from "@/shared/api/claspAction";
import { useRouter } from "next/navigation";

type CreateClaspFormProps = {
    medalId: string;
}

export function CreateClaspForm({ medalId }: CreateClaspFormProps) {
    const router = useRouter();
    const form = useForm<ClaspFormValues>({
        resolver: zodResolver(claspSchema),
        defaultValues: {
            name: "",
            medalId: medalId, // Жестко прописываем ID текущей медали
        },
    })

    const onSubmit: SubmitHandler<ClaspFormValues> = async (values) => {
        const result = await createClasp(values)
        if (result.success) {
            router.back();
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Clasp Name (e.g., Sevastopol)</FormLabel>
                            <FormControl><Input placeholder="Enter clasp name..." {...field} /></FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                />
                <Button type="submit" variant="customBlue" className="w-full cursor-pointer" disabled={form.formState.isSubmitting}>
                    {form.formState.isSubmitting ? "Saving..." : "Add Clasp"}
                </Button>
            </form>
        </Form>
    )
}