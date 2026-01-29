import Link from "next/link";

interface NavbarProps {
    transparent?: boolean;
}

export default function Navbar({ transparent = false }: NavbarProps) {
    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 flex flex-col md:flex-row justify-between items-center px-6 py-6 md:py-8 transition-colors ${transparent
                ? "bg-gradient-to-b from-blue-900/50 to-transparent"
                : "bg-blue-900 shadow-md"
                }`}
        >
            {/* Logo Text */}
            <div className="text-2xl md:text-3xl italic tracking-wide mb-4 md:mb-0 text-white">
                <Link href="/">
                    <span className="font-bold font-rubik">GAP</span> <span className="font-rubik font-normal">Transportation Services Inc.</span>
                </Link>
            </div>

            {/* Navigation */}
            <nav>
                <ul className="flex space-x-8 text-sm md:text-base font-medium tracking-wider text-white">
                    <li>
                        <Link href="/about" className="hover:text-yellow-400 transition-colors uppercase">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link href="/careers" className="hover:text-yellow-400 transition-colors uppercase">
                            Careers
                        </Link>
                    </li>
                    <li>
                        <Link href="/safety-resources" className="hover:text-yellow-400 transition-colors uppercase">
                            Safety Resources
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
