import Navbar from "../components/Navbar";
import Link from "next/link";

export default function SafetyResources() {
    return (
        <main className="min-h-screen bg-white">
            {/* Solid Blue Header for Subpage */}
            <Navbar transparent={false} />

            {/* Main Content */}
            <div className="pt-32 pb-20 px-6 max-w-4xl mx-auto text-gray-800">

                {/* Title */}
                <h1 className="font-holiday text-6xl text-yellow-400 mb-8 mt-8">Safety Resources</h1>

                {/* Intro Text */}
                <p className="text-lg leading-relaxed mb-6 text-gray-600">
                    We believe access to accurate information and ongoing education is essential to maintaining a strong safety culture. The following resources are provided for informational purposes and reflect widely recognized <span className="font-bold text-gray-800">industry standards, regulatory guidance, and best practices related to transportation</span>, driver safety, and compliance.
                </p>

                {/* Section 1 */}
                <h2 className="text-2xl font-bold text-yellow-500 mb-6 font-rubik mt-12">Transportation & Trucking Associations</h2>

                <div className="space-y-6">
                    <div>
                        <p className="text-lg text-yellow-500 font-bold mb-1">
                            1. American Trucking Associations (ATA) <Link href="https://www.trucking.org" className="italic underline text-gray-600 font-normal hover:text-blue-900 transition-colors" target="_blank">https://www.trucking.org</Link>
                        </p>
                        <p className="text-gray-600 text-lg">Industry insights, safety initiatives, and professional standards for trucking and transportation operations.</p>
                    </div>

                    <div>
                        <p className="text-lg text-yellow-500 font-bold mb-1">
                            2. Truckload Carriers Association (TCA) <Link href="https://truckload.org" className="italic underline text-gray-600 font-normal hover:text-blue-900 transition-colors" target="_blank">https://truckload.org</Link>
                        </p>
                        <p className="text-gray-600 text-lg">Best practices for fleet operations, safety culture, and driver engagement.</p>
                    </div>
                </div>

                {/* Section 2 */}
                <h2 className="text-2xl font-bold text-yellow-500 mb-6 font-rubik mt-12">Federal Transportation & Safety Agencies</h2>

                <div className="space-y-6">
                    <div>
                        <p className="text-lg text-yellow-500 font-bold mb-1">
                            3. U.S. Department of Transportation (DOT) <Link href="https://www.transportation.gov" className="italic underline text-gray-600 font-normal hover:text-blue-900 transition-colors" target="_blank">https://www.transportation.gov</Link>
                        </p>
                        <p className="text-gray-600 text-lg">Federal transportation policies, safety programs, and regulatory guidance.</p>
                    </div>

                    <div>
                        <p className="text-lg text-yellow-500 font-bold mb-1">
                            4. Federal Motor Carrier Safety Administration (FMCSA)
                        </p>
                        <Link href="https://www.fmcsa.dot.gov" className="italic underline text-gray-600 font-normal text-lg hover:text-blue-900 transition-colors block mb-1" target="_blank">https://www.fmcsa.dot.gov</Link>
                    </div>
                </div>

            </div>
        </main>
    );
}
