import Link from "next/link";

export default function Hero() {
    return (
        <section className="relative w-full h-screen text-white overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/hero-bg.jpg')" }}
            >
                <div className="absolute inset-0 bg-blue-900/40 mix-blend-multiply" />
            </div>

            {/* Content Container */}
            <div className="relative z-10 container mx-auto px-6 py-8 h-full flex flex-col justify-between">

                {/* Hero Content */}
                <div className="flex flex-col justify-center items-start h-full mt-20">
                    <div className="max-w-4xl">
                        <h1 className="text-4xl md:text-6xl font-bold leading-tight drop-shadow-lg font-rubik">
                            Last-Mile Pickup & Delivery Services Built on <span className="text-yellow-400">Safety</span>, <span className="text-yellow-400">Compliance</span> & <span className="text-yellow-400">Reliability</span>
                        </h1>
                    </div>
                </div>

                {/* Bottom Call to Action or Scroll Indicator could go here */}
                <div className="pb-8">
                    {/* Optional: Add scroll indicator or secondary CTA */}
                </div>
            </div>
        </section>
    );
}
