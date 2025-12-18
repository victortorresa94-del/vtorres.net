"use client";

import { useLanguage } from '@/lib/LanguageContext';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight, TrendingUp, Clock, Layers, Users, X, Check, FileText, Lightbulb } from 'lucide-react';

export default function EmeExperience({ isEmbedded = false }: { isEmbedded?: boolean }) {
    const { t } = useLanguage();

    // Access translations with type assertion to bypass strict typing until fully propagated
    // logic: try to get emeDeepDive from processes object. 
    // We cast to 'any' to avoid TS errors if types haven't updated yet.
    const processes = t.procesos as any;
    const content = processes.emeDeepDive;

    if (!content) return null;

    return (
        <section className={`${isEmbedded ? 'py-0 px-0 bg-transparent border-0' : 'py-24 px-6 md:px-20 bg-[#080808] border-y border-zinc-900/50'} relative overflow-hidden`}>
            {/* Background Elements - Only if standalone */}
            {!isEmbedded && <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#82ff1f]/5 rounded-full blur-[120px] pointer-events-none" />}

            <div className={`${isEmbedded ? 'max-w-full' : 'max-w-7xl mx-auto'} relative z-10`}>

                {/* Header Block - Hide header if embedded, accordion has it */}
                {!isEmbedded ? (
                    <div className="mb-20">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mb-12"
                        >
                            <span className="text-[#82ff1f] font-mono text-sm tracking-widest uppercase mb-4 block">
                                {content.company}
                            </span>
                            <h2 className="text-4xl md:text-7xl font-medium text-white leading-tight tracking-tight">
                                {content.title}
                            </h2>
                        </motion.div>

                        {/* Top: Approach & Intro */}
                        <div className="grid md:grid-cols-2 gap-12 items-start mb-20">
                            {content.approach && (
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    className="grid gap-6"
                                >
                                    {content.approach.map((step: any, i: number) => (
                                        <div key={i} className="flex gap-4 items-start group">
                                            <div className="bg-[#82ff1f]/10 text-[#82ff1f] w-8 h-8 flex items-center justify-center rounded-full font-bold text-xs shrink-0 mt-1 group-hover:bg-[#82ff1f] group-hover:text-black transition-colors">
                                                {i + 1}
                                            </div>
                                            <div>
                                                <h4 className="text-white font-medium text-base mb-1 group-hover:text-[#82ff1f] transition-colors">{step.title}</h4>
                                                <p className="text-zinc-400 text-sm leading-relaxed">{step.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </motion.div>
                            )}

                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <p className="text-zinc-300 text-lg md:text-xl leading-relaxed border-l-2 border-[#82ff1f] pl-8">
                                    {content.intro}
                                </p>
                            </motion.div>
                        </div>
                    </div>
                ) : (
                    /* Embedded Header: Just Approach and Intro with simpler layout */
                    <div className="mb-12">
                        <div className="grid md:grid-cols-2 gap-8 items-start mb-12">
                            {/* Intro First in Embedded */}
                            <p className="text-zinc-300 text-lg leading-relaxed border-l-2 border-[#82ff1f] pl-6">
                                {content.intro}
                            </p>

                            {content.approach && (
                                <div className="grid gap-4 bg-zinc-900/40 p-6 rounded-2xl border border-zinc-800">
                                    {content.approach.map((step: any, i: number) => (
                                        <div key={i} className="flex gap-3 items-start">
                                            <div className="text-[#82ff1f] font-bold text-xs mt-1 shrink-0">{i + 1}.</div>
                                            <div>
                                                <h4 className="text-white font-medium text-sm mb-0.5">{step.title}</h4>
                                                <p className="text-zinc-500 text-xs">{step.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                )}

                {/* KPI Dashboard */}
                <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 ${isEmbedded ? 'mb-12' : 'mb-24'}`}>
                    {content.metrics.map((metric: any, index: number) => (
                        <div
                            key={index}
                            className={`bg-zinc-900/40 border border-zinc-800 p-8 rounded-3xl group ${isEmbedded ? '' : 'hover:border-[#82ff1f]/30 transition-colors'}`}
                        >
                            <div className="text-3xl md:text-5xl font-medium text-white mb-2 group-hover:text-[#82ff1f] transition-colors tracking-tight">
                                {metric.value}
                            </div>
                            <div className="text-xs font-bold text-zinc-500 uppercase tracking-wider mb-2">
                                {metric.label}
                            </div>
                            {!isEmbedded && (
                                <div className="text-sm text-zinc-400">
                                    {metric.desc}
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Before / After Comparison */}
                <div className="grid md:grid-cols-2 gap-8 mb-20">
                    {/* Before */}
                    <div className="bg-red-950/10 border border-red-900/20 p-8 rounded-sm">
                        <h3 className="text-red-400 font-bold mb-6 flex items-center gap-3 text-xl">
                            <X size={24} /> {content.beforeAfter.before.title}
                        </h3>
                        <ul className="space-y-4">
                            {content.beforeAfter.before.items.map((item: string, i: number) => (
                                <li key={i} className="flex items-start gap-3 text-red-200/60">
                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-500/40 shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* After */}
                    <div className="bg-[#82ff1f]/5 border border-[#82ff1f]/20 p-8 rounded-sm">
                        <h3 className="text-[#82ff1f] font-bold mb-6 flex items-center gap-3 text-xl">
                            <Check size={24} /> {content.beforeAfter.after.title}
                        </h3>
                        <ul className="space-y-4">
                            {content.beforeAfter.after.items.map((item: string, i: number) => (
                                <li key={i} className="flex items-start gap-3 text-white">
                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#82ff1f] shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* SOPs Showcase */}
                <div className="mb-20">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="bg-[#82ff1f] p-3 text-black rounded-sm">
                            <FileText size={24} />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-white">
                                {content.sops.title}
                            </h3>
                            <p className="text-zinc-400">
                                {content.sops.desc}
                            </p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
                        {content.sops.items.map((sop: any, index: number) => (
                            <div
                                key={index}
                                className="bg-zinc-900 border border-zinc-800 p-4 rounded-sm"
                            >
                                <div className="text-[#82ff1f]/40 font-mono text-xs mb-2">SOP-{index + 101}</div>
                                <h4 className="font-bold text-white mb-2 leading-tight min-h-[40px]">
                                    {sop.title}
                                </h4>
                                <p className="text-xs text-zinc-500 leading-relaxed">
                                    {sop.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Insights & Closing */}
                <div className="grid md:grid-cols-3 gap-8 items-stretch mb-20">
                    <div className="md:col-span-2 bg-gradient-to-br from-zinc-900/80 to-black border border-white/5 p-8 rounded-3xl backdrop-blur-sm">
                        <h4 className="text-white font-medium mb-6 flex items-center gap-2 text-xl">
                            <Lightbulb size={24} className="text-[#82ff1f]" /> Insights
                        </h4>
                        <div className="grid sm:grid-cols-2 gap-6">
                            {content.insights.map((insight: string, i: number) => (
                                <div key={i} className="flex gap-3">
                                    <div className="w-1 h-full bg-[#82ff1f]/20 rounded-full" />
                                    <p className="text-zinc-400 text-sm leading-relaxed">
                                        "{insight}"
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-[#82ff1f] p-8 rounded-3xl flex flex-col justify-center relative overflow-hidden shadow-[0_0_40px_-10px_rgba(130,255,31,0.3)]">
                        <div className="absolute top-0 right-0 p-4 opacity-10">
                            <Layers size={140} />
                        </div>
                        <p className="text-black font-medium text-lg leading-relaxed relative z-10 font-sans">
                            {content.closing}
                        </p>
                    </div>
                </div>

                {/* Project Management Expansion Block */}
                {content.projectManagement && (
                    <div className="bg-zinc-900/30 border border-white/5 rounded-3xl p-8 md:p-12 relative overflow-hidden">
                        {/* Subtle Background Gradient */}
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#82ff1f] to-transparent opacity-20" />
                        <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#82ff1f]/5 rounded-full blur-[100px]" />

                        <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
                            <div>
                                <h3 className="text-3xl md:text-4xl font-medium text-white mb-2 leading-tight">
                                    {content.projectManagement.title}
                                </h3>
                                <p className="text-[#82ff1f] text-lg mb-6 font-mono tracking-wide">
                                    {content.projectManagement.subtitle}
                                </p>
                                <p className="text-zinc-400 text-lg leading-relaxed mb-8">
                                    {content.projectManagement.desc}
                                </p>
                            </div>
                            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-md hover:border-[#82ff1f]/20 transition-colors">
                                <h4 className="text-[#82ff1f] font-bold mb-6 uppercase tracking-wider text-xs">Impacto Directo</h4>
                                <ul className="space-y-4">
                                    {content.projectManagement.achievements.map((item: string, i: number) => (
                                        <li key={i} className="flex items-start gap-3 text-zinc-200">
                                            <div className="mt-1 p-1 bg-[#82ff1f]/10 rounded-full">
                                                <CheckCircle2 size={14} className="text-[#82ff1f]" />
                                            </div>
                                            <span className="text-sm">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                )}

            </div>
        </section>
    );
}
