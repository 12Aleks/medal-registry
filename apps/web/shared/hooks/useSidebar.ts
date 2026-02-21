"use client";

import { useEffect, useState } from "react";

export default function useSidebar() {
  const [open, setOpen] = useState(false);

  const openSidebar = () => setOpen(true);
  const closeSidebar = () => setOpen(false);
  const toggleSidebar = () => setOpen(v => !v);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeSidebar();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);


  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return { open, openSidebar, closeSidebar, toggleSidebar };
}