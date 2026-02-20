import React from 'react';


export default function DashboardLayout({
  children, // This will be the page.tsx content
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen overflow-hidden bg-gray-50">
      {/* 1. Static Sidebar */}
      {/* <Sidebar /> */}

      <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
        {/* 2. Persistent Header */}
        {/* <Header /> */}

        {/* 3. Main Content Area */}
        <main className="p-4 md:p-6 2xl:p-10">
          <div className="mx-auto max-w-7xl">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}