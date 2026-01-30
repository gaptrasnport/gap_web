"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

    return (
        <section
            ref={containerRef}
            className="relative w-full h-screen text-white overflow-hidden flex items-center bg-[#0a192f]"
        >
            {/* Background Image with Parallax */}
            <motion.div
                className="absolute -top-[15%] -bottom-[15%] -left-0 -right-0 z-0 bg-cover bg-center"
                style={{
                    backgroundImage: "url('/hero-bg.jpg')",
                    y,
                    scale
                }}
                initial={{ scale: 1.2, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
            >
                <div className="absolute inset-0 bg-blue-900/40 mix-blend-multiply" />
            </motion.div>

            {/* Content Container */}
            <motion.div
                className="relative z-10 container mx-auto px-6 py-8"
                style={{ opacity }}
            >
                <div className="max-w-4xl">
                    <motion.h1
                        className="text-4xl md:text-6xl font-bold leading-tight drop-shadow-lg font-rubik"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                    >
                        Last-Mile Pickup & Delivery Services Built on{" "}
                        <motion.span
                            className="text-yellow-400 inline-block"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 1.2 }}
                        >
                            Safety
                        </motion.span>
                        ,{" "}
                        <motion.span
                            className="text-yellow-400 inline-block"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 1.4 }}
                        >
                            Compliance
                        </motion.span>{" "}
                        &{" "}
                        <motion.span
                            className="text-yellow-400 inline-block"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 1.6 }}
                        >
                            Reliability
                        </motion.span>
                    </motion.h1>
                </div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 2 }}
            >
                <motion.div
                    className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1"
                    animate={{ y: [0, 5, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                    <div className="w-1 h-2 bg-yellow-400 rounded-full" />
                </motion.div>
            </motion.div>
        </section>
    );
}
