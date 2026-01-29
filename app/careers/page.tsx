import Navbar from "../components/Navbar";

export default function Careers() {
    return (
        <main className="min-h-screen bg-white">
            {/* Solid Blue Header for Subpage */}
            <Navbar transparent={false} />

            {/* Main Content */}
            <div className="pt-32 pb-20 px-6 max-w-4xl mx-auto text-gray-800">

                {/* Title */}
                <h1 className="font-holiday text-6xl text-yellow-400 mb-8 mt-8">Careers</h1>

                {/* Intro Text */}
                <p className="text-lg leading-relaxed mb-6 text-gray-600">
                    We are always looking for <span className="font-bold text-gray-800">professional, safety-focused drivers and team members</span> who take pride in their work and understand the importance of reliability, accountability, and service.
                </p>

                <p className="text-lg leading-relaxed mb-6 text-gray-600">
                    If you are committed to <span className="font-bold text-gray-800">safe driving practices</span>, respect procedures, and want to be part of a <span className="font-bold text-gray-800">stable, owner-operated transportation team</span>, we invite you to apply. We value experience, a strong safety record, and individuals who are looking for long-term growth in a professional environment.
                </p>

                <p className="text-lg leading-relaxed mb-12 text-gray-600">
                    Join a team where <span className="font-bold text-gray-800">safety comes first</span>, performance matters, and people are treated with respect.
                </p>

                {/* Application Form */}
                <form className="max-w-md space-y-6">

                    {/* First Name */}
                    <div className="flex flex-col">
                        <label htmlFor="firstName" className="font-bold text-yellow-400 text-lg mb-2 font-rubik">First Name:</label>
                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            className="border border-yellow-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                        />
                    </div>

                    {/* Last Name */}
                    <div className="flex flex-col">
                        <label htmlFor="lastName" className="font-bold text-yellow-400 text-lg mb-2 font-rubik">Last Name:</label>
                        <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            className="border border-yellow-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                        />
                    </div>

                    {/* Telephone */}
                    <div className="flex flex-col">
                        <label htmlFor="telephone" className="font-bold text-yellow-400 text-lg mb-2 font-rubik">Telephone:</label>
                        <input
                            type="tel"
                            id="telephone"
                            name="telephone"
                            className="border border-yellow-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                        />
                    </div>

                    {/* Submit Button (Implicit in design but needed for form) */}
                    <button
                        type="submit"
                        className="bg-blue-900 text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-800 transition-colors uppercase tracking-wider"
                    >
                        Submit Application
                    </button>

                </form>

            </div>
        </main>
    );
}
