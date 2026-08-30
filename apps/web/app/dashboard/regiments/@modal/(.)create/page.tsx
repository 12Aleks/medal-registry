'use client'

import ModalDialog from "@/app/components/modal/ModalDialog";
import {CreateRegimentForm} from "@/app/dashboard/regiments/create-regiment-form";
import {useState} from "react";
import {useRouter} from "next/navigation";
import {PATHS} from "@/shared/config/paths";

export default function CreateRegimentModal() {
    const [isOpen, setIsOpen] = useState(true);
    const router = useRouter();

    const handleClose = () => {
        setIsOpen(false);
        router.push(PATHS.dashboard.regiments.list);
    };

  return (
    <ModalDialog
        title={'Create Regiment'}
        isOpen={isOpen}
        onClose={handleClose}
    >
      <CreateRegimentForm  onSuccess={handleClose}/>
    </ModalDialog>
  )
}
