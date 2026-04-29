type ConflictLayoutType = {
    children: React.ReactNode
    modal: React.ReactNode
}

export default function ConflictLayout({ children, modal }: ConflictLayoutType) {
    return (
        <div className="relative w-full h-full">
            {children}
            {modal}
        </div>
    );
}