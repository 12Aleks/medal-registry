import ModalDialog from "@/app/components/modal/ModalDialog";
import { CreateClaspForm } from "@/app/dashboard/medals/[slug]/create-clasp-form";

type PageProps = {
    params: Promise<{ id: string }>;
}

export default async function CreateClaspModal({ params }: PageProps) {
    const { id } = await params;

    return (
        <ModalDialog title="Add Clasp to Medal">
            <CreateClaspForm medalId={id} />
        </ModalDialog>
    );
}