import ModalDialog from "@/app/components/modal/ModalDialog";
import {CreateMedalForm} from "@/app/dashboard/medals/create-medal-form";


export default function CreateMedalModal() {

  return (
    <ModalDialog title={'Create Medal'} >
      <CreateMedalForm  />
    </ModalDialog>
  )
}