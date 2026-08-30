'use client'
import ModalDialog from "@/app/components/modal/ModalDialog";
import CreateConflictForm from "@/app/dashboard/conflicts/create-conflict-form";
import {useState} from "react";
import {useRouter} from "next/navigation";
import {PATHS} from "@/shared/config/paths";



export default function CreateConflictModal() {
    const [isOpen, setIsOpen] = useState(true);
    const router = useRouter();

    const handleClose = () => {
        setIsOpen(false);
        router.push(PATHS.dashboard.conflicts.list);
    };


    return (
    <ModalDialog
        title={'Create new conflict'}
        isOpen={isOpen}
        onClose={handleClose}
    >
        <CreateConflictForm  onSuccess={handleClose}/>
    </ModalDialog>
  )
}