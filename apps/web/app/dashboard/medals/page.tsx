import Link from "next/link"
import { Button } from "@/components/ui/button"
import {MedalType} from "@medal-registry/types";
import {getMedals} from "@/shared/api/medalActions";
import {MedalsTable} from "@/app/dashboard/medals/ medals-table";

export const dynamic = "force-dynamic";

export default async function MedalsListPage() {
    const medalsList:MedalType[] = await getMedals();

    return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Medal list</h1>
        <Button asChild>
          <Link href="/dashboard/medals/create">Add new medal</Link>
        </Button>
      </div>

      <MedalsTable medals={medalsList} />
    </div>
  )
}