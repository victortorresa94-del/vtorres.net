import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

interface AutomationBlockProps {
    content: any;
}

export default function AutomationBlock({ content }: AutomationBlockProps) {
    return (
        <div className="space-y-16">
            {/* Intro */}
            <div className="max-w-4xl mx-auto text-center space-y-6">
                <p className="text-xl md:text-2xl text-zinc-300 font-light leading-relaxed">
                    {content.intro}
                </p>
                <p className="text-lg text-[#82ff1f] italic border-l-2 border-[#82ff1f] pl-6 py-2 text-left inline-block">
                    {content.question}
                </p>
            </div>

            {/* Sections */}
            <div className="space-y-16">
                {content.sections.map((section: any, i: number) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="border-l-2 border-white/10 pl-8 space-y-6"
                    >
                        <div>
                            <h3 className="text-2xl md:text-3xl font-medium text-white mb-2">{section.title}</h3>
                            <p className="text-zinc-400 text-lg font-light">{section.desc}</p>
                        </div>

                        {section.context && (
                            <p className="text-zinc-300 leading-relaxed">{section.context}</p>
                        )}

                        <ul className="space-y-3">
                            {section.items.map((item: string, idx: number) => (
                                <li key={idx} className="flex items-start gap-3 text-zinc-400">
                                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#82ff1f] shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>

                        {section.highlight && (
                            <div className="p-6 bg-[#82ff1f]/5 border border-[#82ff1f]/20 rounded-xl space-y-4">
                                <h4 className="text-white font-medium text-lg">{section.highlight.title}</h4>
                                <p className="text-zinc-300">{section.highlight.desc}</p>
                                <ul className="space-y-2">
                                    {section.highlight.items.map((item: string, idx: number) => (
                                        <li key={idx} className="flex items-start gap-2 text-sm text-zinc-400">
                                            <CheckCircle2 size={16} className="mt-0.5 text-[#82ff1f] shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {section.evolution && (
                            <p className="text-zinc-300 leading-relaxed text-lg">{section.evolution}</p>
                        )}

                        {section.applications && (
                            <div className="space-y-3">
                                <p className="text-white font-medium">{section.applications}</p>
                                <ul className="space-y-2">
                                    {section.items && section.items.map((item: string, idx: number) => (
                                        <li key={idx} className="flex items-start gap-3 text-zinc-400">
                                            <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-white/20 shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {section.examples && (
                            <p className="text-sm text-zinc-500 italic">{section.examples}</p>
                        )}

                        {section.closure && (
                            <p className="text-white font-medium italic border-t border-white/10 pt-4">
                                "{section.closure}"
                            </p>
                        )}
                    </motion.div>
                ))}
            </div>

            {/* Criteria */}
            <div className="bg-zinc-900/30 border border-white/5 rounded-2xl p-8 md:p-12 space-y-8">
                <h3 className="text-2xl md:text-3xl font-medium text-white text-center">{content.criteria.title}</h3>
                <p className="text-lg text-zinc-400 text-center">{content.criteria.intro}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                        {content.criteria.negatives.map((item: string, i: number) => (
                            <p key={i} className="text-zinc-500 flex items-start gap-2">
                                <span className="text-red-500 mt-1">×</span>
                                {item}
                            </p>
                        ))}
                    </div>
                    <div className="space-y-4">
                        <p className="text-white font-medium">{content.criteria.conditions}</p>
                        {content.criteria.positives.map((item: string, i: number) => (
                            <p key={i} className="text-[#82ff1f] flex items-start gap-2">
                                <span className="mt-1">✓</span>
                                {item}
                            </p>
                        ))}
                    </div>
                </div>

                <p className="text-center text-xl text-white font-light italic border-t border-white/10 pt-8">
                    {content.criteria.principle}
                </p>
            </div>

            {/* Closure */}
            <p className="text-2xl md:text-3xl text-white font-light text-center max-w-3xl mx-auto leading-tight">
                {content.closure}
            </p>
        </div>
    );
}
