import Navbar from "../components/Navbar";

export default function About() {
    return (
        <main className="min-h-screen bg-white">
            {/* Solid Blue Header for Subpage */}
            <Navbar transparent={false} />

            {/* Main Content */}
            <div className="pt-32 pb-20 px-6 max-w-4xl mx-auto text-gray-800">

                {/* Title */}
                <h1 className="font-holiday text-6xl text-yellow-400 mb-8 mt-8">About Us</h1>

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
                <h2 className="text-2xl font-bold text-yellow-500 mb-4 font-rubik">Leadership & Business Contact</h2>
            </div>
        </main>
    );
}
