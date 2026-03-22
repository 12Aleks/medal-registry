
interface MedalsLayoutProps {
  children: React.ReactNode
  modal: React.ReactNode
}

export default function MedalsLayout({ children, modal }: MedalsLayoutProps) {
  return (
    <div className="relative w-full h-full">
      {children}
      {modal}
    </div>
  );
}