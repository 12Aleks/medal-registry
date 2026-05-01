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

type MedalFormValues = z.infer<typeof medalSchema>

export function CreateMedalForm() {
    const form = useForm<MedalFormValues>({
        resolver: zodResolver(medalSchema),
        defaultValues: {
            name: "",
            medalType: "",
            description: "",
            images: [],
            establishedYear: undefined,
            discontinuedYear: undefined,
        },
    })

    const router = useRouter();

    const onSuccess = () => router.back();

    const onSubmit: SubmitHandler<MedalFormValues> = async (values) => {
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
                <FormField<MedalFormValues, "name">
                    control={form.control}
                    name="name"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Medal name</FormLabel>
                            <FormControl><Input placeholder="Medal..." {...field} /></FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                />
                <FormField<MedalFormValues, "medalType">
                    control={form.control}
                    name="medalType"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Medal type</FormLabel>
                            <FormControl><Input placeholder="Campaign medal" {...field} /></FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                />
                <FormField<MedalFormValues, "description">
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
                <FormField<MedalFormValues, "images">
                    control={form.control}
                    name="images"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Photos</FormLabel>
                            <FormControl>
                                <input
                                    type="file"
                                    multiple
                                    accept="image/*"
                                    onChange={(e) => {
                                        const files = e.target.files
                                        if (files) {
                                            field.onChange(Array.from(files))
                                        }
                                    }}
                                />
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                />
                <div className="grid grid-cols-2 gap-4">
                    <FormField<MedalFormValues, "establishedYear">
                        control={form.control}
                        name="establishedYear"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>Year established</FormLabel>
                                <FormControl><Input type="number" {...field}
                                                    onChange={e => field.onChange(e.target.valueAsNumber)}/></FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
                    <FormField<MedalFormValues, "discontinuedYear">
                        control={form.control}
                        name="discontinuedYear"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>Year abolished</FormLabel>
                                <FormControl><Input type="number" {...field}
                                                    onChange={e => field.onChange(e.target.valueAsNumber)}/></FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
                </div>
                <Button type="submit" variant="customBlue" className="w-full" disabled={form.formState.isSubmitting}>
                    {form.formState.isSubmitting ? "Saving..." : "Add medal"}
                </Button>
            </form>
        </Form>
    )
}