import Navbar from "../components/Navbar";

export default function CompliancePage() {
    return (
        <main className="min-h-screen bg-white">
            {/* Solid Blue Header for Subpage */}
            <Navbar transparent={false} />

            {/* Main Content */}
            <div className="pt-32 pb-20 px-6 max-w-4xl mx-auto text-gray-800">

                {/* Title */}
                <div className="mb-8 mt-8 flex flex-col md:flex-row md:items-baseline gap-2 md:gap-3">
                    <h1 className="font-holiday text-5xl md:text-6xl text-yellow-500">Compliance</h1>
                    <span className="text-2xl md:text-3xl text-yellow-400 italic font-light font-rubik">Legal & Regulatory</span>
                </div>

                {/* Subheader */}
                <h2 className="text-2xl font-bold text-gray-600 mb-8 font-rubik">
                    Regulatory, contractual, and employment discipline
                </h2>

                {/* Intro */}
                <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                    <p>
                        Compliance is treated as a core operational function essential to business continuity and scalability.
                    </p>

                    <p>
                        Our compliance framework includes:
                    </p>

                    <ul className="list-disc pl-6 space-y-2 marker:text-gray-400">
                        <li>
                            Full understanding and execution of all operational agreements and service standards
                        </li>
                        <li>
                            Adherence to <span className="font-bold text-gray-800">DOT Hours of Service (HOS) regulations</span>, including:
                            <ul className="list-none pl-4 mt-1 space-y-1 text-gray-600">
                                <li>- Accurate time tracking and log compliance where applicable</li>
                                <li>- Active monitoring to prevent driver fatigue</li>
                                <li>- Scheduling practices aligned with federal and state requirements</li>
                            </ul>
                        </li>
                        <li>
                            Proper commercial auto, general liability, and workers’ compensation insurance coverage
                        </li>
                        <li>
                            Correct employee classification and workforce documentation
                        </li>
                        <li>
                            Employment eligibility verification (E-Verify)
                        </li>
                        <li>
                            Compliance with federal, state, and local wage and labor laws
                        </li>
                        <li>
                            Accurate reporting and payment of all applicable taxes in jurisdictions where services are performed
                        </li>
                        <li>
                            Consistent branding, identification, and uniform standards
                        </li>
                        <li>
                            Documented policies, procedures, and audit readiness
                        </li>
                    </ul>
                </div>

            </div>
        </main>
    );
}
