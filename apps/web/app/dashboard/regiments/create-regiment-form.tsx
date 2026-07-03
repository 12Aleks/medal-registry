"use client"

import {useForm, SubmitHandler} from "react-hook-form"
import {zodResolver} from "@hookform/resolvers/zod"
import {z} from "zod"
import {medalSchema} from "@/shared/lib/schema/medal"
import {Button} from "@/components/ui/button"
import {Input} from "@/components/ui/input"
import {Textarea} from "@/components/ui/textarea"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"

import {createMedal} from "@/shared/api/medalActions"
import {MedalType} from "@medal-registry/types"
import {useRouter} from "next/navigation";
import {regimentSchema} from "@/shared/lib/schema/regiment";

type RegimentFormValues = z.infer<typeof regimentSchema>

export function CreateRegimentForm() {
    const form = useForm<RegimentFormValues>({
        resolver: zodResolver(regimentSchema),
        defaultValues: {
            name: "",
            description: "",
            country: "",
        },
    })

    const router = useRouter();

    const onSuccess = () => router.back();

    const onSubmit: SubmitHandler<RegimentFormValues> = async (values) => {
        console.log("Saving data:", values);

        const result = await createMedal(values as MedalType)
        if (result.success) {
            onSuccess()
        } else {
            console.error("Failed to create medal")
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                    <FormField<RegimentFormValues, "name">
                        control={form.control}
                        name="name"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>Medal name</FormLabel>
                                <FormControl><Input placeholder="Regiment name..." {...field} /></FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
                    <FormField<RegimentFormValues, "country">
                        control={form.control}
                        name="country"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>Medal name</FormLabel>
                                <FormControl><Input placeholder="Country..." {...field} /></FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
                </div>
                <FormField<RegimentFormValues, "description">
                    control={form.control}
                    name="description"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Description</FormLabel>
                            <FormControl><Textarea {...field} /></FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                />

                <Button type="submit" variant="customBlue" className="w-full" disabled={form.formState.isSubmitting}>
                    {form.formState.isSubmitting ? "Saving..." : "Add new regiment"}
                </Button>
            </form>
        </Form>
    )
}