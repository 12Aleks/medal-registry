import ModalDialog from "@/app/components/modal/ModalDialog";
import {CreateRegimentForm} from "@/app/dashboard/regiments/create-regiment-form";



export default function CreateRegimentModal() {

  return (
    <ModalDialog title={'Create Medal'} >
      <CreateRegimentForm  />
    </ModalDialog>
  )
}