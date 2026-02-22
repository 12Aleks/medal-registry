
import React from 'react';
import SidebarLayout from './components/SidebarLayout';

interface PageProps{
 children: React.ReactNode
}

export default function DashboardLayout({ children }:  PageProps) {
  return (
    <div className="flex h-screen overflow-hidden bg-gray-50">
       <SidebarLayout>{children}</SidebarLayout>
    </div>
  );
}