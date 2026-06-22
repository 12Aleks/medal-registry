import Link from "next/link";

type SidebarType = {
    open: boolean;
    onClose: () => void;
};

const sidebarMenu = [
    {label: 'Home', link: '/' },
    {label: 'Conflicts list', link: '/dashboard/conflicts' },
    {label: 'Medals list', link: '/dashboard/medals' },
    {label: 'Soldiers list', link: '/dashboard/soldiers' },
    {label: 'Wanted medals', link: '/dashboard/wanted' },
]

export default function Sidebar({open, onClose}: SidebarType) {
    return (
        <>
            <div
                aria-hidden="true"
                onClick={onClose}
                className={`
          fixed inset-0 z-30 bg-background-blue transition-opacity md:hidden
          ${open ? "opacity-100" : "pointer-events-none opacity-0"}
        `}
            />

            {/* Sidebar */}
            <aside
                role="dialog"
                aria-modal="true"
                aria-label="Main navigation"
                className={`
          fixed inset-y-0 left-0 z-40 w-64 bg-background-blue text-white
          transition-transform duration-300 ease-in-out
          ${open ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0 md:static
        `}
            >
                <div className="flex items-center justify-between p-4 border-b border-gray-700">
                    <span className="font-semibold">Dashboard</span>
                    <button
                        onClick={onClose}
                        className="md:hidden cursor-pointer"
                        aria-label="Close menu"
                    >
                        ✕
                    </button>
                </div>

                <nav className="p-4 space-y-1">
                    {
                        sidebarMenu.map((menu) =>
                            <Link href={menu.link} key={menu.link} className="block rounded px-3 py-2 hover:bg-gray-800">
                                {menu.label}
                            </Link>
                        )
                    }
                </nav>
            </aside>
        </>
    );
}
