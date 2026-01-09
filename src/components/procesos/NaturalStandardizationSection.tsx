"use client";

import { useLanguage } from '@/lib/LanguageContext';
import { motion } from 'framer-motion';
import { FileText, Package, Music, ArrowRight, BrainCircuit } from 'lucide-react';

export default function NaturalStandardizationSection({ isEmbedded = false }: { isEmbedded?: boolean }) {
    const { t } = useLanguage();
    const automation = (t.procesos.automation as any);

    if (!automation) return null;

    // Extract cases from the first section of automation (Pre-AI)
    const cases = automation.sections?.[0]?.items || [];

    const icons = {
        "FileText": FileText,
        "Package": Package,
        "Music": Music
    };

    return (
        <section className={`${isEmbedded ? 'py-0 px-0 bg-transparent border-0' : 'py-24 px-6 md:px-20 bg-zinc-950 border-t border-zinc-900'}`}>
            <div className={`${isEmbedded ? 'max-w-full' : 'max-w-6xl mx-auto'}`}>

                {/* Header - Hide if embedded */}
                {!isEmbedded ? (
                    <div className="mb-20 text-center md:text-left max-w-4xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#82ff1f]/10 text-[#82ff1f] text-xs font-mono uppercase tracking-widest mb-6">
                            <BrainCircuit size={14} />
                            <span>Natural Skillset</span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-medium text-white mb-6 tracking-tight">
                            {automation.title}
                        </h2>
                        <h3 className="text-xl md:text-2xl text-zinc-400 font-light mb-8">
                            {automation.subtitle}
                        </h3>
                        <p className="text-zinc-500 text-lg leading-relaxed max-w-2xl">
                            {automation.intro}
                        </p>
                    </div>
                ) : (
                    /* Embedded Header */
                    <div className="mb-12">
                        <p className="text-zinc-400 text-lg leading-relaxed max-w-3xl">
                            {automation.intro}
                        </p>
                    </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
                    {cases.map((item: any, index: number) => {
                        return (
                            <div
                                key={index}
                                className={`bg-zinc-900/30 border border-zinc-800 p-8 rounded-2xl group flex flex-col ${isEmbedded ? '' : 'hover:bg-zinc-900/50 transition-colors'}`}
                            >
                                <div className="mb-6 flex items-center justify-between">
                                    <div className="w-12 h-12 rounded-xl bg-zinc-900 flex items-center justify-center text-zinc-500 group-hover:text-[#82ff1f] group-hover:bg-[#82ff1f]/10 transition-all">
                                        <FileText size={24} />
                                    </div>
                                    <span className="text-xs font-mono text-[#82ff1f] uppercase tracking-wider">
                                        {item.role}
                                    </span>
                                </div>

                                <h4 className="text-xl font-medium text-white mb-4">
                                    {item.company}
                                </h4>

                                <div className="space-y-4 mb-6 flex-grow">
                                    <p className="text-zinc-400 text-sm leading-relaxed">
                                        {item.text}
                                    </p>
                                </div>

                                <div className="flex gap-2 flex-wrap">
                                    {item.tags?.map((tag: string, tIndex: number) => (
                                        <span key={tIndex} className="text-xs text-zinc-600 bg-zinc-900 px-2 py-1 rounded border border-zinc-800">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="text-center max-w-2xl mx-auto border-t border-zinc-900 pt-12">
                    <p className="text-xl md:text-2xl text-white font-medium italic">
                        "{automation.question}"
                    </p>
                </div>

            </div>
        </section>
    );
}
