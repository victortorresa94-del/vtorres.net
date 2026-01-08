import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Bot, Phone, GitMerge, Zap, ArrowRight, LayoutDashboard, Brain } from 'lucide-react';

interface AutomationBlockProps {
    content: any;
}

export default function AutomationBlock({ content }: AutomationBlockProps) {
    return (
        <div className="space-y-24">
            {/* Intro Hero */}
            <div className="relative p-6 bg-zinc-900/40 border border-white/5 rounded-2xl overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#82ff1f]/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />

                <div className="relative z-10 text-center space-y-6">
                    <p className="text-lg text-zinc-300 font-light leading-relaxed max-w-4xl mx-auto">
                        {content.intro}
                    </p>

                    {content.question && (
                        <div className="inline-flex items-center gap-3 bg-[#82ff1f]/5 border border-[#82ff1f]/10 rounded-full px-4 py-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#82ff1f] animate-pulse" />
                            <p className="text-[#82ff1f] font-mono text-xs md:text-sm">
                                {content.question}
                            </p>
                        </div>
                    )}
                </div>
            </div>

            {/* Timeline Sections */}
            <div className="relative border-l border-white/10 ml-4 md:ml-12 space-y-20 py-8">
                {content.sections.map((section: any, i: number) => {
                    const isLast = i === content.sections.length - 1;

                    return (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ delay: i * 0.1 }}
                            className="relative pl-8 md:pl-16"
                        >
                            {/* Timeline Node */}
                            <div className="absolute -left-[5px] top-0 w-2.5 h-2.5 rounded-full bg-[#82ff1f] ring-4 ring-black" />

                            <div className="space-y-8">
                                <div className="space-y-4">
                                    <h3 className="text-2xl md:text-3xl font-heading font-bold text-white">{section.title}</h3>
                                    {section.desc && <p className="text-xl text-zinc-400 font-light max-w-3xl">{section.desc}</p>}
                                </div>

                                {section.context && (
                                    <div className="bg-[#82ff1f]/5 border border-[#82ff1f]/20 p-6 md:p-8 rounded-2xl text-zinc-300 leading-relaxed whitespace-pre-line">
                                        {section.context}
                                    </div>
                                )}

                                {/* Special Layout for Section 3 (AI Systems) - or generic grid if "applications" or "cardItems" exist */}
                                {section.applications || section.cardLayout ? (
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                                        {section.applications && (
                                            <div className="col-span-full mb-4">
                                                <p className="text-white text-lg font-heading font-bold flex items-center gap-2">
                                                    <Brain className="text-[#82ff1f]" size={20} />
                                                    {section.applications}
                                                </p>
                                            </div>
                                        )}

                                        {section.items && section.items.map((item: any, idx: number) => {
                                            // Handle both string items and object items
                                            const isObject = typeof item === 'object';
                                            const text = isObject ? item.title : item;
                                            const desc = isObject ? item.desc : null;
                                            const icons = [Phone, Bot, GitMerge, LayoutDashboard];
                                            const Icon = icons[idx % icons.length]; // Fallback icon logic if not customized

                                            return (
                                                <div key={idx} className="group p-6 bg-zinc-900 border border-white/10 rounded-xl hover:border-[#82ff1f]/50 transition-all hover:bg-[#82ff1f]/5">
                                                    <div className="flex items-start gap-4">
                                                        <div className="p-3 bg-white/5 rounded-lg text-zinc-400 group-hover:text-[#82ff1f] group-hover:bg-[#82ff1f]/10 transition-colors">
                                                            <Icon size={24} />
                                                        </div>
                                                        <div>
                                                            <p className="text-zinc-200 font-heading font-bold">{text}</p>
                                                            {desc && <p className="text-zinc-500 text-sm mt-1">{desc}</p>}
                                                        </div>
                                                    </div>
                                                </div>
                                            );
                                        })}

                                        {section.examples && (
                                            <div className="col-span-full mt-4 p-4 bg-[#82ff1f]/5 border border-[#82ff1f]/10 rounded-lg flex items-center gap-3">
                                                <div className="w-1.5 h-1.5 rounded-full bg-[#82ff1f]" />
                                                <p className="text-sm text-zinc-400">
                                                    <span className="text-[#82ff1f] font-mono uppercase text-xs mr-2">Casos Reales</span>
                                                    {section.examples}
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                ) : (
                                    <ul className="grid grid-cols-1 gap-4">
                                        {section.items.map((item: any, idx: number) => {
                                            const isObject = typeof item === 'object';
                                            const text = isObject ? item.title : item;
                                            const desc = isObject ? item.desc : null;

                                            return (
                                                <li key={idx} className="flex items-start gap-4 p-5 bg-zinc-900/50 border border-white/5 rounded-xl hover:border-[#82ff1f]/30 transition-colors">
                                                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#82ff1f] shrink-0" />
                                                    <div className="space-y-1">
                                                        <span className="text-zinc-200 font-heading font-bold block">{text}</span>
                                                        {desc && (
                                                            <p className="text-zinc-400 text-sm leading-relaxed">{desc}</p>
                                                        )}
                                                    </div>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                )}

                                {section.highlight && (
                                    <div className="relative overflow-hidden p-8 bg-gradient-to-br from-[#82ff1f]/10 to-transparent border border-[#82ff1f]/20 rounded-2xl group">
                                        <div className="absolute top-0 right-0 p-32 bg-[#82ff1f]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

                                        <div className="relative z-10 space-y-6">
                                            <div className="space-y-2">
                                                <h4 className="text-white font-heading font-bold text-xl flex items-center gap-3">
                                                    <Zap className="text-[#82ff1f]" />
                                                    {section.highlight.title}
                                                </h4>
                                                <p className="text-zinc-400 max-w-2xl">{section.highlight.desc}</p>
                                            </div>

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                {section.highlight.items.map((item: string, idx: number) => (
                                                    <div key={idx} className="flex items-center gap-3 bg-black/20 p-3 rounded-lg border border-white/5">
                                                        <CheckCircle2 size={16} className="text-[#82ff1f] shrink-0" />
                                                        <span className="text-zinc-300 text-sm">{item}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {section.closure && (
                                    <p className="text-white/80 font-heading font-bold italic border-l-2 border-[#82ff1f] pl-4 py-2">
                                        "{section.closure}"
                                    </p>
                                )}
                            </div>
                        </motion.div>
                    );
                })}
            </div>

            {/* Criteria Grid - Only render if criteria exists */}
            {content.criteria && (
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                    {/* Intro Card */}
                    <div className="md:col-span-4 bg-zinc-900 border border-white/10 p-8 rounded-2xl flex flex-col justify-center space-y-4">
                        <h3 className="text-2xl font-heading font-bold text-white">{content.criteria.title}</h3>
                        <p className="text-zinc-400">{content.criteria.intro}</p>
                        <div className="w-12 h-1 bg-[#82ff1f] rounded-full" />
                    </div>

                    {/* Negatives */}
                    <div className="md:col-span-4 bg-red-500/5 border border-red-500/10 p-8 rounded-2xl space-y-4">
                        <p className="text-red-400 font-mono text-sm uppercase tracking-wider mb-4">No automatizo si...</p>
                        <ul className="space-y-3">
                            {content.criteria.negatives.map((item: string, i: number) => (
                                <li key={i} className="flex items-start gap-3 text-zinc-400 text-sm">
                                    <span className="text-red-500 text-lg leading-none">×</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Positives */}
                    <div className="md:col-span-4 bg-[#82ff1f]/5 border border-[#82ff1f]/10 p-8 rounded-2xl space-y-4">
                        <p className="text-[#82ff1f] font-mono text-sm uppercase tracking-wider mb-4">{content.criteria.conditions}</p>
                        <ul className="space-y-3">
                            {content.criteria.positives.map((item: string, i: number) => (
                                <li key={i} className="flex items-start gap-3 text-zinc-300 text-sm">
                                    <CheckCircle2 size={16} className="text-[#82ff1f] mt-0.5" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}

            {/* Principle Quote - Only render if criteria exists or we have a specific quote field */}
            {content.criteria && content.criteria.principle && (
                <div className="text-center py-12 border-t border-white/5">
                    <p className="text-2xl md:text-3xl text-white font-light italic max-w-3xl mx-auto">
                        "{content.criteria.principle}"
                    </p>
                    <p className="mt-4 text-zinc-500 text-sm tracking-widest uppercase">
                        Principio Fundamental
                    </p>
                </div>
            )}
        </div>
    );
}
