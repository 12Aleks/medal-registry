"use client";


import useSidebar  from "../shared/hooks/useSidebar";
import Sidebar from "./Sidebar";

interface PropsComponent{
  children: React.ReactNode;
}

export default function SidebarLayout({ children }: PropsComponent) {
  const { open, openSidebar, closeSidebar } = useSidebar();

  return (
    <div className="flex min-h-screen">
      <Sidebar open={open} onClose={closeSidebar} />

      <div className="flex-1 md:ml-64">
        <header className="flex items-center gap-3 border-b p-4">
          <button
            onClick={openSidebar}
            className="md:hidden"
            aria-label="Open menu"
          >
            ☰
          </button>
          <h1 className="text-xl font-semibold">Page</h1>
        </header>
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}