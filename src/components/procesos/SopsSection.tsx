"use client";

import { useLanguage } from '@/lib/LanguageContext';
import { motion } from 'framer-motion';
import { CheckCircle2, Users, TrendingUp, ArrowRight, Settings, FileText, Activity } from 'lucide-react';

export default function SopsSection() {
    const { t } = useLanguage();
    // Fallback if type defs aren't updated yet
    const sops = (t.procesos.sops as any);

    return (
        <section className="py-32 px-6 md:px-20 bg-[#050505] overflow-hidden relative">
            <div className="max-w-7xl mx-auto relative z-10">

                {/* Header Sub-section */}
                <div className="mb-24 text-center max-w-4xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-medium text-white mb-6 tracking-tight"
                    >
                        {sops.title}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-xl md:text-2xl text-[#82ff1f] font-light mb-8"
                    >
                        {sops.subtitle}
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-zinc-400 text-lg leading-relaxed md:max-w-2xl mx-auto"
                    >
                        {sops.intro}
                    </motion.p>
                </div>

                {/* 1. CREATION PHASE - Timeline */}
                <div className="mb-32">
                    <motion.h3
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-2xl md:text-3xl font-medium text-white mb-12 flex items-center gap-3"
                    >
                        <span className="w-8 h-[1px] bg-[#82ff1f]"></span>
                        {sops.phases?.creation.title}
                    </motion.h3>

                    <div className="grid md:grid-cols-3 gap-8 relative">
                        {/* Connecting Line (Desktop) */}
                        <div className="absolute top-8 left-0 w-full h-[1px] bg-zinc-800 hidden md:block" />

                        {sops.phases?.creation.steps.map((step: any, i: number) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.2 }}
                                className="relative bg-zinc-900/30 border border-zinc-800 p-8 rounded-3xl hover:border-[#82ff1f]/30 transition-colors group"
                            >
                                <div className="absolute -top-4 left-8 bg-[#050505] px-2 text-[#82ff1f] font-mono text-xl z-10 transition-transform group-hover:scale-110">
                                    0{i + 1}
                                </div>
                                <h4 className="text-xl font-medium text-white mb-4 group-hover:text-[#82ff1f] transition-colors">{step.title}</h4>
                                <p className="text-zinc-400 leading-relaxed text-sm">{step.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* 2. IMPLEMENTATION PHASE - Human Centric Cards */}
                <div className="mb-32">
                    <motion.h3
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-2xl md:text-3xl font-medium text-white mb-4 flex items-center gap-3"
                    >
                        <span className="w-8 h-[1px] bg-[#82ff1f]"></span>
                        {sops.phases?.implementation.title}
                    </motion.h3>
                    <p className="text-zinc-500 mb-12 ml-11 max-w-xl">{sops.phases?.implementation.subtitle}</p>

                    <div className="grid md:grid-cols-3 gap-6">
                        {sops.phases?.implementation.cards.map((card: any, i: number) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.15 }}
                                className="bg-[#111] p-8 rounded-2xl border-l-2 border-zinc-800 hover:border-[#82ff1f] transition-all hover:bg-zinc-900/50"
                            >
                                <div className="mb-6 bg-zinc-900 w-12 h-12 rounded-xl flex items-center justify-center text-white group-hover:bg-[#82ff1f] group-hover:text-black transition-colors">
                                    {i === 0 && <Users size={20} />}
                                    {i === 1 && <Activity size={20} />}
                                    {i === 2 && <CheckCircle2 size={20} />}
                                </div>
                                <h4 className="text-lg font-medium text-white mb-3">{card.title}</h4>
                                <p className="text-zinc-400 text-sm leading-relaxed">{card.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* 3. MEASUREMENT & EXAMPLES - Dashboard Style */}
                <div className="grid md:grid-cols-2 gap-12 items-start">

                    {/* Measurement KPIs */}
                    <div>
                        <motion.h3
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-2xl md:text-3xl font-medium text-white mb-8 flex items-center gap-3"
                        >
                            <span className="w-8 h-[1px] bg-[#82ff1f]"></span>
                            {sops.phases?.measurement.title}
                        </motion.h3>

                        <div className="space-y-4">
                            {sops.phases?.measurement.kpis.map((kpi: any, i: number) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex items-center justify-between p-6 bg-zinc-900/20 border border-zinc-800 rounded-xl"
                                >
                                    <div>
                                        <p className="text-zinc-400 text-sm font-medium mb-1">{kpi.label}</p>
                                        <p className="text-xs text-zinc-600">{kpi.desc}</p>
                                    </div>
                                    <div className="text-2xl md:text-3xl font-medium text-[#82ff1f]">
                                        {kpi.value}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Real Examples List */}
                    <div className="bg-zinc-900/10 border border-zinc-800/50 p-8 rounded-3xl">
                        <h4 className="text-xl font-medium text-white mb-8 border-b border-zinc-800 pb-4">
                            {sops.examplesTitle}
                        </h4>
                        <div className="space-y-4">
                            {sops.examples.map((ex: string, i: number) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: 10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.05 }}
                                    className="flex items-center gap-3 text-zinc-300"
                                >
                                    <CheckCircle2 size={16} className="text-[#82ff1f] shrink-0" />
                                    <span className="text-sm md:text-base">{ex}</span>
                                </motion.div>
                            ))}
                        </div>

                        <div className="mt-10 pt-6 border-t border-zinc-800">
                            <p className="text-white text-lg font-medium italic">
                                "{sops.closing}"
                            </p>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}
