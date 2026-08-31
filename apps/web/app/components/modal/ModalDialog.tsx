'use client'
import {Dialog, DialogContent, DialogHeader, DialogTitle} from "@/components/ui/dialog";
import {useRouter} from "next/navigation";

type CustomModalProps = {
    size?: string,
    title : string,
    isOpen?: boolean,
    onClose?: () => void,
    children?: React.ReactNode,
}

export default function ModalDialog({ size = '425', title, isOpen, onClose, children }: CustomModalProps) {
    const router = useRouter();


    const isControlled = isOpen !== undefined;
    const currentOpenState = isControlled ? isOpen : true;

    const handleOpenChange = (open: boolean) => {
        if (!open) {
            if (isControlled && onClose) {
                onClose();
            } else {
                router.back();
            }
        }
    };

    return (
        <Dialog open={currentOpenState} onOpenChange={handleOpenChange}>
            <DialogContent className={`sm:max-w-[${size}px]`}>
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                </DialogHeader>
                {children}
            </DialogContent>
        </Dialog>
    );
};