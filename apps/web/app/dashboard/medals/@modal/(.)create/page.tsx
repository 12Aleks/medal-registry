'use client'

import {useState} from "react";
import ModalDialog from "@/app/components/modal/ModalDialog";
import {CreateMedalForm} from "@/app/dashboard/medals/create-medal-form";
import {PATHS} from "@/shared/config/paths";
import {useRouter} from "next/navigation";


export default function CreateMedalModal() {
    const [isOpen, setIsOpen] = useState(true);
    const router = useRouter();

    const handleClose = () => {
        setIsOpen(false);
        router.push(PATHS.dashboard.medals.list);
    };

    return (
    <ModalDialog
        title={'Create Medal'}
        isOpen={isOpen}
        onClose={handleClose}
    >
      <CreateMedalForm  onSuccess={handleClose}/>
    </ModalDialog>
  )
}