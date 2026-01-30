"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function SafetySection() {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.1, 1.2]);
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);

    return (
        <section
            ref={sectionRef}
            className="relative w-full min-h-screen flex flex-col justify-center items-center text-center font-sans text-white overflow-hidden bg-black"
        >
            {/* Background Image with Ken Burns + Parallax */}
            <motion.div
                className="absolute -top-[15%] -bottom-[15%] -left-0 -right-0 z-0 bg-cover bg-center"
                style={{
                    backgroundImage: "url('/safety-bg.jpg')",
                    scale,
                    y
                }}
            >
                <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]" />
            </motion.div>

            {/* Content Container */}
            <div className="relative z-10 container mx-auto px-6">
                {/* Artistic Title with "Bloom" and "Floating" Effect */}
                <motion.h2
                    className="text-6xl md:text-8xl lg:text-9xl font-holiday text-yellow-400 mb-16 md:mb-10 drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)] transform leading-[1.2]"
                    initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                    whileInView={{
                        opacity: 1,
                        scale: 1,
                        rotate: -2,
                    }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{
                        duration: 1.2,
                        ease: [0.16, 1, 0.3, 1] // Custom easeOutExpo-like
                    }}
                    animate={{
                        y: [0, -10, 0],
                    }}
                    // @ts-ignore
                    transition={{
                        // @ts-ignore
                        y: {
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }
                    }}
                >
                    #Safety Above All
                </motion.h2>

                <motion.div
                    className="max-w-4xl mx-auto space-y-6"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <h3 className="text-3xl md:text-5xl font-rubik font-bold tracking-tight leading-tight drop-shadow-lg">
                        Safety is not a policy. It's how we operate.
                    </h3>
                    <motion.div
                        className="w-24 h-1 bg-yellow-400 mx-auto rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: 96 }}
                        transition={{ duration: 1, delay: 0.6 }}
                    />
                    <p className="text-xl md:text-2xl font-rubik font-normal opacity-90 tracking-wide drop-shadow-md">
                        Protecting our people, our communities, and our brand—every day
                    </p>
                </motion.div>
            </div>

            {/* Decorative Side Elements (Optional but adds to the vanguard feel) */}
            <motion.div
                className="absolute left-10 top-1/2 -translate-y-1/2 hidden lg:block"
                style={{ opacity: useTransform(scrollYProgress, [0, 0.5], [0, 1]) }}
            >
                <div className="h-40 w-[1px] bg-gradient-to-b from-transparent via-yellow-400 to-transparent" />
            </motion.div>
        </section>
    );
}
