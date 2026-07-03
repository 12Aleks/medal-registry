import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { CreateRegimentForm } from "../create-regiment-form"

export default function CreateRegimentPage() {

  return (
    <div className="flex justify-center py-10">
      <Card className="w-full max-w-lg">
        <CardHeader><CardTitle>Add regiment</CardTitle></CardHeader>
        <CardContent>
          <CreateRegimentForm  />
        </CardContent>
      </Card>
    </div>
  )
}