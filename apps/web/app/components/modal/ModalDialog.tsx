"use client"
import {Dialog, DialogContent, DialogHeader, DialogTitle} from "@/components/ui/dialog";
import {useRouter} from "next/navigation";

type CustomModalProps = {
    size?: string,
    title : string,
    children?: React.ReactNode,
}

const ModalDialog = ({size = '425', title, children} : CustomModalProps) => {
    const router = useRouter();
    return (
        <Dialog open onOpenChange={(open) => !open && router.back()}>
            <DialogContent className={`sm:max-w-[425px]`}>
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                </DialogHeader>
                {children}
            </DialogContent>
        </Dialog>
    );
};

export default ModalDialog;