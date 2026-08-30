'use client'

import {useState} from "react";
import ModalDialog from "@/app/components/modal/ModalDialog";
import {CreateSoldierForm} from "@/app/dashboard/soldiers/create-soldier-form";
import {useRouter} from "next/navigation";
import {PATHS} from "@/shared/config/paths";

export default function CreateSolderModal() {
    const [isOpen, setIsOpen] = useState(true);
    const router = useRouter();

    const handleClose = () => {
        setIsOpen(false);
        router.push(PATHS.dashboard.soldiers.list);
    };

    return (
        <ModalDialog
            title={'Create Soldier'}
            isOpen={isOpen}
            onClose={handleClose}
        >
            <CreateSoldierForm onSuccess={handleClose} />
        </ModalDialog>
    )
}