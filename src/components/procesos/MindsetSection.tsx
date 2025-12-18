"use client";

import { useLanguage } from '@/lib/LanguageContext';
import { motion } from 'framer-motion';

export default function MindsetSection() {
    const { t } = useLanguage();

    return (
        <section className="py-24 px-6 md:px-20 bg-[#0a0a0a]">
            <div className="max-w-6xl mx-auto">
                <div className="mb-20">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                        {t.procesos.mindset.title}
                    </h2>
                    <p className="text-xl text-zinc-500 font-light">
                        {t.procesos.mindset.subtitle}
                    </p>
                </div>

                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-[15px] md:left-1/2 top-0 bottom-0 w-[1px] bg-zinc-800 md:-translate-x-1/2" />

                    <div className="space-y-12 md:space-y-24">
                        {t.procesos.mindset.phases.map((phase: any, index: number) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className={`relative flex flex-col md:flex-row gap-8 md:gap-20 items-start ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
                            >
                                {/* Dot on timeline */}
                                <div className="absolute left-0 md:left-1/2 w-8 h-8 rounded-full bg-[#0a0a0a] border border-zinc-700 flex items-center justify-center md:-translate-x-1/2 z-10 shrink-0">
                                    <div className="w-2 h-2 rounded-full bg-[#82ff1f]" />
                                </div>

                                {/* Content */}
                                <div className="pl-12 md:pl-0 w-full md:w-1/2 text-left">
                                    <div className={`p-6 border border-zinc-800 rounded-sm bg-[#050505] hover:border-[#82ff1f]/30 transition-colors group ${index % 2 !== 0 ? 'md:mr-auto' : 'md:ml-auto'}`}>
                                        <div className="text-[#82ff1f] font-mono text-sm mb-2 opacity-50 font-bold tracking-widest">
                                            {phase.step}
                                        </div>
                                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#82ff1f] transition-colors">
                                            {phase.title}
                                        </h3>
                                        <p className="text-zinc-400 text-sm leading-relaxed">
                                            {phase.desc}
                                        </p>
                                    </div>
                                </div>

                                {/* Empty side for desktop spacing */}
                                <div className="hidden md:block w-1/2" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
