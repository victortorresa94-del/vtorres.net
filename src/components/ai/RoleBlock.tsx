import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

interface RoleBlockProps {
    content: any;
}

export default function RoleBlock({ content }: RoleBlockProps) {
    return (
        <div className="space-y-20">
            {/* Positioning */}
            <div className="max-w-4xl mx-auto text-center space-y-6">
                <p className="text-xl text-zinc-500 font-light">
                    {content.positioning.negation}
                </p>
                <p className="text-2xl md:text-4xl text-white font-heading font-bold leading-tight">
                    {content.positioning.affirmation}
                </p>
            </div>

            {/* Definition */}
            <div className="max-w-4xl mx-auto">
                <p className="text-xl md:text-2xl text-zinc-300 font-light leading-relaxed text-center">
                    {content.definition}
                </p>
            </div>

            {/* Responsibilities */}
            <div className="max-w-5xl mx-auto space-y-8">
                <h3 className="text-2xl md:text-3xl font-heading font-bold text-white text-center mb-12">
                    Qué hago exactamente
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {content.responsibilities.map((resp: any, i: number) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="p-6 bg-zinc-900/30 border border-white/5 rounded-xl hover:border-[#82ff1f]/30 transition-all space-y-3"
                        >
                            <div className="flex items-start gap-3">
                                <span className="text-2xl font-heading font-bold text-[#82ff1f]">{i + 1}</span>
                                <div>
                                    <h4 className="text-lg font-heading font-bold text-white mb-2">{resp.title}</h4>
                                    <p className="text-zinc-400 font-light leading-relaxed">{resp.desc}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Position */}
            <div className="bg-[#82ff1f]/5 border border-[#82ff1f]/20 rounded-2xl p-8 md:p-12 space-y-6 max-w-4xl mx-auto">
                <h3 className="text-2xl font-heading font-bold text-white text-center">{content.position.title}</h3>
                <p className="text-xl text-zinc-200 font-light leading-relaxed text-center">
                    {content.position.desc}
                </p>
            </div>

            {/* Problems */}
            <div className="max-w-4xl mx-auto space-y-8">
                <h3 className="text-2xl md:text-3xl font-heading font-bold text-white text-center">
                    {content.problems.title}
                </h3>
                <div className="space-y-4">
                    {content.problems.items.map((problem: string, i: number) => (
                        <div
                            key={i}
                            className="flex items-start gap-4 p-4 border border-white/5 rounded-lg hover:border-white/10 transition-all"
                        >
                            <div className="w-1.5 h-1.5 rounded-full bg-[#82ff1f] mt-2 shrink-0" />
                            <p className="text-zinc-300 font-light">{problem}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Differential */}
            <div className="max-w-4xl mx-auto text-center space-y-6">
                <p className="text-xl md:text-2xl text-white font-light leading-relaxed italic border-l-2 border-[#82ff1f] pl-6 py-2 inline-block text-left">
                    "{content.differential}"
                </p>
            </div>

            {/* Closure */}
            <div className="text-center">
                <p className="text-2xl md:text-3xl text-white font-heading font-bold max-w-3xl mx-auto leading-tight">
                    {content.closure}
                </p>
            </div>
        </div>
    );
}
