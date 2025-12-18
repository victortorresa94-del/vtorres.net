"use client";

import { useLanguage } from '@/lib/LanguageContext';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function ContactSection() {
    const { t } = useLanguage();

    return (
        <section className="py-24 px-6 md:px-20 bg-[#050505] border-t border-zinc-900 relative">
            <div className="max-w-5xl mx-auto">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row items-center justify-between gap-12"
                >
                    <div className="text-left max-w-2xl">
                        <h2 className="text-4xl md:text-6xl font-medium text-white mb-6 tracking-tight leading-tight">
                            ¿Optimizamos tu operación?
                        </h2>
                        <p className="text-xl md:text-2xl text-zinc-400 font-light leading-relaxed">
                            Transformo el caos en sistemas escalables. <br />
                            <span className="text-[#82ff1f]">Resultados medibles desde el primer mes.</span>
                        </p>
                    </div>

                    <a
                        href="mailto:hola@vtorres.net"
                        className="group relative inline-flex items-center gap-4 px-8 py-5 bg-zinc-100 text-black rounded-full text-lg font-medium transition-all hover:bg-[#82ff1f] hover:scale-[1.02]"
                    >
                        <span>Reservar Consultoría</span>
                        <div className="w-8 h-8 bg-black/10 rounded-full flex items-center justify-center group-hover:bg-black/20 transition-colors">
                            <ArrowRight size={18} className="text-black" />
                        </div>
                    </a>

                </motion.div>

                {/* Footer Copyright inside layout */}
                <div className="mt-24 pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center text-zinc-600 text-xs tracking-widest uppercase">
                    <p>© {new Date().getFullYear()} Víctor Torres Arana</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <Link href="/" className="hover:text-white transition-colors">Inicio</Link>
                        <Link href="/procesos" className="hover:text-white transition-colors">Procesos</Link>
                        <a href="mailto:hola@vtorres.net" className="hover:text-white transition-colors">Email</a>
                    </div>
                </div>

            </div>
        </section>
    );
}
