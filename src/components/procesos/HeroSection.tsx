"use client";

import { useLanguage } from '@/lib/LanguageContext';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function HeroSection() {
    const { t } = useLanguage();
    // Fallback for new keys if types aren't updated yet
    const heroContent = (t.procesos.hero as any);

    return (
        <section className="relative min-h-screen flex flex-col md:flex-row bg-[#050505] overflow-hidden">

            {/* Left Column: Content */}
            <div className="w-full md:w-1/2 flex flex-col justify-center px-8 md:px-20 py-32 relative z-10 order-2 md:order-1">
                {/* Subtle Background Grid for Left Side */}
                <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
                    style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}
                />

                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="inline-block text-[#82ff1f] font-mono text-xs tracking-[0.2em] uppercase mb-8 border-b border-[#82ff1f]/30 pb-2"
                    >
                        {heroContent.label || "Process Consultant"}
                    </motion.span>

                    <motion.h1
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="text-4xl md:text-5xl lg:text-7xl font-medium tracking-tight text-white mb-6 leading-[1.1]"
                    >
                        {heroContent.title}
                    </motion.h1>

                    <motion.h2
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.6 }}
                        className="text-lg md:text-2xl font-light text-zinc-400 mb-12 max-w-xl leading-relaxed"
                    >
                        {heroContent.subtitle}
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.7, duration: 0.8 }}
                        className="text-base md:text-lg text-zinc-300 max-w-2xl leading-loose font-light space-y-6 whitespace-pre-wrap"
                    >
                        {heroContent.desc}
                    </motion.div>
                </motion.div>
            </div>

            {/* Right Column: Professional Image */}
            <div className="w-full md:w-1/2 relative min-h-[50vh] md:min-h-screen order-1 md:order-2">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="absolute inset-0"
                >
                    <Image
                        src="/images/hero-consulting.jpg"
                        alt="Víctor Torres Arana - Process Consultant"
                        fill
                        className="object-cover object-center transition-all duration-700 ease-in-out"
                        priority
                    />
                    {/* Gradient Overlay for Text Readability/Integration */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-transparent to-transparent md:via-[#050505]/20" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent md:hidden" />
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-8 left-8 md:left-20 flex items-center gap-4 z-20 hidden md:flex"
            >
                <div className="h-[1px] w-12 bg-zinc-700 overflow-hidden relative">
                    <motion.div
                        animate={{ x: [-50, 50] }}
                        transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                        className="absolute top-0 left-0 h-full w-full bg-[#82ff1f] origin-left"
                    />
                </div>
                <span className="text-[10px] uppercase tracking-widest text-zinc-500">Scroll to Explore</span>
            </motion.div>

        </section>
    );
}
