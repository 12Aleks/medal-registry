import {Dialog, DialogContent, DialogHeader, DialogTitle} from "@/components/ui/dialog";

type CustomModalProps = {
    size?: string,
    title : string,
    isOpen: boolean,
    onClose: () => void,
    children?: React.ReactNode,
}

const ModalDialog = ({ size = '425', title, isOpen, onClose, children } : CustomModalProps) => {
    console.log(isOpen);
    return (
        <Dialog open={isOpen} onOpenChange={(open) => { if (!open) onClose(); }}>
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