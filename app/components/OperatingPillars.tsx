import Image from "next/image";

export default function OperatingPillars() {
    const pillars = [
        {
            title: "Safety",
            subtitle: "Risk Prevention",
            icon: "/pillar-safety.png",
            alt: "Safety Icon",
        },
        {
            title: "Compliance",
            subtitle: "Legal & Regulatory",
            icon: "/pillar-compliance.png",
            alt: "Compliance Icon",
        },
        {
            title: "Service",
            subtitle: "Operational Excellence",
            icon: "/pillar-service.png",
            alt: "Service Icon",
        },
        {
            title: "Profitability & Sustainability",
            subtitle: "Sustainable Growth",
            icon: "/pillar-sustainability.png",
            alt: "Sustainability Icon",
        },
    ];

    return (
        <section className="relative w-full min-h-screen py-20 flex flex-col justify-center items-center font-sans text-white overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/hero-bg.jpg')" }}
            >
                <div className="absolute inset-0 bg-blue-900/90 mix-blend-multiply" />
            </div>

            {/* Content */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-4">
                {/* Header */}
                <div className="mb-12">
                    <h2 className="text-4xl md:text-5xl font-rubik font-bold text-yellow-400 mb-2 drop-shadow-lg">
                        Operating Pillars
                    </h2>
                    <p className="text-2xl md:text-3xl font-rubik font-medium italic text-yellow-500/90">
                        Core Operating Principles
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
                    {pillars.map((pillar, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-start text-left group"
                        >
                            {/* Icon Container - Border removed */}
                            <div className="mb-6 flex items-start justify-start w-48 h-48 md:w-56 md:h-56 transition-transform group-hover:scale-105">
                                <div className="relative w-full h-full">
                                    <Image
                                        src={pillar.icon}
                                        alt={pillar.alt}
                                        fill
                                        className="object-contain object-left"
                                    />
                                </div>
                            </div>

                            <h3 className="text-2xl font-rubik font-black text-white mb-1 leading-tight tracking-wide">
                                {pillar.title}
                            </h3>
                            <p className="text-base font-rubik font-normal text-white/90">
                                {pillar.subtitle}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
