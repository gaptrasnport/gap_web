import Link from "next/link";

export default function Hero() {
    return (
        <section className="relative w-full h-screen min-h-[600px] flex flex-col font-sans text-white overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: "url('/hero-bg.jpg')" }}
            >
                <div className="absolute inset-0 bg-blue-900/80 mix-blend-multiply" />
            </div>

            {/* Content Container */}
            <div className="relative z-10 container mx-auto px-6 py-8 h-full flex flex-col justify-between">

                {/* Header / Nav - Fixed */}
                <header className="fixed top-0 left-0 w-full z-50 flex flex-col md:flex-row justify-between items-center px-6 py-6 md:py-8 bg-gradient-to-b from-blue-900/50 to-transparent">
                    {/* Logo Text */}
                    <div className="text-2xl md:text-3xl italic tracking-wide mb-4 md:mb-0 text-white">
                        <span className="font-bold font-rubik">GAP</span> <span className="font-rubik font-normal">Transportation Services Inc.</span>
                    </div>

                    {/* Navigation */}
                    <nav>
                        <ul className="flex space-x-8 text-sm md:text-base font-medium tracking-wider text-white">
                            <li>
                                <Link href="#" className="hover:text-yellow-400 transition-colors uppercase">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-yellow-400 transition-colors uppercase">
                                    Careers
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-yellow-400 transition-colors uppercase">
                                    Safety Resources
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </header>

                {/* Hero Text */}
                <div className="flex flex-col justify-center flex-grow mt-20 md:mt-0">
                    <div className="max-w-4xl">
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-rubik font-black text-yellow-400 leading-tight mb-4 drop-shadow-lg">
                            Last-Mile Pickup <br />
                            & Delivery Services
                        </h1>
                        <p className="text-xl md:text-3xl lg:text-4xl font-rubik font-light text-white tracking-wide">
                            Built on Safety, <br className="hidden md:block" />
                            Compliance & Reliability
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
