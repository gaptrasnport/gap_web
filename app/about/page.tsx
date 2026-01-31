import Navbar from "../components/Navbar";
import Image from "next/image";

export default function About() {
    return (
        <main className="min-h-screen bg-white">
            {/* Solid Blue Header for Subpage */}
            <Navbar transparent={false} />

            {/* Main Content */}
            <div className="pt-32 pb-20 px-6 max-w-4xl mx-auto text-gray-800">

                {/* Title */}
                <h1 className="font-holiday text-6xl text-yellow-500 mb-8 mt-8">About Us</h1>

                {/* Text Block 1 */}
                <p className="text-xl leading-relaxed mb-8">
                    We are a <span className="font-bold">family-owned, owner-operated transportation business</span> founded in <span className="font-bold">2005</span> in the state of <span className="font-bold">Florida</span> by <span className="font-bold">Pierangelo Montauti.</span>
                </p>

                {/* Text Block 2 */}
                <p className="text-lg leading-relaxed mb-8 text-gray-600">
                    The company began with a single delivery route serving the <span className="font-bold text-gray-800">Miami, Brickell, and Coral Gables</span> areas. From the start, our focus was clear: operate safely, remain compliant, deliver consistent service, and build a business designed for long-term sustainability.
                </p>

                {/* Text Block 3 */}
                <p className="text-lg leading-relaxed mb-8 text-gray-600">
                    Over time, the operation expanded through disciplined execution and operational reliability. We have since provided transportation and last-mile delivery services throughout <span className="font-bold text-gray-800">South Florida</span>, the <span className="font-bold text-gray-800">Ocala region</span>, and have supported operations in <span className="font-bold text-gray-800">other states during peak and contingency periods</span> when additional capacity was required.
                </p>

                {/* Text Block 4 */}
                <p className="text-lg leading-relaxed mb-12 text-gray-600">
                    As the business grew, we invested in building a strong internal structure supported by experienced leadership, professional drivers, and clearly defined operating processes.
                </p>

                {/* Subheader */}
                <h2 className="text-2xl font-bold text-yellow-500 mb-6 font-rubik">Leadership & Business Contact</h2>

                <p className="text-lg leading-relaxed mb-8 text-gray-600">
                    The company is led by its founder and supported by a designated business contact, <span className="font-bold text-gray-800">Octavio Valencia</span>, who brings <span className="font-bold text-gray-800">over 10 years of experience</span> in transportation and last-mile delivery operations.
                </p>

                <p className="text-lg leading-relaxed mb-8 text-gray-600">
                    Octavio Valencia has a <span className="font-bold text-gray-800">clear driving and safety record</span>, with a strong focus on accident prevention, operational compliance, and driver accountability. His experience and hands-on operational knowledge support daily execution, safety oversight, and coordination with partners and stakeholders.
                </p>

                <p className="text-lg leading-relaxed mb-4 text-gray-600">
                    Together, leadership remains actively involved in:
                </p>

                <ul className="list-disc list-inside mb-8 space-y-2 text-lg text-yellow-500 font-medium italic">
                    <li>Operational oversight and performance management</li>
                    <li>Safety and compliance execution</li>
                    <li>Workforce development and retention</li>
                    <li>Continuous improvement initiatives</li>
                </ul>

                <p className="text-lg leading-relaxed mb-8 text-gray-600">
                    Being owner-operated ensures decisions are made with <span className="font-bold text-gray-800">long-term responsibility</span>, accountability, and alignment with the expectations of partners, employees, and investors.
                </p>

                <p className="text-lg leading-relaxed mb-12 text-gray-600">
                    Our experience, leadership structure, and disciplined operating model position the company as a reliable, scalable transportation service provider built for sustained success.
                </p>

                {/* Photos Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
                    <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-lg">
                        <Image
                            src="/01_fotos_web_GAP2026.png"
                            alt="Leadership 1"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-lg">
                        <Image
                            src="/fotos_web_GAP2026.png"
                            alt="Leadership 2"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>
        </main>
    );
}
