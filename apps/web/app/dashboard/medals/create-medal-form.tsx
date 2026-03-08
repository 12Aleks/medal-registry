"use client"

import { useForm, SubmitHandler } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { medalSchema } from "@/shared/lib/schema/medal"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

type MedalFormValues = z.infer<typeof medalSchema>

export function CreateMedalForm({ onSuccess }: { onSuccess: () => void }) {
  const form = useForm<MedalFormValues>({
    resolver: zodResolver(medalSchema),
    defaultValues: {
      name: "",
      medalType: "",
      description: "",
      establishedYear: undefined as unknown as number,
      discontinuedYear: undefined as unknown as number,
    },
  })

  const onSubmit: SubmitHandler<MedalFormValues> = async (values) => {
    console.log("Saving data:", values)
    await new Promise((r) => setTimeout(r, 1000)) // Имитация API
    onSuccess()
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField<MedalFormValues, "name">
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Название</FormLabel>
              <FormControl><Input placeholder="Орден..." {...field} /></FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField<MedalFormValues, "medalType">
          control={form.control}
          name="medalType"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Тип</FormLabel>
              <FormControl><Input placeholder="Военная" {...field} /></FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField<MedalFormValues, "description">
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Описание</FormLabel>
              <FormControl><Textarea {...field} /></FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="grid grid-cols-2 gap-4">
          <FormField<MedalFormValues, "establishedYear">
            control={form.control}
            name="establishedYear"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Год учреждения</FormLabel>
                <FormControl><Input type="number" {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField<MedalFormValues, "discontinuedYear">
            control={form.control}
            name="discontinuedYear"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Год отмены</FormLabel>
                <FormControl><Input type="number" {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button type="submit" className="w-full" disabled={form.formState.isSubmitting}>
          {form.formState.isSubmitting ? "Сохранение..." : "Добавить"}
        </Button>
      </form>
    </Form>
  )
}