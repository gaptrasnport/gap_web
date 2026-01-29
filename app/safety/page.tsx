import Navbar from "../components/Navbar";

export default function SafetyPage() {
    return (
        <main className="min-h-screen bg-white">
            {/* Solid Blue Header for Subpage */}
            <Navbar transparent={false} />

            {/* Main Content */}
            <div className="pt-32 pb-20 px-6 max-w-4xl mx-auto text-gray-800">

                {/* Title */}
                <div className="mb-8 mt-8 flex items-baseline gap-3">
                    <h1 className="font-holiday text-6xl text-yellow-500">Safety</h1>
                    <span className="text-3xl text-yellow-400 italic font-light font-rubik">Risk Prevention</span>
                </div>

                {/* Subheader */}
                <h2 className="text-2xl font-bold text-gray-600 mb-8 font-rubik">
                    Risk prevention through systems, technology, and training
                </h2>

                {/* Intro */}
                <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                    <p>
                        Safety is the foundation of our operation and the first layer of risk mitigation. Our safety program integrates <span className="font-bold text-gray-800">qualified personnel, preventive systems, and technology</span> to reduce incidents and protect all stakeholders:
                    </p>

                    <ul className="list-disc pl-6 space-y-2 marker:text-gray-400">
                        <li>
                            Driver qualification standards including licensing, certifications, training, and driving history review
                        </li>
                        <li>
                            Continuous monitoring of driver behavior using in-vehicle safety technology (VEDR / camera systems)
                        </li>
                        <li>
                            Use of advanced vehicle safety technologies including:
                            <ul className="list-none pl-4 mt-1 space-y-1 text-gray-600">
                                <li>- 360-degree camera systems</li>
                                <li>- Sonar and backup warning alarms</li>
                                <li>- Collision avoidance and proximity alert systems</li>
                                <li>- All additional technology required by the contracting service provider</li>
                            </ul>
                        </li>
                    </ul>

                    <p>
                        Preventive maintenance programs are enforced with documented inspections and repairs to ensure vehicle safety and roadworthiness.
                    </p>

                    <p>
                        We also address <span className="font-bold text-gray-800">human factors and driver well-being</span>, including:
                    </p>

                    <ul className="list-disc pl-6 space-y-2 marker:text-gray-400">
                        <li>
                            Fitness-for-duty and fatigue awareness
                        </li>
                    </ul>
                </div>

            </div>
        </main>
    );
}
