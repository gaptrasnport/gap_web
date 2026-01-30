"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavbarProps {
    transparent?: boolean;
}

export default function Navbar({ transparent = false }: NavbarProps) {
    const pathname = usePathname();

    // Helper function to get link classes
    const getLinkClass = (path: string) => {
        const isActive = pathname === path;
        return `hover:text-yellow-400 transition-colors uppercase ${isActive ? "text-yellow-400 font-bold" : ""
            }`;
    };

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 flex flex-col md:flex-row justify-between items-center px-6 py-6 md:py-8 transition-colors ${transparent
                ? "bg-gradient-to-b from-blue-900/50 to-transparent"
                : "bg-blue-900 shadow-md"
                }`}
        >
            {/* Logo Text */}
            <div className="text-3xl md:text-4xl italic tracking-wide mb-4 md:mb-0 text-white">
                <Link href="/">
                    <span className="font-black font-rubik" style={{ WebkitTextStroke: "2.5px white" }}>GAP</span> <span className="font-bold font-rubik">Transportation Services Inc.</span>
                </Link>
            </div>

            {/* Navigation */}
            <nav>
                <ul className="flex space-x-8 text-sm md:text-base font-medium tracking-wider text-white">
                    <li>
                        <Link href="/about" className={getLinkClass("/about")}>
                            About
                        </Link>
                    </li>
                    <li>
                        <Link href="/careers" className={getLinkClass("/careers")}>
                            Careers
                        </Link>
                    </li>
                    <li>
                        <Link href="/safety-resources" className={getLinkClass("/safety-resources")}>
                            Safety Resources
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
