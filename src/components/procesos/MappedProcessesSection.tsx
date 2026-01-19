"use client";

import { useLanguage } from '@/lib/LanguageContext';
import { FileText, CheckCircle2, Building2, TrendingUp, Layers, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function MappedProcessesSection({ isEmbedded = false }: { isEmbedded?: boolean }) {
    const { t } = useLanguage();
    const content = (t.procesos as any).mappedProcesses;

    if (!content) return null;

    return (
        <section className={`py-12 ${isEmbedded ? 'px-0' : 'px-6 md:px-12'} bg-[#050505]`}>
            {!isEmbedded && (
                <div className="mb-12 text-center">
                    <h2 className="text-3xl font-heading font-medium text-white mb-4">{content.title}</h2>
                </div>
            )}

            <div className="space-y-16">
                {content.groups.map((group: any, groupIndex: number) => (
                    <div key={groupIndex} className="relative">
                        {/* Group Header */}
                        <div className="flex items-start gap-4 mb-8">
                            <div className="p-3 bg-white/5 rounded-xl border border-white/10 text-[#82ff1f]">
                                {groupIndex === 0 ? <Building2 size={24} /> : <TrendingUp size={24} />}
                            </div>
                            <div>
                                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{group.title}</h3>
                                <p className="text-zinc-400 text-sm max-w-2xl">{group.desc}</p>
                            </div>
                        </div>

                        {/* Grid of Processes */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {group.items.map((item: any, i: number) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.05 }}
                                    className="p-5 rounded-xl bg-zinc-900/30 border border-white/5 hover:border-[#82ff1f]/30 transition-all group hover:bg-zinc-900/50"
                                >
                                    <h4 className="font-medium text-white mb-2 group-hover:text-[#82ff1f] transition-colors flex items-center gap-2 text-sm">
                                        <Layers size={14} className="text-zinc-600 group-hover:text-[#82ff1f]" />
                                        {item.title}
                                    </h4>
                                    <p className="text-xs text-zinc-500 leading-relaxed group-hover:text-zinc-400 transition-colors">
                                        {item.desc}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
