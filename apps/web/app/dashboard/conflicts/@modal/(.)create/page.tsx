import ModalDialog from "@/app/components/modal/ModalDialog";
import CreateConflictForm from "@/app/dashboard/conflicts/create-conflict-form";


export default function CreateConflictModal() {

  return (
    <ModalDialog title={'Create new conflict'} >
      <CreateConflictForm  />
    </ModalDialog>
  )
}