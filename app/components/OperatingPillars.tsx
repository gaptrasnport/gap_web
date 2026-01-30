"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform, useScroll } from "framer-motion";
import React, { useRef } from "react";

function PillarCard({ pillar, index }: { pillar: any, index: number }) {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;

        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    const Content = (
        <motion.div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateY,
                rotateX,
                transformStyle: "preserve-3d",
            }}
            initial={{ opacity: 0, y: 50, rotateX: "20deg" }}
            whileInView={{ opacity: 1, y: 0, rotateX: "0deg" }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{
                duration: 0.8,
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1]
            }}
            className="flex flex-col items-center text-center group cursor-pointer relative"
        >
            {/* Glossy Reflection Effect */}
            <div className="absolute inset-0 z-10 pointer-events-none opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-tr from-white/0 via-white/30 to-white/0 transform translate-z-10" />

            {/* Icon Container with Floating and Glow */}
            <div
                style={{ transform: "translateZ(50px)" }}
                className="mb-6 flex items-center justify-center w-48 h-48 md:w-56 md:h-56 relative"
            >
                <motion.div
                    className="absolute inset-0 bg-yellow-400/20 blur-3xl rounded-full scale-0 group-hover:scale-100 transition-transform duration-700"
                    animate={{ scale: [0.8, 1.1, 0.8] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />

                <motion.div
                    className="relative w-full h-full"
                    animate={{ y: [0, -12, 0] }}
                    transition={{
                        duration: 3 + index,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                >
                    <Image
                        src={pillar.icon}
                        alt={pillar.alt}
                        fill
                        className="object-contain object-center drop-shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
                    />
                </motion.div>
            </div>

            <motion.h3
                style={{ transform: "translateZ(30px)" }}
                className="text-2xl font-rubik font-black text-white mb-1 leading-tight tracking-wide group-hover:text-yellow-400 transition-colors duration-300"
            >
                {pillar.title}
            </motion.h3>
            <motion.p
                style={{ transform: "translateZ(20px)" }}
                className="text-base font-rubik font-normal text-white/90"
            >
                {pillar.subtitle}
            </motion.p>
        </motion.div>
    );

    if (pillar.title === "Safety") return <Link href="/safety" className="block">{Content}</Link>;
    if (pillar.title === "Compliance") return <Link href="/compliance" className="block">{Content}</Link>;
    if (pillar.title === "Service") return <Link href="/service" className="block">{Content}</Link>;
    if (pillar.title === "Profitability & Sustainability") return <Link href="/profitability-sustainability" className="block">{Content}</Link>;

    return <div>{Content}</div>;
}

export default function OperatingPillars() {
    const pillars = [
        { title: "Safety", subtitle: "Risk Prevention", icon: "/pillar-safety.png", alt: "Safety Icon" },
        { title: "Compliance", subtitle: "Legal & Regulatory", icon: "/pillar-compliance.png", alt: "Compliance Icon" },
        { title: "Service", subtitle: "Operational Excellence", icon: "/pillar-service.png", alt: "Service Icon" },
        { title: "Profitability & Sustainability", subtitle: "Sustainable Growth", icon: "/pillar-sustainability.png", alt: "Sustainability Icon" },
    ];

    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);

    return (
        <section
            ref={containerRef}
            className="relative w-full min-h-screen py-20 flex flex-col justify-center items-center font-sans text-white overflow-hidden perspective-1000 bg-[#0a192f]"
        >
            {/* Background Image with subtle parallax */}
            <motion.div
                className="absolute -top-[15%] -bottom-[15%] -left-0 -right-0 z-0 bg-cover bg-center"
                style={{
                    backgroundImage: "url('/hero-bg.jpg')",
                    y
                }}
            >
                <div className="absolute inset-0 bg-blue-900/40 mix-blend-multiply transition-colors duration-1000 group-hover:bg-blue-900/30" />
            </motion.div>

            {/* Content Container */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-4">
                {/* Header */}
                <motion.div
                    className="mb-16"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-4xl md:text-5xl font-rubik font-bold text-yellow-400 mb-2 drop-shadow-lg">
                        Operating Pillars
                    </h2>
                    <p className="text-2xl md:text-3xl font-rubik font-medium italic text-yellow-500/90">
                        Core Operating Principles
                    </p>
                </motion.div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16">
                    {pillars.map((pillar, index) => (
                        <PillarCard key={index} pillar={pillar} index={index} />
                    ))}
                </div>
            </div>

            {/* Glassmorphic decorative circles */}
            <div className="absolute top-1/4 -right-20 w-80 h-80 bg-yellow-400/5 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-blue-400/5 rounded-full blur-[100px] pointer-events-none" />
        </section>
    );
}
