import React from 'react';
import { motion } from 'framer-motion';
import { Target, Shield, UserCheck, Eye, AlertTriangle, CheckCircle2, ChevronRight } from 'lucide-react';

interface GovernanceBlockProps {
    content: any;
}

const GovernanceBlock: React.FC<GovernanceBlockProps> = ({ content }) => {
    if (!content) return null;

    const principlesIcons = [Target, Shield, UserCheck, Eye];

    return (
        <section className="relative py-32 lg:py-40 px-6 md:px-12 w-full max-w-[1600px] mx-auto overflow-hidden bg-[#0B0B0B]">

            <div className="relative z-10 max-w-5xl mx-auto space-y-32">

                {/* 1. Cabecera */}
                <div className="text-center space-y-6">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-5xl lg:text-7xl font-heading font-light text-white tracking-tight leading-none"
                    >
                        {content.title}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg md:text-xl text-zinc-500 font-light tracking-wide uppercase"
                    >
                        {content.subtitle}
                    </motion.p>
                </div>

                {/* 2. Definición (REDESIGNED) */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="relative max-w-4xl mx-auto"
                >
                    {/* Decorative large quotes */}
                    <div className="absolute -top-12 -left-8 text-9xl text-[#82ff1f] opacity-10 font-serif leading-none select-none">“</div>

                    <div className="bg-zinc-900/30 border-l-2 border-[#82ff1f] pl-8 md:pl-16 py-8 md:py-12 backdrop-blur-sm">
                        <p className="text-xl md:text-2xl text-zinc-400 font-light mb-10 leading-relaxed">
                            {content.definition.intro}
                        </p>

                        <div className="space-y-6 mb-12">
                            {content.definition.items.map((item: string, i: number) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.2 + (i * 0.1) }}
                                    className="flex items-center gap-4 group"
                                >
                                    <div className="w-10 h-px bg-zinc-700 group-hover:bg-[#82ff1f] transition-colors duration-500" />
                                    <p className="text-2xl md:text-3xl text-white font-heading font-bold tracking-tight">
                                        {item}
                                    </p>
                                </motion.div>
                            ))}
                        </div>

                        <div className="relative">
                            <p className="text-lg md:text-xl text-[#82ff1f] font-light leading-relaxed">
                                {content.definition.closure.split('\n')[0]}
                                <br />
                                <span className="font-bold text-white">{content.definition.closure.split('\n')[1]}</span>
                            </p>
                        </div>
                    </div>
                </motion.div>


                {/* 3. El Problema Real (Comparativa) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-start border-t border-white/5 pt-20">
                    {/* Sin Gobernanza */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-6 md:text-right"
                    >
                        <div className="flex items-center justify-end gap-3 mb-4 opacity-50">
                            <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-500">{content.context.without.label}</h3>
                            <AlertTriangle size={16} className="text-zinc-500" />
                        </div>
                        <ul className="space-y-6">
                            {content.context.without.items.map((item: string, i: number) => (
                                <li key={i} className="text-zinc-400 font-light text-lg">
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <div className="pt-6 border-t border-white/5 mt-6">
                            <p className="text-zinc-500 text-sm italic">{content.context.intro}</p>
                        </div>
                    </motion.div>

                    {/* Divider (Desktop) */}
                    <div className="hidden md:block w-px bg-gradient-to-b from-transparent via-white/10 to-transparent absolute left-1/2 -ml-px h-64" />

                    {/* Con Gobernanza */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="space-y-6"
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <CheckCircle2 size={16} className="text-[#82ff1f]" />
                            <h3 className="text-sm font-bold uppercase tracking-widest text-[#82ff1f]">{content.context.with.label}</h3>
                        </div>
                        <ul className="space-y-6">
                            {content.context.with.items.map((item: string, i: number) => (
                                <li key={i} className="text-white font-heading font-bold text-lg">
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <div className="pt-6 border-t border-white/5 mt-6 opacity-0 md:opacity-100">
                            <p className="text-transparent text-sm italic select-none">.</p>
                        </div>
                    </motion.div>
                </div>

                {/* 4. Principios (Cards minimalistas) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {content.principles.map((p: any, i: number) => {
                        const Icon = principlesIcons[i];
                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="p-8 lg:p-10 border border-white/5 bg-zinc-900/20 hover:bg-zinc-900/40 rounded-xl transition-all group hover:border-[#82ff1f]/20"
                            >
                                <div className="mb-6 text-zinc-600 group-hover:text-[#82ff1f] transition-colors">
                                    <Icon size={28} strokeWidth={1.5} />
                                </div>
                                <h4 className="text-xl font-heading font-bold text-white mb-3 whitespace-pre-line">{p.title}</h4>
                                <p className="text-zinc-400 font-light leading-relaxed">{p.desc}</p>
                            </motion.div>
                        );
                    })}
                </div>

                {/* 5. No Burocracia */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative p-10 md:p-16 rounded-3xl bg-[#82ff1f]/5 border border-[#82ff1f]/10 text-center overflow-hidden"
                >
                    <div className="relative z-10">
                        <p className="text-2xl md:text-4xl font-heading font-bold text-white mb-6">
                            "{content.notBureaucracy.quote}"
                        </p>
                        <p className="text-zinc-400 text-lg md:text-xl font-light max-w-2xl mx-auto">
                            {content.notBureaucracy.desc}
                        </p>
                    </div>
                </motion.div>

                {/* 6. Bridge */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-center pt-12"
                >
                    <p className="text-zinc-500 font-light leading-relaxed max-w-xl mx-auto">
                        {content.bridge}
                    </p>
                </motion.div>

            </div>
        </section>
    );
};

export default GovernanceBlock;
