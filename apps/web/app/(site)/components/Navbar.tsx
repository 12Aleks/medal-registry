"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const Navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
    { name: "Dashboard", href: "/dashboard" }
];

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-background-blue text-white mb-10">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-start gap-x-3">
                        <Image
                            width={50}
                            height={50} 
                            src="/logo.png"
                            alt="Logo" />
                    <div className="flex flex-col items-start tracking-wider">
                        <h1 className="text-xl font-bold">British Military</h1>
                        <p className="text-sm">Medal Registry</p>
                    </div>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4 [&_a]:text-sm [&_a]:font-medium 
                        [&_a]:tracking-wider [&_a]:hover:bg-blue-900/50 [&_a]:px-3 [&_a]:py-2 [&_a]:rounded-md
                        ">
                          {
                            Navigation?.map((item) => <Link key={item.name} href={item.href}> {item.name}</Link>)
                          }
                        </div>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            type="button"
                            className="cursor-pointer bg-background-blue/30 inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-blue-800 focus:outline-none"
                            aria-controls="mobile-menu"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? (
                                <svg
                                    className="h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    className="h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16m-7 6h7"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden" id="mobile-menu">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 [&_a]:font-medium [&_a]:text-base 
                    [&_a]:tracking-wide [&_a]:hover:bg-blue-700 [&_a]:block [&_a]:px-3 [&_a]:py-2 [&_a]:rounded-md">
                       {
                            Navigation?.map((item) => <Link key={item.name} href={item.href}> {item.name}</Link>)
                          }
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
