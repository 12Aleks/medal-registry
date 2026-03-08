"use client"

import { useRouter } from "next/navigation"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { CreateMedalForm } from "../../create-medal-form"


export default function CreateMedalModal() {
  const router = useRouter()

  return (
    <Dialog open onOpenChange={(open) => !open && router.back()}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>New medal</DialogTitle>
        </DialogHeader>
        <CreateMedalForm onSuccess={() => router.back()} />
      </DialogContent>
    </Dialog>
  )
}