
interface SoldersLayoutProps {
  children: React.ReactNode
  modal: React.ReactNode
}

export default function SolderLayout({ children, modal }: SoldersLayoutProps) {
  return (
    <div className="relative w-full h-full">
      {children}
      {modal}
    </div>
  );
}