import React from 'react';
import { motion } from 'framer-motion';

interface OrganizationalSystemBlockProps {
    content: any;
}

const OrganizationalSystemBlock: React.FC<OrganizationalSystemBlockProps> = ({ content }) => {
    if (!content) return null;

    return (
        <section className="relative py-32 lg:py-48 px-6 md:px-12 w-full max-w-[1600px] mx-auto overflow-hidden">
            {/* Background Element - Subtle Glow */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#82ff1f]/5 rounded-full blur-[150px] pointer-events-none -z-10 opacity-30 mix-blend-screen" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[150px] pointer-events-none -z-10 opacity-20 mix-blend-screen" />

            <div className="relative z-10 max-w-6xl mx-auto flex flex-col space-y-20 lg:space-y-32">

                {/* 1. Header & Intro */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
                    {/* Title Area */}
                    <div className="lg:col-span-7 space-y-6">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="text-[#82ff1f] font-mono text-sm tracking-[0.2em] uppercase mb-4 block">
                                {content.subtitle}
                            </span>
                            <h2 className="text-5xl md:text-7xl lg:text-8xl font-medium text-white tracking-tight leading-[0.9]">
                                {content.title}
                            </h2>
                        </motion.div>
                    </div>

                    {/* Context Text */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="lg:col-span-5 pt-2"
                    >
                        <p className="text-xl md:text-2xl text-zinc-400 font-light leading-relaxed">
                            {content.intro}
                        </p>
                    </motion.div>
                </div>

                {/* 2. Anchor Phrase (Premium Glass Card) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="w-full"
                >
                    <div className="relative group rounded-3xl overflow-hidden">
                        {/* Gradient Border via Pseudo-element */}
                        <div className="absolute inset-0 bg-gradient-to-r from-[#82ff1f]/20 via-white/5 to-[#82ff1f]/20 rounded-3xl p-[1px] opacity-30 group-hover:opacity-60 transition-opacity duration-700">
                            <div className="h-full w-full bg-[#0B0B0B] rounded-3xl" />
                        </div>

                        {/* Card Content */}
                        <div className="relative bg-zinc-900/30 backdrop-blur-xl p-10 md:p-20 text-center border border-white/5 rounded-3xl">
                            {/* Inner Glow */}
                            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#82ff1f]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                            <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#82ff1f]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                            <p className="relative z-10 text-3xl md:text-5xl lg:text-6xl text-white font-medium leading-tight tracking-tight">
                                {content.anchor.split('\n')[0]}
                                <span className="block mt-4 text-[#82ff1f] drop-shadow-[0_0_15px_rgba(130,255,31,0.2)]">
                                    {content.anchor.split('\n')[1]}
                                </span>
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* 3. Model 4 Steps (Clean & Vertical) */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 border-t border-white/5 pt-20">
                    {content.steps.map((step: string, index: number) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 * index }}
                            className="group relative"
                        >
                            <span className="block text-6xl md:text-7xl font-mono font-bold text-zinc-900 group-hover:text-[#82ff1f] transition-colors duration-500 mb-6 select-none opacity-50 group-hover:opacity-100">
                                0{index + 1}
                            </span>
                            <div className="h-[2px] w-12 bg-zinc-800 group-hover:w-full group-hover:bg-[#82ff1f] transition-all duration-700 mb-6" />
                            <p className="text-xl text-zinc-400 group-hover:text-white transition-colors duration-300 font-light leading-snug">
                                {step}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* 4. Transition */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.6 }}
                    className="flex justify-center"
                >
                    <p className="inline-block px-6 py-2 rounded-full border border-white/5 bg-white/5 text-xs md:text-sm text-zinc-500 hover:text-white hover:border-[#82ff1f]/30 transition-all cursor-default">
                        {content.transition}
                    </p>
                </motion.div>

            </div>
        </section>
    );
};

export default OrganizationalSystemBlock;
