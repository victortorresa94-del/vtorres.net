"use client";

import { useLanguage } from '@/lib/LanguageContext';
import { motion } from 'framer-motion';
import { Ship, Anchor, Globe, Database, FileSearch, ArrowRight } from 'lucide-react';

export default function OracleExperienceSection({ isEmbedded = false }: { isEmbedded?: boolean }) {
    const { t } = useLanguage();
    const content = (t.procesos.oracleExperience as any);

    if (!content) return null;

    return (
        <section className={`${isEmbedded ? 'py-0 px-0 border-0 bg-transparent' : 'py-24 px-6 md:px-20 bg-zinc-950 border-t border-zinc-900'} overflow-hidden relative`}>

            {/* Background Map/Globe Effect (Subtle) - Only if not embedded or maybe simpler? Keep it. */}
            {!isEmbedded && (
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <Globe className="absolute -right-20 top-20 w-[600px] h-[600px] text-zinc-800" strokeWidth={0.5} />
                </div>
            )}

            <div className={`${isEmbedded ? '' : 'max-w-7xl mx-auto'} relative z-10`}>

                {/* Header Block - Hide if embedded because title is in Accordion Header */}
                {!isEmbedded ? (
                    <div className="mb-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#fa2828]/10 text-[#fa2828] text-xs font-mono uppercase tracking-widest mb-6">
                                <Database size={14} />
                                <span>Oracle NetSuite ERP Transformation</span>
                            </div>
                            <h2 className="text-3xl md:text-5xl font-medium text-white mb-6 leading-tight">
                                {content.title}
                            </h2>
                            <h3 className="text-xl md:text-2xl text-zinc-400 font-light mb-8 max-w-xl">
                                {content.subtitle}
                            </h3>

                            <div className="flex flex-col gap-2 border-l-2 border-zinc-800 pl-6">
                                <p className="text-zinc-500 text-sm uppercase tracking-wider font-bold">Role</p>
                                <p className="text-white text-lg">{content.role}</p>
                                <p className="text-zinc-500 text-sm uppercase tracking-wider font-bold mt-2">Environment</p>
                                <p className="text-white text-lg">{content.company}</p>
                            </div>
                        </div>

                        {/* Context & Metrics Card */}
                        <div className="bg-zinc-900/40 backdrop-blur-sm border border-zinc-800 p-8 rounded-2xl">
                            <h4 className="text-lg font-medium text-white mb-4 flex items-center gap-2">
                                <Ship size={20} className="text-[#82ff1f]" />
                                Operational Context
                            </h4>
                            <p className="text-zinc-400 text-sm leading-relaxed mb-8">
                                {content.context.intro}
                            </p>

                            <div className="grid grid-cols-3 gap-4">
                                {content.context.metrics.map((metric: any, i: number) => (
                                    <div key={i} className="bg-black/30 p-4 rounded-lg border border-white/5">
                                        <span className="block text-2xl md:text-3xl font-bold text-white mb-1">{metric.value}</span>
                                        <span className="block text-[10px] md:text-xs text-zinc-500 uppercase tracking-widest">{metric.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ) : (
                    /* Embedded version: Just show context/metrics and body */
                    <div className="mb-12">
                        <div className="bg-zinc-900/40 border border-zinc-800 p-6 md:p-8 rounded-2xl mb-12">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div>
                                    <h4 className="text-lg font-medium text-white mb-4 flex items-center gap-2">
                                        <Ship size={20} className="text-[#82ff1f]" />
                                        Operational Context
                                    </h4>
                                    <p className="text-zinc-400 text-sm leading-relaxed">
                                        {content.context.intro}
                                    </p>
                                </div>
                                <div className="grid grid-cols-3 gap-4">
                                    {content.context.metrics.map((metric: any, i: number) => (
                                        <div key={i} className="bg-black/30 p-4 rounded-lg border border-white/5">
                                            <span className="block text-xl md:text-2xl font-bold text-white mb-1">{metric.value}</span>
                                            <span className="block text-[10px] text-zinc-500 uppercase tracking-widest">{metric.label}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Challenge & Methodology Split */}
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 ${isEmbedded ? '' : 'mb-20'}`}>

                    {/* Methodology (Left - Larger) */}
                    <div className="lg:col-span-8 space-y-8">
                        <div>
                            <h4 className="text-2xl font-medium text-white mb-4">
                                {content.methodology.title}
                            </h4>
                            <p className="text-zinc-400 text-lg leading-relaxed max-w-3xl mb-8">
                                {content.methodology.desc}
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {content.methodology.steps.map((step: any, i: number) => (
                                <div key={i} className="bg-zinc-900/20 border border-zinc-800 p-6 rounded-xl hover:border-[#82ff1f]/30 transition-colors group">
                                    <div className="w-10 h-10 rounded-lg bg-zinc-900 flex items-center justify-center text-zinc-500 mb-4 group-hover:text-[#82ff1f] transition-colors">
                                        {i === 0 && <FileSearch size={20} />}
                                        {i === 1 && <Database size={20} />}
                                        {i === 2 && <Anchor size={20} />}
                                    </div>
                                    <h5 className="text-white font-medium mb-3">{step.title}</h5>
                                    <p className="text-zinc-500 text-sm leading-relaxed">
                                        {step.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Impact (Right - Smaller/Highlight) */}
                    <div className="lg:col-span-4 flex flex-col justify-center">
                        <div className="bg-[#82ff1f]/5 border border-[#82ff1f]/20 p-8 rounded-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[#82ff1f]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

                            <h4 className="text-lg font-bold text-[#82ff1f] uppercase tracking-widest mb-6">
                                Project Impact
                            </h4>
                            <p className="text-white text-lg leading-relaxed mb-8">
                                {content.impact}
                            </p>

                            <div className="h-px w-full bg-[#82ff1f]/20 mb-8"></div>

                            <p className="text-zinc-300 italic font-light text-xl">
                                "{content.closing}"
                            </p>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}
