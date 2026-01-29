import Navbar from "../components/Navbar";

export default function ProfitabilityPage() {
    return (
        <main className="min-h-screen bg-white">
            {/* Solid Blue Header for Subpage */}
            <Navbar transparent={false} />

            {/* Main Content */}
            <div className="pt-32 pb-20 px-6 max-w-4xl mx-auto text-gray-800">

                {/* Title */}
                <div className="mb-8 mt-8 flex flex-col md:flex-row md:items-baseline gap-2 md:gap-3">
                    <h1 className="font-holiday text-5xl md:text-6xl text-yellow-500">Profitability & Sustainability</h1>
                    <span className="text-2xl md:text-3xl text-yellow-400 italic font-light font-rubik">Sustainable Growth</span>
                </div>

                {/* Subheader */}
                <h2 className="text-2xl font-bold text-gray-600 mb-8 font-rubik">
                    Financial discipline that supports long-term operations
                </h2>

                {/* Intro */}
                <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                    <p>
                        Profitability enables reinvestment in safety, compliance, and service quality. Our financial strategy emphasizes sustainable performance through:
                    </p>

                    <ul className="list-disc pl-6 space-y-2 marker:text-gray-400">
                        <li>
                            Route optimization to reduce non-productive miles and fuel consumption
                        </li>
                        <li>
                            Fleet selection aligned with service density and geographic requirements
                        </li>
                        <li>
                            Preventive maintenance to minimize downtime and high-cost repairs
                        </li>
                        <li>
                            Competitive compensation structures to reduce driver turnover and operational disruptions
                        </li>
                        <li>
                            Data-driven cost controls to protect margins while maintaining service standards
                        </li>
                    </ul>

                    <p className="mt-8">
                        A financially healthy operation supports workforce stability, system investments, and long-term scalability.
                    </p>
                </div>

            </div>
        </main>
    );
}
