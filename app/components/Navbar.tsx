"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

interface NavbarProps {
    transparent?: boolean;
}

export default function Navbar({ transparent = false }: NavbarProps) {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Helper function to get link classes
    const getLinkClass = (path: string) => {
        const isActive = pathname === path;
        return `hover:text-yellow-400 transition-colors uppercase ${isActive ? "text-yellow-400 font-bold" : ""
            }`;
    };

    // Helper function to get mobile link classes
    const getMobileLinkClass = (path: string) => {
        const isActive = pathname === path;
        return `block py-3 px-6 hover:bg-blue-800 hover:text-yellow-400 transition-all uppercase ${isActive ? "text-yellow-400 font-bold bg-blue-800" : "text-white"
            }`;
    };

    // Close menu when a link is clicked
    const handleLinkClick = () => {
        setIsMenuOpen(false);
    };

    // Lock body scroll when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        // Cleanup on unmount
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMenuOpen]);

    return (
        <>
            <header
                className={`fixed top-0 left-0 w-full z-[80] flex flex-row justify-between items-center px-6 py-6 md:py-8 transition-colors ${transparent
                    ? "bg-gradient-to-b from-blue-900/50 to-transparent"
                    : "bg-blue-900 shadow-md"
                    }`}
            >
                {/* Logo Text */}
                <div className="text-2xl md:text-4xl italic tracking-wide text-white pr-12 md:pr-0">
                    <Link href="/">
                        <span className="font-black font-rubik md:hidden" style={{ WebkitTextStroke: "2px white" }}>GAP</span>
                        <span className="font-black font-rubik hidden md:inline" style={{ WebkitTextStroke: "2.5px white" }}>GAP</span>
                        {" "}<span className="font-bold font-rubik">Transportation Services Inc.</span>
                    </Link>
                </div>

                {/* Desktop Navigation - Hidden on Mobile */}
                <nav className="hidden md:block">
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

                {/* Hamburger Button - Visible only on Mobile */}
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="md:hidden flex flex-col justify-center items-center w-10 h-10 space-y-1.5 z-[70] relative"
                    aria-label="Toggle menu"
                >
                    <span
                        className={`block w-7 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-2" : ""
                            }`}
                    ></span>
                    <span
                        className={`block w-7 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? "opacity-0" : ""
                            }`}
                    ></span>
                    <span
                        className={`block w-7 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""
                            }`}
                    ></span>
                </button>
            </header>

            {/* Mobile Menu Overlay - Visible only on Mobile */}
            <div
                className={`md:hidden fixed inset-0 z-[60] transition-opacity duration-300 ${isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                    }`}
            >
                {/* Backdrop */}
                <div
                    className="absolute inset-0 bg-black/50"
                    onClick={() => setIsMenuOpen(false)}
                ></div>

                {/* Menu Drawer */}
                <div
                    className={`absolute top-0 right-0 h-full w-80 bg-blue-900 shadow-2xl transform transition-transform duration-300 ease-in-out ${isMenuOpen ? "translate-x-0" : "translate-x-full"
                        }`}
                >
                    <nav className="pt-24 pb-8 overflow-y-auto h-full">
                        {/* Main Navigation Links */}
                        <ul className="border-b border-blue-700 pb-4 mb-4">
                            <li>
                                <Link
                                    href="/about"
                                    className={getMobileLinkClass("/about")}
                                    onClick={handleLinkClick}
                                >
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/careers"
                                    className={getMobileLinkClass("/careers")}
                                    onClick={handleLinkClick}
                                >
                                    Careers
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/safety-resources"
                                    className={getMobileLinkClass("/safety-resources")}
                                    onClick={handleLinkClick}
                                >
                                    Safety Resources
                                </Link>
                            </li>
                        </ul>

                        {/* Operating Pillars Section */}
                        <div className="px-6 mb-4">
                            <h3 className="text-xl font-rubik font-bold text-yellow-400 mb-1">
                                Operating Pillars
                            </h3>
                            <p className="text-sm font-rubik text-yellow-500/90 mb-4">
                                Core Operating Principles
                            </p>
                        </div>

                        <ul>
                            <li>
                                <Link
                                    href="/safety"
                                    className={getMobileLinkClass("/safety")}
                                    onClick={handleLinkClick}
                                >
                                    Safety
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/compliance"
                                    className={getMobileLinkClass("/compliance")}
                                    onClick={handleLinkClick}
                                >
                                    Compliance
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/service"
                                    className={getMobileLinkClass("/service")}
                                    onClick={handleLinkClick}
                                >
                                    Service
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/profitability-sustainability"
                                    className={getMobileLinkClass("/profitability-sustainability")}
                                    onClick={handleLinkClick}
                                >
                                    Profitability &amp; Sustainability
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    );
}
