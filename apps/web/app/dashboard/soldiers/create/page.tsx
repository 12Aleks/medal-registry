import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import {CreateSoldierForm} from "@/app/dashboard/soldiers/create-soldier-form";

export default function CreateSolderPage() {

  return (
    <div className="flex justify-center py-10">
      <Card className="w-full max-w-lg">
        <CardHeader><CardTitle>Add soldier</CardTitle></CardHeader>
        <CardContent>
          <CreateSoldierForm  />
        </CardContent>
      </Card>
    </div>
  )
}