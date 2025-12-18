"use client";

import { useLanguage } from '@/lib/LanguageContext';
import { motion } from 'framer-motion';
import { HeartHandshake, Users, Briefcase, Ear, Repeat, CheckCircle2 } from 'lucide-react';

export default function ChangeManagementSection({ isEmbedded = false }: { isEmbedded?: boolean }) {
    const { t } = useLanguage();
    const content = (t.procesos.changeManagement as any);

    if (!content) return null;

    const icons = {
        "HeartHandshake": HeartHandshake,
        "Users": Users,
        "Briefcase": Briefcase,
        "Ear": Ear,
        "Repeat": Repeat
    };

    return (
        <section className={`${isEmbedded ? 'py-0 px-0 bg-transparent border-0' : 'py-24 px-6 md:px-20 bg-[#000000] border-t border-zinc-900'} relative overflow-hidden`}>

            {/* Simple Decoration - Only if not embedded */}
            {!isEmbedded && (
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#82ff1f]/5 rounded-full blur-[120px] pointer-events-none translate-x-1/2 -translate-y-1/2" />
            )}

            <div className={`${isEmbedded ? 'max-w-full' : 'max-w-6xl mx-auto'} relative z-10`}>

                {/* Header - Hide if embedded, Accordion handles it */}
                {!isEmbedded ? (
                    <div className="mb-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white text-xs font-mono uppercase tracking-widest mb-6">
                                <Users size={14} className="text-[#82ff1f]" />
                                <span>Human-Centric Approach</span>
                            </div>
                            <h2 className="text-3xl md:text-5xl font-medium text-white mb-6 leading-tight">
                                {content.title}
                            </h2>
                            <h3 className="text-xl md:text-2xl text-[#82ff1f] font-light">
                                {content.subtitle}
                            </h3>
                        </div>
                        <div>
                            <p className="text-zinc-400 text-lg leading-relaxed">
                                {content.intro}
                            </p>
                        </div>
                    </div>
                ) : (
                    /* Embedded Header - Simple Intro */
                    <div className="mb-12">
                        <p className="text-zinc-400 text-lg leading-relaxed max-w-3xl">
                            {content.intro}
                        </p>
                    </div>
                )}

                {/* 5 Pillars Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
                    {content.pillars.map((pillar: any, index: number) => {
                        const IconComponent = icons[pillar.icon as keyof typeof icons] || Users;
                        return (
                            <div
                                key={index}
                                className={`bg-zinc-900/20 border border-zinc-800 p-8 rounded-2xl group ${isEmbedded ? '' : 'hover:bg-zinc-900/40 transition-all'}`}
                            >
                                <div className="mb-6 flex items-center justify-between">
                                    <div className="w-12 h-12 rounded-full bg-zinc-900 flex items-center justify-center border border-zinc-800 group-hover:border-[#82ff1f]/50 transition-colors">
                                        <IconComponent size={24} className="text-zinc-500 group-hover:text-[#82ff1f] transition-colors" />
                                    </div>
                                    <span className="text-4xl font-bold text-zinc-900 group-hover:text-zinc-800 transition-colors">0{index + 1}</span>
                                </div>
                                <h4 className="text-xl font-medium text-white mb-3 group-hover:text-[#82ff1f] transition-colors">
                                    {pillar.title}
                                </h4>
                                <p className="text-zinc-400 text-sm leading-relaxed">
                                    {pillar.desc}
                                </p>
                            </div>
                        );
                    })}
                </div>

                {/* Impact / Stats */}
                <div className="bg-[#82ff1f]/5 border border-[#82ff1f]/20 rounded-3xl p-8 md:p-12 mb-16">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
                        <h4 className="text-xl md:text-2xl text-white font-medium max-w-xs">
                            {content.impact.text}
                        </h4>

                        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
                            {content.impact.items.map((item: any, i: number) => (
                                <div key={i} className="flex flex-col items-center md:items-start">
                                    <span className="text-4xl md:text-5xl font-bold text-[#82ff1f] mb-2">{item.value}</span>
                                    <span className="text-xs text-zinc-400 uppercase tracking-widest">{item.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Closing */}
                {!isEmbedded && (
                    <div className="text-center max-w-3xl mx-auto">
                        <p className="text-2xl md:text-3xl text-white font-light">
                            "{content.closing}"
                        </p>
                    </div>
                )}
                {isEmbedded && (
                    <div className="p-6 border-t border-zinc-800 text-center">
                        <p className="text-xl text-zinc-300 font-light italic">
                            "{content.closing}"
                        </p>
                    </div>
                )}

            </div>
        </section>
    );
}
