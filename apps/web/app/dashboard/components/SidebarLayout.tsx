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



  const title = pathname.split('/').pop() || 'Home'

  return (
    <div className="flex min-h-screen w-full">
      <Sidebar open={open} onClose={closeSidebar} />

      <div className="flex-1 px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center gap-3 border-b px-4 pb-2">
          <button
            onClick={openSidebar}
            className="md:hidden w-[40px] h-[40px] m-1 cursor-pointer
            border rounded-md px-2 text-gray-500 hover:bg-gray-100 
            focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            aria-label="Open menu"
          >
            ☰
          </button>
          <h1 className="text-2xl font-semibold capitalize">{title}</h1>
        </div>
        <main className="mx-auto px-4 py-6 h-full">{children}</main>
      </div>
    </div>
  );
}