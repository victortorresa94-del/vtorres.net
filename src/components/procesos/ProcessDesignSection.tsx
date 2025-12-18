"use client";

import { useLanguage } from '@/lib/LanguageContext';
import { motion } from 'framer-motion';
import { Settings, Search, Trash2, FileCheck, Users, RefreshCw, BarChart3, Clock, AlertCircle, TrendingUp } from 'lucide-react';

export default function ProcessDesignSection({ isEmbedded = false, mode = 'full' }: { isEmbedded?: boolean; mode?: 'full' | 'phases' | 'kpis' }) {
    const { t } = useLanguage();
    // Use the new proper key, fallback for safety
    const content = (t.procesos.processDesign as any);

    if (!content) return null;

    const icons = [Search, Settings, Trash2, FileCheck, Users, RefreshCw];

    const showPhases = mode === 'full' || mode === 'phases';
    const showKPIs = mode === 'full' || mode === 'kpis';

    return (
        <section className={`${isEmbedded ? 'py-0 px-0 bg-transparent border-0' : 'py-24 px-6 md:px-20 bg-[#050505] border-y border-zinc-900/50'} relative overflow-hidden`}>
            {/* Background Decor - Only if not embedded */}
            {!isEmbedded && <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#82ff1f]/5 rounded-full blur-[100px] pointer-events-none -translate-x-1/2 -translate-y-1/2" />}

            <div className={`${isEmbedded ? 'max-w-full' : 'max-w-7xl mx-auto'} relative z-10`}>

                {/* Header - Hide if embedded */}
                {!isEmbedded ? (
                    <div className="mb-20 text-center max-w-4xl mx-auto">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-5xl font-medium text-white mb-6 tracking-tight"
                        >
                            {content.title}
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-xl md:text-2xl text-[#82ff1f] font-light mb-8"
                        >
                            {content.subtitle}
                        </motion.p>
                    </div>
                ) : (
                    /* If embedded and mode is 'phases', show a small intro text maybe? Or nothing. */
                    /* If mode is 'kpis', maybe a small header? */
                    null
                )}

                {/* 6 PHASES GRID */}
                {showPhases && (
                    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ${showKPIs ? 'mb-24' : ''}`}>
                        {content.phases.map((phase: any, index: number) => {
                            const Icon = icons[index] || Settings;
                            return (
                                <div
                                    key={index}
                                    className={`bg-zinc-900/20 border border-zinc-800 p-8 rounded-3xl group relative overflow-hidden ${isEmbedded ? '' : 'hover:border-[#82ff1f]/30 transition-all'}`}
                                >
                                    {/* Subtle Number Background */}
                                    <div className="absolute -right-4 -top-4 text-9xl font-black text-zinc-800/20 z-0 group-hover:text-[#82ff1f]/5 transition-colors">
                                        {index + 1}
                                    </div>

                                    <div className="relative z-10">
                                        <div className="w-12 h-12 bg-zinc-900 rounded-2xl flex items-center justify-center text-[#82ff1f] mb-6 border border-zinc-800 group-hover:bg-[#82ff1f] group-hover:text-black transition-colors">
                                            <Icon size={24} />
                                        </div>

                                        <h3 className="text-xl font-medium text-white mb-4 group-hover:text-[#82ff1f] transition-colors">
                                            {phase.title}
                                        </h3>

                                        <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                                            {phase.desc}
                                        </p>

                                        <ul className="space-y-2">
                                            {phase.details?.map((detail: string, i: number) => (
                                                <li key={i} className="flex items-center gap-2 text-xs text-zinc-500 font-mono uppercase tracking-wide">
                                                    <span className="w-1 h-1 bg-[#82ff1f] rounded-full" />
                                                    {detail}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}

                {/* KPIS SUB-BLOCK */}
                {showKPIs && (
                    <div className={`${isEmbedded ? 'bg-transparent border-0 p-0' : 'bg-zinc-900/30 border border-zinc-800 p-8 md:p-12 rounded-[2rem]'}`}>

                        {!isEmbedded && (
                            <div className="mb-12 text-center md:text-left">
                                <h3 className="text-2xl md:text-3xl font-medium text-white mb-2">
                                    {content.kpis.sectionTitle}
                                </h3>
                                <div className="h-1 w-20 bg-[#82ff1f] rounded-full mx-auto md:mx-0 opacity-50"></div>
                            </div>
                        )}

                        <div className="grid md:grid-cols-2 gap-12">
                            {/* Macro KPIs */}
                            <div>
                                <h4 className="text-xl font-medium text-zinc-300 mb-8 flex items-center gap-3">
                                    <TrendingUp className="text-[#82ff1f]" size={24} />
                                    {content.kpis.macro.title}
                                </h4>
                                <div className="grid grid-cols-1 gap-6">
                                    {content.kpis.macro.items.map((item: any, i: number) => (
                                        <div key={i} className="flex items-center justify-between p-4 border-b border-zinc-800">
                                            <span className="text-zinc-400">{item.label}</span>
                                            <span className="text-2xl md:text-3xl font-medium text-white">{item.value}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Micro KPIs */}
                            <div>
                                <h4 className="text-xl font-medium text-zinc-300 mb-8 flex items-center gap-3">
                                    <BarChart3 className="text-[#82ff1f]" size={24} />
                                    {content.kpis.micro.title}
                                </h4>
                                <div className="space-y-4">
                                    {content.kpis.micro.items.map((item: any, i: number) => (
                                        <div key={i} className="bg-zinc-950 p-4 rounded-xl border border-zinc-900/50 flex items-center justify-between group hover:border-[#82ff1f]/20 transition-colors">
                                            <div className="flex items-center gap-4">
                                                {/* Dynamic Icon Selection */}
                                                {i === 0 && <Clock size={20} className="text-[#82ff1f]" />}
                                                {i === 1 && <RefreshCw size={20} className="text-[#82ff1f]" />}
                                                {i === 2 && <FileCheck size={20} className="text-[#82ff1f]" />}
                                                {i === 3 && <AlertCircle size={20} className="text-[#82ff1f]" />}
                                                {i === 4 && <TrendingUp size={20} className="text-[#82ff1f]" />}

                                                <div>
                                                    <span className="text-zinc-200 font-medium block">{item.label}</span>
                                                    <span className="text-xs text-zinc-500 uppercase tracking-wide max-w-[200px] block mt-1">{item.desc}</span>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                    </div>
                )}

            </div>
        </section>
    );
}
