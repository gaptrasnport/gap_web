import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="relative w-full min-h-screen flex flex-col justify-center text-white font-sans text-sm md:text-base">
            {/* Background Image */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/footer-bg.jpg')" }}
            >
                <div className="absolute inset-0 bg-blue-900/95 mix-blend-multiply" />
            </div>

            <div className="relative z-10 container mx-auto px-6 py-16">

                {/* Top Section: Logo & Top Nav */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16">
                    <div className="text-2xl md:text-3xl italic tracking-wide mb-8 md:mb-0">
                        <span className="font-bold font-rubik">GAP</span> <span className="font-rubik font-normal">Transportation Services Inc.</span>
                    </div>

                    <nav className="flex space-x-8 text-sm font-medium tracking-wider uppercase">
                        <Link href="#" className="hover:text-yellow-400 transition-colors">About</Link>
                        <Link href="#" className="hover:text-yellow-400 transition-colors">Careers</Link>
                        <Link href="#" className="hover:text-yellow-400 transition-colors">Safety Resources</Link>
                    </nav>
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">

                    {/* Column 1: Navigation Repeated (or Context specific) */}
                    <div className="flex flex-col space-y-3 font-rubik font-bold">
                        <Link href="#" className="hover:text-gray-300 transition-colors">About</Link>
                        <Link href="#" className="hover:text-gray-300 transition-colors">Careers</Link>
                        <Link href="#" className="hover:text-gray-300 transition-colors">Safety Resources</Link>
                    </div>

                    {/* Column 2: Pillars Links */}
                    <div className="flex flex-col space-y-3 font-rubik font-bold">
                        <Link href="#" className="hover:text-gray-300 transition-colors">Safety</Link>
                        <Link href="#" className="hover:text-gray-300 transition-colors">Compliance</Link>
                        <Link href="#" className="hover:text-gray-300 transition-colors">Service</Link>
                        <Link href="#" className="hover:text-gray-300 transition-colors">Profitability & Sustainability</Link>
                    </div>

                    {/* Column 3: Contact & Socials */}
                    <div className="flex flex-col space-y-4 font-rubik">
                        <div className="font-bold">
                            <p className="mb-1">+1 (954) 591-7935</p>
                            <p>gaptransportation@hotmail.com</p>
                        </div>

                        {/* Social Icons */}
                        <div className="flex space-x-4 mt-2">
                            {/* Facebook */}
                            <Link href="#" className="hover:text-yellow-400 transition-colors">
                                <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                                </svg>
                            </Link>
                            {/* Instagram */}
                            <Link href="#" className="hover:text-yellow-400 transition-colors">
                                <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                                </svg>
                            </Link>
                            {/* Whatsapp */}
                            <Link href="#" className="hover:text-yellow-400 transition-colors">
                                <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                                    <path d="M.057 24l1.687-6.163c-3.104-5.378-4.414-9.22-4.414-9.22A11.96 11.96 0 0112 0c6.627 0 12 5.373 12 12s-5.373 12-12 12c-3.179 0-6.165-1.243-8.397-3.292L.057 24zM12 2.181a9.818 9.818 0 00-9.823 9.818c0 1.95.539 3.774 1.472 5.352l-1.042 3.804 3.906-1.022a9.782 9.782 0 005.487 1.685 9.818 9.818 0 009.823-9.819 9.818 9.818 0 00-9.823-9.818zm5.548 13.568c-.23.633-1.346 1.156-1.844 1.206-.479.049-1.096.22-3.832-.865-3.328-1.309-5.462-4.733-5.63-4.962-.163-.229-1.346-1.79-1.346-3.414 0-1.625.845-2.427 1.144-2.759.299-.333.666-.415.89-.415.223 0 .445.006.634.006.208 0 .487-.076.757.575.281.674.954 2.333 1.037 2.502.083.17.139.367.026.592-.113.226-.17.367-.333.564-.171.208-.358.463-.51.62-.164.17-.335.353-.146.685.188.333.834 1.374 1.795 2.23 1.238 1.1 2.28 1.442 2.603 1.602.323.159.51.137.7-.08.192-.218.825-.96.953-1.29.13-.333.456-.282.766-.168.32.113 1.996.94 2.338 1.11.342.17.57.253.655.394.084.141.084.819-.146 1.452z" />
                                </svg>
                            </Link>
                            {/* YouTube */}
                            <Link href="#" className="hover:text-yellow-400 transition-colors">
                                <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
