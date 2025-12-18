"use client";

import { useLanguage } from '@/lib/LanguageContext';
import { motion } from 'framer-motion';

export default function MethodologySection() {
    const { t } = useLanguage();

    return (
        <section className="py-24 px-6 md:px-20 bg-[#0a0a0a] border-y border-zinc-900">
            <div className="max-w-6xl mx-auto">
                <div className="mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        {t.procesos.methodology.title}
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {t.procesos.methodology.items.map((item: any, index: number) => (
                        <motion.div
                            key={index}
                            whileHover={{ y: -5 }}
                            className="p-8 bg-zinc-900/50 border border-zinc-800 rounded-sm"
                        >
                            <div className="text-4xl font-bold text-zinc-800 mb-4 group-hover:text-[#82ff1f]/20 transition-colors">
                                {['LEAN', 'SCRUM', 'KAIZEN'][index]}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">
                                {item.name}
                            </h3>
                            <p className="text-zinc-400 text-sm leading-relaxed">
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
