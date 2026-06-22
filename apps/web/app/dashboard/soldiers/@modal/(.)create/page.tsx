import ModalDialog from "@/app/components/modal/ModalDialog";
import {CreateSoldierForm} from "@/app/dashboard/soldiers/create-soldier-form";



export default function CreateSolderModal() {

  return (
    <ModalDialog title={'Added new soldier'} >
      <CreateSoldierForm />
    </ModalDialog>
  )
}