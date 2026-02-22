"use client";
import useSidebar  from "../../../shared/hooks/useSidebar";
import Sidebar from "./Sidebar";
import { usePathname } from "next/navigation";

interface PropsComponent{
  children: React.ReactNode;
}

export default function SidebarLayout({ children }: PropsComponent) {
  const { open, openSidebar, closeSidebar } = useSidebar();
  const pathname = usePathname();

  console.log(pathname)

  const title = pathname.split('/').pop() || 'Home'

  return (
    <div className="flex min-h-screen w-full">
      <Sidebar open={open} onClose={closeSidebar} />

      <div className="flex-1 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 border-b px-4 py-2">
          <button
            onClick={openSidebar}
            className="md:hidden"
            aria-label="Open menu"
          >
            ☰
          </button>
          <h1 className="text-xl font-semibold capitalize">{title}</h1>
        </div>
        <main className="mx-auto px-4 sm:px-6 lg:px-8">{children}</main>
      </div>
    </div>
  );
}