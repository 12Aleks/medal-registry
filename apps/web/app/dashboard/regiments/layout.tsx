
interface RegimentsLayoutType {
  children: React.ReactNode
  modal: React.ReactNode
}

export default function RegimentsLayout({ children, modal }: RegimentsLayoutType) {
  return (
    <div className="relative w-full h-full">
      {children}
      {modal}
    </div>
  );
}