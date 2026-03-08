"use client";
import Image  from 'next/image';
import Link from "next/link";

const Logo = () => (
    <Link href="/" className="flex items-start gap-x-3 cursor-pointer">
        <Image width={40} height={40} src="/logo.png" alt="Logo" className="object-contain" />
        <div className="flex flex-col items-start leading-none">
            <h1 className="text-lg font-bold uppercase tracking-wider">British Military</h1>
            <span className="text-[10px] opacity-80 tracking-wider">Medal Registry</span>
        </div>
    </Link>
);

export default Logo;