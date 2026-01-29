import Navbar from "../components/Navbar";

export default function ServicePage() {
    return (
        <main className="min-h-screen bg-white">
            {/* Solid Blue Header for Subpage */}
            <Navbar transparent={false} />

            {/* Main Content */}
            <div className="pt-32 pb-20 px-6 max-w-4xl mx-auto text-gray-800">

                {/* Title */}
                <div className="mb-8 mt-8 flex items-baseline gap-3">
                    <h1 className="font-holiday text-6xl text-yellow-500">Service</h1>
                    <span className="text-3xl text-yellow-400 italic font-light font-rubik">Operational Excellence</span>
                </div>

                {/* Subheader */}
                <h2 className="text-2xl font-bold text-gray-600 mb-8 font-rubik">
                    Operational reliability at the last mile
                </h2>

                {/* Intro */}
                <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                    <p>
                        Service execution is measured through accuracy, accountability, and consistency.
                    </p>

                    <p>
                        Our service model focuses on:
                    </p>

                    <ul className="list-disc pl-6 space-y-2 marker:text-gray-400">
                        <li>
                            Completion of assigned deliveries and pickups, including additional attempts when appropriate
                        </li>
                        <li>
                            Proactive resolution of address discrepancies and delivery exceptions
                        </li>
                        <li>
                            Accurate scanning and tracking to maintain package-level visibility
                        </li>
                        <li>
                            Proper door tag usage and documentation when delivery cannot be completed
                        </li>
                        <li>
                            Customer communication when necessary to resolve delivery challenges
                        </li>
                        <li>
                            Adherence to defined delivery windows and professional service standards
                        </li>
                        <li>
                            Effective last-mile solutions for residential and commercial customers
                        </li>
                    </ul>

                    <p className="mt-8">
                        Each delivery is managed as a controlled process to maintain service integrity.
                    </p>
                </div>

            </div>
        </main>
    );
}
