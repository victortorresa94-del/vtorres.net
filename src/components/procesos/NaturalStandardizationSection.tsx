"use client";

import { useLanguage } from '@/lib/LanguageContext';
import { motion } from 'framer-motion';
import { FileText, Package, Music, ArrowRight, BrainCircuit } from 'lucide-react';

export default function NaturalStandardizationSection({ isEmbedded = false }: { isEmbedded?: boolean }) {
    const { t } = useLanguage();
    const content = (t.procesos.naturalStandardization as any);

    if (!content) return null;

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
                            {content.title}
                        </h2>
                        <h3 className="text-xl md:text-2xl text-zinc-400 font-light mb-8">
                            {content.subtitle}
                        </h3>
                        <p className="text-zinc-500 text-lg leading-relaxed max-w-2xl">
                            {content.intro}
                        </p>
                    </div>
                ) : (
                    /* Embedded Header */
                    <div className="mb-12">
                        <p className="text-zinc-400 text-lg leading-relaxed max-w-3xl">
                            {content.intro}
                        </p>
                    </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {content.cases.map((item: any, index: number) => {
                        // Dynamic icon component
                        const IconComponent = icons[item.icon as keyof typeof icons] || FileText;

                        return (
                            <div
                                key={index}
                                className={`bg-zinc-900/30 border border-zinc-800 p-8 rounded-2xl group flex flex-col ${isEmbedded ? '' : 'hover:bg-zinc-900/50 transition-colors'}`}
                            >
                                <div className="mb-6 w-12 h-12 rounded-xl bg-zinc-900 flex items-center justify-center text-zinc-500 group-hover:text-[#82ff1f] group-hover:bg-[#82ff1f]/10 transition-all">
                                    <IconComponent size={24} />
                                </div>

                                <div className="mb-6">
                                    <span className="text-xs font-mono text-[#82ff1f] uppercase tracking-wider mb-2 block">
                                        {item.context}
                                    </span>
                                    <h4 className="text-xl font-medium text-white">
                                        {item.company}
                                    </h4>
                                </div>

                                <div className="space-y-4 mb-8 flex-grow">
                                    <div>
                                        <p className="text-xs text-zinc-600 uppercase font-bold mb-1">Problem</p>
                                        <p className="text-zinc-400 text-sm leading-relaxed">{item.problem}</p>
                                    </div>
                                    <div>
                                        <p className="text-xs text-zinc-600 uppercase font-bold mb-1">Solution</p>
                                        <p className="text-zinc-300 text-sm leading-relaxed">{item.solution}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="text-center max-w-2xl mx-auto border-t border-zinc-900 pt-12">
                    <p className="text-xl md:text-2xl text-white font-medium italic">
                        "{content.closing}"
                    </p>
                </div>

            </div>
        </section>
    );
}
