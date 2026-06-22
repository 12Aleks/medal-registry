"use client"

import {useForm, SubmitHandler} from "react-hook-form"
import {zodResolver} from "@hookform/resolvers/zod"
import {z} from "zod"
import {Button} from "@/components/ui/button"
import {Input} from "@/components/ui/input"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"

import {SoldierType} from "@medal-registry/types"
import {useRouter} from "next/navigation";
import {solderSchema} from "@/shared/lib/schema/solder";
import {createSoldier} from "@/shared/api/soldierAction";

type SoldierFormValues = z.infer<typeof solderSchema>

export function CreateSoldierForm() {
    const form = useForm<SoldierFormValues>({
        resolver: zodResolver(solderSchema),
        defaultValues: {
            name: "",
            surname: "",
            rank: "",
            serviceNumber: "",
        },
    })

    const router = useRouter();

    const onSuccess = () => router.back();

    const onSubmit: SubmitHandler<SoldierFormValues> = async (values) => {
        console.log("Saving data:", values);

        const result = await createSoldier(values as SoldierType)
        if (result.success) {
            onSuccess()
        } else {
            console.error("Failed to create soldier")
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField<SoldierFormValues, "name">
                    control={form.control}
                    name="name"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl><Input placeholder="Enter soldier name..." {...field} /></FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                />
                <FormField<SoldierFormValues, "surname">
                    control={form.control}
                    name="surname"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Surname</FormLabel>
                            <FormControl><Input placeholder="Enter soldier surname" {...field} /></FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                />
                <FormField<SoldierFormValues, "rank">
                    control={form.control}
                    name="rank"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Soldier rank</FormLabel>
                            <FormControl><Input placeholder="Enter soldier rank" {...field} /></FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                />
                <FormField<SoldierFormValues, "serviceNumber">
                    control={form.control}
                    name="serviceNumber"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Service number</FormLabel>
                            <FormControl><Input placeholder="Enter service number" {...field} /></FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                />
                <Button type="submit" variant="customBlue" className="w-full cursor-pointer" disabled={form.formState.isSubmitting}>
                    {form.formState.isSubmitting ? "Saving..." : "Add new soldier"}
                </Button>
            </form>
        </Form>
    )
}