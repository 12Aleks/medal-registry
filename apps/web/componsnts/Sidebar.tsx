"use client";

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function Sidebar({ open, onClose }: Props) {
  return (
    <>
      {/* Overlay */}
      <div
        aria-hidden="true"
        onClick={onClose}
        className={`
          fixed inset-0 z-30 bg-black/40 transition-opacity md:hidden
          ${open ? "opacity-100" : "pointer-events-none opacity-0"}
        `}
      />

      {/* Sidebar */}
      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Main navigation"
        className={`
          fixed inset-y-0 left-0 z-40 w-64 bg-gray-900 text-white
          transition-transform duration-300 ease-in-out
          ${open ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0 md:static
        `}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-700">
          <span className="font-semibold">Dashboard</span>
          <button
            onClick={onClose}
            className="md:hidden"
            aria-label="Close menu"
          >
            ✕
          </button>
        </div>

        <nav className="p-4 space-y-1">
          <a href="#" className="block rounded px-3 py-2 hover:bg-gray-800">
            Home
          </a>
          <a href="#" className="block rounded px-3 py-2 hover:bg-gray-800">
            Medals list
          </a>
          <a href="#" className="block rounded px-3 py-2 hover:bg-gray-800">
            Service Records
          </a>
        </nav>
      </aside>
    </>
  );
}
