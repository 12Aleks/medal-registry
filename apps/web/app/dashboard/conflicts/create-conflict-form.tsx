import React from 'react';
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Button} from "@/components/ui/button";
import {ConflictSchema} from "@/shared/lib/schema/conflict";
import {useForm} from "react-hook-form";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import {ConflictType} from "@medal-registry/types";
import {Input} from "@/components/ui/input";

type ConflictFormValues = z.infer<typeof ConflictSchema>

const CreateConflictForm = () => {
    const form = useForm<ConflictFormValues>({
        resolver: zodResolver(ConflictSchema),
        defaultValues: {
            name: "",
            description: "",
            startYear: 0,
            endYear: 0,
        }
    });

    const onSubmit = (conflict: Omit<ConflictType, "id" | "createdAt" | 'updatedAt' | 'slug'> ) => {
       console.log(conflict);
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField <ConflictFormValues, "name">
                control={form.control}
                name="name"
                render={({field}) => (
                    <FormItem>
                        <FormLabel>Conflict name</FormLabel>
                        <FormControl><Input placeholder="Conflict..." {...field} /></FormControl>
                        <FormMessage/>
                    </FormItem>
                )}
                />
                <FormField <ConflictFormValues, "description">
                    control={form.control}
                    name="description"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Description</FormLabel>
                            <FormControl><Input placeholder="Description..." {...field} /></FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                />
                <div className="grid grid-cols-2 gap-4">
                <FormField <ConflictFormValues, "startYear">
                    control={form.control}
                    name="startYear"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Start year</FormLabel>
                            <FormControl><Input type="number" placeholder="Start year..." {...field} /></FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                />
                    <FormField <ConflictFormValues, "endYear">
                        control={form.control}
                        name="endYear"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>End year</FormLabel>
                                <FormControl><Input type="number" placeholder="End year..." {...field} /></FormControl>
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
    );
};

export default CreateConflictForm;