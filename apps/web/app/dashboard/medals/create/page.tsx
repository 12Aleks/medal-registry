import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { CreateMedalForm } from "../create-medal-form"

export default function CreateMedalPage() {

  return (
    <div className="flex justify-center py-10">
      <Card className="w-full max-w-lg">
        <CardHeader><CardTitle>Добавление медали</CardTitle></CardHeader>
        <CardContent>
          <CreateMedalForm  />
        </CardContent>
      </Card>
    </div>
  )
}