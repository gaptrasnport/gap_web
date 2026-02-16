"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

interface CareersLinkProps {
    className?: string;
    onClick?: () => void;
    mobile?: boolean;
}

export default function CareersLink({ className, onClick, mobile = false }: CareersLinkProps) {
    const pathname = usePathname();
    const isActive = pathname === "/careers";
    const [isHovered, setIsHovered] = useState(false);

    // Dynamic styles based on mobile prop
    const glowInset = mobile ? -8 : -15; // Smaller glow for mobile
    const sparkleSize = mobile ? "w-1.5 h-1.5" : "w-2 h-2";

    return (
        <Link
            href="/careers"
            className={`relative group flex ${mobile ? "flex-row items-center gap-12" : "flex-col items-center justify-center"} ${className} ${isActive ? "text-yellow-400 font-bold" : ""}`}
            onClick={onClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Circular Glow / Trail (Estela) */}
            <motion.div
                className="absolute pointer-events-none rounded-full border-2 border-yellow-400/30 blur-[1px]"
                style={{
                    top: glowInset,
                    bottom: glowInset,
                    left: mobile ? "-10px" : glowInset,
                    right: mobile ? "auto" : glowInset,
                    width: mobile ? "100px" : "auto",
                    aspectRatio: "1/1"
                }}
                animate={{
                    rotate: 360,
                    scale: [1, 1.05, 1],
                    opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                    rotate: { duration: 4, repeat: Infinity, ease: "linear" },
                    scale: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                    opacity: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                }}
            >
                {/* Orbiting Sparkle */}
                <motion.div
                    className={`absolute top-0 left-1/2 -translate-x-1/2 ${sparkleSize} bg-yellow-400 rounded-full shadow-[0_0_10px_#facc15]`}
                />
            </motion.div>

            {/* Careers Text */}
            <span className="relative z-10 transition-colors duration-300 group-hover:text-yellow-400">
                Careers
            </span>

            {/* Apply Now! Label */}
            <AnimatePresence>
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{
                        opacity: [0, 1, 1, 0],
                        scale: [0.8, 1, 1, 0.8],
                        x: mobile ? [0, 10, 10, 0] : 0,
                        y: mobile ? 0 : [10, 15, 15, 10]
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        times: [0, 0.2, 0.8, 1],
                        ease: "easeInOut"
                    }}
                    className={`whitespace-nowrap bg-yellow-400 text-blue-900 text-[10px] font-black px-2 py-0.5 rounded italic shadow-lg z-20 pointer-events-none uppercase tracking-tighter ${mobile ? 'relative ml-4' : 'absolute'}`}
                    style={mobile ? {} : { bottom: '-15px' }}
                >
                    Apply Now!
                </motion.div>
            </AnimatePresence>

            {/* Glow interaction background (Simplified for mobile) */}
            {!mobile && (
                <motion.div
                    className="absolute inset-0 bg-yellow-400/0 group-hover:bg-yellow-400/10 rounded-lg -z-10 transition-colors"
                    animate={isHovered ? { scale: 1.2, opacity: 1 } : { scale: 1, opacity: 0 }}
                />
            )}
        </Link>
    );
}
