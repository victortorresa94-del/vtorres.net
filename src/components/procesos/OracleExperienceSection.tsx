"use client";

import { useLanguage } from '@/lib/LanguageContext';
import { motion } from 'framer-motion';
import { Ship, Globe, Database, Search, ArrowRightLeft, Layers, CheckCircle2, Map, Users, Calendar, Building2, CircuitBoard } from 'lucide-react';

export default function OracleExperienceSection({ isEmbedded = false }: { isEmbedded?: boolean }) {
    const { t } = useLanguage();
    const content = (t.procesos.oracleExperience as any);

    if (!content) return null;

    return (
        <section className={`${isEmbedded ? 'py-0 px-0 border-0 bg-transparent' : 'py-24 px-6 md:px-20 bg-zinc-950 border-t border-zinc-900'} overflow-hidden relative`}>

            {!isEmbedded && (
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <Globe className="absolute -right-20 top-20 w-[600px] h-[600px] text-zinc-800" strokeWidth={0.5} />
                </div>
            )}

            <div className={`${isEmbedded ? '' : 'max-w-7xl mx-auto'} relative z-10 space-y-16`}>

                {/* 1. CONTEXT BLOCK - Left Text / Right Metrics */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Left: Context Narrative */}
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-mono uppercase tracking-widest mb-6">
                            <Ship size={14} />
                            <span>Operational Context</span>
                        </div>
                        <h3 className="text-2xl font-medium text-white mb-6">
                            {content.company}
                        </h3>
                        <p className="text-zinc-400 leading-relaxed text-sm md:text-base">
                            {content.context.intro}
                        </p>
                    </div>

                    {/* Right: Metrics Cards */}
                    <div className="grid grid-cols-2 gap-4">
                        {content.context.metrics.map((metric: any, i: number) => (
                            <div key={i} className="bg-zinc-900/50 border border-zinc-800 p-5 rounded-xl">
                                <span className="block text-2xl md:text-3xl font-bold text-white mb-1">{metric.value}</span>
                                <span className="block text-[10px] md:text-xs text-zinc-500 uppercase tracking-widest leading-tight">{metric.label}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 2. PROJECT TYPE BANNER */}
                <div className="bg-zinc-900/40 border-y border-zinc-800 py-12 px-4 md:px-12 -mx-4 md:-mx-12 rounded-3xl">
                    <div className="max-w-4xl mx-auto text-center space-y-4">
                        <div className="inline-flex items-center gap-2 text-[#fa2828] mb-2">
                            <Database size={20} />
                            <span className="font-mono uppercase tracking-widest text-sm">ERP CORE MIGRATION</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-medium text-white">
                            {content.projectType.title}
                        </h2>
                        <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
                            {content.projectType.desc}
                        </p>
                    </div>
                </div>

                {/* 3. CORE BLOCK - BDR (Left) vs IMPACT (Right) */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16">

                    {/* Left: MY WORK (BDR) - 7 Columns */}
                    <div className="lg:col-span-7 space-y-8">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400">
                                <CircuitBoard size={24} />
                            </div>
                            <h4 className="text-xl font-medium text-white">
                                {content.bdr.title}
                            </h4>
                        </div>

                        <div className="space-y-4">
                            {content.bdr.cards.map((card: any, i: number) => (
                                <div key={i} className="bg-zinc-900/20 border border-zinc-800/50 p-6 rounded-xl hover:bg-zinc-900/40 transition-colors flex gap-5">
                                    <div className="mt-1 text-zinc-500 shrink-0">
                                        {i === 0 && <Search size={20} />}
                                        {i === 1 && <ArrowRightLeft size={20} />}
                                        {i === 2 && <Layers size={20} />}
                                    </div>
                                    <div>
                                        <h5 className="text-white font-medium mb-2">{card.title}</h5>
                                        <p className="text-zinc-400 text-sm">{card.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: IMPACT - 5 Columns */}
                    <div className="lg:col-span-5 flex flex-col">
                        <div className="bg-[#82ff1f]/5 border border-[#82ff1f]/20 p-8 rounded-2xl h-full flex flex-col">
                            <h4 className="text-lg font-bold text-[#82ff1f] uppercase tracking-widest mb-8 flex items-center gap-2">
                                <CheckCircle2 size={18} />
                                {content.impact.title}
                            </h4>

                            <ul className="space-y-6 mb-12 flex-grow">
                                {content.impact.items.map((item: string, i: number) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <div className="w-1.5 h-1.5 mt-2 rounded-full bg-[#82ff1f] shrink-0" />
                                        <span className="text-white text-base leading-relaxed">{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="border-t border-[#82ff1f]/20 pt-8">
                                <p className="text-zinc-300 italic font-light text-lg">
                                    "{content.impact.closing}"
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 4. SCOPE - Bottom Grid */}
                <div className="pt-8 border-t border-zinc-900">
                    <h4 className="text-zinc-500 text-sm font-bold uppercase tracking-widest mb-8 text-center md:text-left">
                        {content.scope.title}
                    </h4>

                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                        {content.scope.items.map((item: string, i: number) => (
                            <div key={i} className="bg-zinc-950 border border-zinc-900 p-4 rounded-lg flex flex-col items-center text-center md:items-start md:text-left hover:border-zinc-800 transition-colors group">
                                <div className="mb-3 text-[#82ff1f] group-hover:text-white transition-colors">
                                    {i === 0 && <Map size={18} />}
                                    {i === 1 && <Building2 size={18} />}
                                    {i === 2 && <Calendar size={18} />}
                                    {i === 3 && <Users size={18} />}
                                    {i === 4 && <Globe size={18} />}
                                </div>
                                <span className="text-xs text-zinc-400 font-medium leading-tight">
                                    {item}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
