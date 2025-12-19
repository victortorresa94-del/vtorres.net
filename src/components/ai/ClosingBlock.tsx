import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight, XCircle } from 'lucide-react';
import Link from 'next/link';

interface ClosingBlockProps {
    content: any;
}

export default function ClosingBlock({ content }: ClosingBlockProps) {
    return (
        <div className="space-y-24">
            {/* Intro */}
            <div className="max-w-4xl mx-auto text-center space-y-8">
                <p className="text-2xl md:text-3xl text-white font-light leading-relaxed">
                    {content.intro}
                </p>
                <p className="text-xl text-zinc-400 font-light">
                    {content.value}
                </p>
            </div>

            {/* Failures */}
            <div className="max-w-4xl mx-auto space-y-8">
                <p className="text-lg text-zinc-300 text-center">{content.failures.intro}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {content.failures.reasons.map((reason: string, i: number) => (
                        <div
                            key={i}
                            className="flex items-start gap-3 p-4 bg-red-500/5 border border-red-500/20 rounded-lg"
                        >
                            <XCircle size={20} className="text-red-500 mt-1 shrink-0" />
                            <p className="text-zinc-400">{reason}</p>
                        </div>
                    ))}
                </div>
                <p className="text-xl text-white font-medium text-center italic mt-8">
                    {content.failures.statement}
                </p>
            </div>

            {/* Fit */}
            <div className="bg-zinc-900/30 border border-white/5 rounded-2xl p-8 md:p-12 space-y-8">
                <h3 className="text-2xl md:text-3xl font-medium text-white text-center">{content.fit.title}</h3>
                <p className="text-lg text-zinc-400 text-center">{content.fit.intro}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
                    {content.fit.conditions.map((condition: string, i: number) => (
                        <div
                            key={i}
                            className="flex items-start gap-3 p-4 hover:bg-white/5 rounded-lg transition-all"
                        >
                            <CheckCircle2 size={20} className="text-[#82ff1f] mt-1 shrink-0" />
                            <p className="text-zinc-300">{condition}</p>
                        </div>
                    ))}
                </div>
                <p className="text-zinc-400 text-center text-sm border-t border-white/5 pt-6">
                    {content.fit.contexts}
                </p>
            </div>

            {/* Differential */}
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Not */}
                <div className="space-y-6">
                    <h4 className="text-xl font-medium text-zinc-500 text-center">No soy:</h4>
                    <div className="space-y-4">
                        {content.differential.not.map((item: string, i: number) => (
                            <div key={i} className="p-4 bg-zinc-900/50 border border-white/5 rounded-lg">
                                <p className="text-zinc-400 text-center">{item}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Am */}
                <div className="space-y-6">
                    <h4 className="text-xl font-medium text-[#82ff1f] text-center">Soy:</h4>
                    <div className="p-6 bg-[#82ff1f]/5 border border-[#82ff1f]/20 rounded-lg">
                        <p className="text-white text-lg leading-relaxed whitespace-pre-line text-center">
                            {content.differential.am}
                        </p>
                    </div>
                    <div className="space-y-3">
                        {content.differential.actions.map((action: string, i: number) => (
                            <div key={i} className="flex items-start gap-3">
                                <CheckCircle2 size={18} className="text-[#82ff1f] mt-1 shrink-0" />
                                <p className="text-zinc-300">{action}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* AI Vision */}
            <div className="max-w-4xl mx-auto space-y-8 text-center">
                <h3 className="text-2xl md:text-3xl font-medium text-white">{content.aiVision.title}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="p-6 bg-[#82ff1f]/5 border border-[#82ff1f]/20 rounded-xl">
                        <p className="text-zinc-200 leading-relaxed whitespace-pre-line">
                            {content.aiVision.good}
                        </p>
                    </div>
                    <div className="p-6 bg-red-500/5 border border-red-500/20 rounded-xl">
                        <p className="text-zinc-300">{content.aiVision.bad}</p>
                    </div>
                </div>
                <p className="text-xl text-white font-medium italic">
                    {content.aiVision.mission}
                </p>
            </div>

            {/* Positioning */}
            <div className="max-w-5xl mx-auto text-center space-y-12">
                <p className="text-2xl md:text-4xl text-white font-medium leading-tight">
                    {content.positioning}
                </p>
                <p className="text-xl md:text-2xl text-[#82ff1f] font-medium tracking-wide">
                    {content.tagline}
                </p>
            </div>

            {/* CTA */}
            <div className="text-center pt-12">
                <a
                    href="mailto:victortorresa94@gmail.com"
                    className="inline-flex items-center gap-3 bg-[#82ff1f] text-black px-12 py-6 rounded-full text-base font-bold hover:shadow-[0_0_40px_rgba(130,255,31,0.5)] hover:scale-105 transition-all uppercase tracking-widest"
                >
                    {content.cta}
                    <ArrowRight size={20} />
                </a>
            </div>
        </div>
    );
}
