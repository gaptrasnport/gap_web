import React from 'react';

export default function SafetySection() {
    return (
        <section className="relative w-full min-h-screen flex flex-col justify-center items-center text-center font-sans text-white overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/safety-bg.jpg')" }}
            >
                <div className="absolute inset-0 bg-black/40" />
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-6">
                <h2 className="text-6xl md:text-8xl lg:text-9xl font-holiday text-yellow-400 mb-6 drop-shadow-xl transform -rotate-2">
                    #Safety Above All
                </h2>

                <div className="max-w-4xl mx-auto space-y-4">
                    <h3 className="text-3xl md:text-5xl font-rubik font-bold tracking-tight leading-tight drop-shadow-lg">
                        Safety is not a policy. It's how we operate.
                    </h3>
                    <p className="text-xl md:text-2xl font-rubik font-normal opacity-90 tracking-wide drop-shadow-md">
                        Protecting our people, our communities, and our brand—every day
                    </p>
                </div>
            </div>
        </section>
    );
}
