"use client";
import Link from "next/link";
import Image from "next/image";
import { useMemo, useState } from "react";

interface NavItem {
    name: string;
    href: string;
    protected: boolean; 
    hideIfAuth?: boolean; 
}

const NAVIGATION_CONFIG: NavItem[] = [
    { name: "Home", href: "/", protected: false },
    { name: "About", href: "/about", protected: false },
    { name: "Services", href: "/services", protected: false },
    { name: "Contact", href: "/contact", protected: false },
    { name: "Dashboard", href: "/dashboard", protected: true },
    { name: "Register", href: "/register", protected: false, hideIfAuth: true },
    { name: "Login", href: "/login", protected: false, hideIfAuth: true },
];

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);


    /*change to Auth hook  */
    const [isLoggedIn, setIsLoggedIn] = useState(true)

    const visibleNavigation = useMemo(() => {
        return NAVIGATION_CONFIG.filter(item => {
            if (item.protected && !isLoggedIn) return false;
            if (item.hideIfAuth && isLoggedIn) return false;
            return true;
        });
    }, [isLoggedIn]);

    return (
        <nav className="bg-background-blue text-white mb-10 shadow-lg">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    
                    {/* Brand Logo Section */}
                    <Logo />

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-4">
                        <div className="flex items-baseline space-x-4 [&_a]:nav-link">
                            {visibleNavigation.map((item) => (
                                <Link key={item.name} href={item.href} className="
                                text-sm font-medium hover:bg-blue-900/50 px-3 py-2 
                                rounded-sm transition-all tracking-wider duration-300 border border-transparent hover:border-white/20">
                                    {item.name}
                                </Link>
                            ))}
                        </div>

                      
                        <div className="ml-4 border-l border-white/20 pl-4">
                            {isLoggedIn ? (
                                <button 
                                    onClick={() => setIsLoggedIn(false)}
                                    className="text-sm font-medium px-4 py-2 
                                    border border-white/30 cursor-pointer
                                    bg-blue-900/70 hover:bg-blue-950 rounded-sm transition-colors duration-300 tracking-wider"
                                >
                                    Logout
                                </button>
                            ) : (
                                <span className="text-xs text-white/50 italic tracking-wide">Guest Mode</span>
                            )}
                        </div>
                    </div>

                    {/* Mobile Button */}
                    <MobileMenuButton isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
                </div>
            </div>

            {/* Mobile Navigation Panel */}
            {isOpen && (
                <div className="md:hidden bg-blue-900/95 backdrop-blur-sm">
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        {visibleNavigation.map((item) => (
                            <Link 
                                key={item.name} 
                                href={item.href}
                                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700"
                                onClick={() => setIsOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}
                        {isLoggedIn && (
                            <button 
                                onClick={() => { setIsLoggedIn(false); setIsOpen(false); }}
                                className="w-full text-left px-3 py-2 text-red-300 font-medium"
                            >
                                Logout
                            </button>
                        )}
                    </div>
                </div>
            )}
        </nav>
    );
};

// Вспомогательные компоненты (для чистоты кода)
const Logo = () => (
    <div className="flex items-start gap-x-3 cursor-pointer">
        <Image width={40} height={40} src="/logo.png" alt="Logo" className="object-contain" />
        <div className="flex flex-col items-start leading-none">
            <h1 className="text-lg font-bold uppercase tracking-wider">British Military</h1>
            <span className="text-[10px] opacity-80 tracking-wider">Medal Registry</span>
        </div>
    </div>
);

const MobileMenuButton = ({ isOpen, onClick }: { isOpen: boolean, onClick: () => void }) => (
    <div className="-mr-2 flex md:hidden">
        <button onClick={onClick} className="p-2 rounded-md hover:bg-blue-800 transition-colors">
            {isOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
    </div>
);

// Иконки выносятся отдельно или берутся из библиотек (lucide-react, и т.д.)
const MenuIcon = () => (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
    </svg>
);

const CloseIcon = () => (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
);

export default Navbar
