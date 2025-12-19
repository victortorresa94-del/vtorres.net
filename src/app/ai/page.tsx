"use client";

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/LanguageContext';
import {
    Shield, Database, UserCheck, FileSearch, EyeOff,
    MessageSquare, Mic, Zap, GitMerge,
    Users, Briefcase, Ear, Repeat, Target,
    Brain, ArrowRight, CheckCircle2, ChevronDown
} from 'lucide-react';
import AccordionGroup from '@/components/procesos/AccordionGroup';

// Map icon strings to components
const iconMap: Record<string, any> = {
    Shield, Database, UserCheck, FileSearch, EyeOff,
    MessageSquare, Mic, Zap, GitMerge,
    Users, Briefcase, Ear, Repeat, Target,
    Brain
};

export default function AIAdoptionPage() {
    const { t } = useLanguage();
    // Casting to any to access new 'ai' keys safely without strict type checks during dev
    const content = (t as any).ai;
    const common = (t as any).procesos; // Reusing logic for consistency if needed



    // Safety guard with styling to prevent black screen flash
    if (!content) {
        return (
            <div className="min-h-screen bg-[#0B0B0B] flex items-center justify-center text-zinc-500">
                <div className="animate-pulse">Cargando contenido...</div>
            </div>
        );
    }

    return (
        <main className="min-h-screen bg-[#0B0B0B] text-white selection:bg-[#82ff1f] selection:text-black font-sans overflow-x-hidden">

            {/* Header / Nav */}
            <nav className="fixed top-0 w-full z-50 px-6 md:px-12 py-6 flex justify-between items-center bg-[#0B0B0B]/90 backdrop-blur-md border-b border-white/5">
                <div className="flex items-center gap-4">
                    <Link href="/" className="text-sm font-bold tracking-widest text-zinc-500 hover:text-[#82ff1f] transition-colors uppercase">
                        vtorres.net <span className="text-white/20">/</span> ai
                    </Link>
                    <Link href="/" className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-[10px] md:text-xs font-bold text-zinc-300 hover:bg-white/10 hover:border-[#82ff1f] transition-all uppercase tracking-wider whitespace-nowrap">
                        Ver mi CV
                    </Link>
                </div>
            </nav>

            {/* BLOCK 1: HERO (60/40 Split) */}
            <section className="relative min-h-screen flex flex-col pt-32 md:pt-0 md:justify-center px-6 md:px-12 overflow-hidden">
                <div className="max-w-[1400px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:items-center h-full">

                    {/* Left: Content (60%) */}
                    <div className="lg:col-span-7 space-y-10 relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#82ff1f]/5 border border-[#82ff1f]/20"
                        >
                            <div className="w-1.5 h-1.5 rounded-full bg-[#82ff1f] animate-pulse" />
                            <span className="text-[#82ff1f] text-[10px] font-bold tracking-[0.2em] uppercase">
                                {content.hero.eyebrow}
                            </span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.95] text-white"
                        >
                            <span className="block text-white">Adopción</span>
                            <span className="block text-[#82ff1f]">Responsable</span>
                            <span className="block text-zinc-500">de IA</span>
                        </motion.h1>

                        <motion.h2
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                            className="text-xl md:text-2xl text-zinc-400 font-light max-w-2xl leading-relaxed"
                        >
                            {content.hero.subtitle}
                        </motion.h2>

                        {/* Chips */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5, duration: 0.6 }}
                            className="flex flex-wrap gap-3"
                        >
                            {["Procesos", "Gobernanza", "Cambio Cultural", "Formación"].map((tag, i) => (
                                <span key={tag} className="px-4 py-2 rounded-full border border-white/10 text-[10px] uppercase tracking-widest text-zinc-400 hover:bg-[#82ff1f] hover:text-black hover:border-[#82ff1f] transition-all cursor-default">
                                    {tag}
                                </span>
                            ))}
                        </motion.div>
                    </div>

                    {/* Right: Portrait (40%) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="lg:col-span-5 relative h-[50vh] lg:h-[70vh] w-full"
                    >
                        <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/5 bg-zinc-900 shadow-2xl group">
                            <Image
                                src="/images/profile.jpg"
                                alt="Víctor Torres"
                                fill
                                className="object-cover object-top grayscale hover:grayscale-0 transition-all duration-700"
                                priority
                            />
                            {/* Inner Glow */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                        </div>
                    </motion.div>
                </div>

                {/* Bottom Hero Block */}
                <div className="max-w-[1400px] mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 mt-20 md:mt-32 pb-20 border-t border-white/5 pt-12">
                    <div className="text-lg md:text-xl text-zinc-300 font-light leading-relaxed">
                        <p className="max-w-xl">
                            <span className="font-bold text-white block mb-2">{content.hero.desc.split('. ')[0]}.</span>
                            {content.hero.desc.split('. ').slice(1).join('. ')}
                        </p>
                    </div>
                    <div className="flex flex-col justify-between items-start">
                        <p className="text-zinc-500 font-light text-sm max-w-sm mb-6">
                            He liderado adopciones de IA en entornos donde los datos importan, los errores cuestan dinero y las personas necesitan entender qué está pasando.
                        </p>
                        <Link href="#enfoque" className="inline-flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-white hover:text-[#82ff1f] group transition-colors">
                            {content.hero.cta}
                            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* BLOCK 2: APPROACH (Manifesto) */}
            <section id="enfoque" className="py-32 px-6 md:px-12 bg-[#0B0B0B] border-t border-white/5">
                <div className="max-w-4xl mx-auto space-y-24">

                    {/* Header */}
                    <div className="space-y-6">
                        <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
                            {content.approach.title}
                            <span className="block text-zinc-600 mt-2">{content.approach.subtitle}</span>
                        </h2>
                        <p className="text-xl md:text-2xl text-zinc-400 font-light border-l-2 border-[#82ff1f] pl-6 py-2">
                            {content.approach.manifesto}
                        </p>
                    </div>

                    {/* Authority Statement */}
                    <div className="text-2xl md:text-4xl font-bold text-white leading-tight">
                        {content.approach.statement}
                    </div>

                    {/* Vertical List */}
                    <div className="space-y-8">
                        {content.approach.steps.map((step: any, i: number) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="flex items-start gap-6 border-b border-white/5 pb-8 last:border-0"
                            >
                                <span className="text-[#82ff1f] font-mono text-sm mt-1">{step.step}</span>
                                <p className="text-xl md:text-2xl text-zinc-300 font-light">{step.text}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Closing Impact */}
                    <div className="pt-12 text-center border-t border-white/5">
                        <p className="text-lg text-zinc-400 font-light">
                            No implanto features de IA. <span className="text-white font-medium">Implanto nuevas formas de trabajar.</span>
                        </p>
                    </div>
                </div>
            </section>

            {/* BLOCK 3: GOVERNANCE (Grid) */}
            <section className="py-32 px-6 md:px-12 bg-zinc-900/30">
                <div className="max-w-6xl mx-auto space-y-16">
                    <div className="max-w-3xl">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">{content.governance.title}</h2>
                        <p className="text-zinc-500 text-lg mb-8">{content.governance.subtitle}</p>
                        <div className="p-6 bg-[#82ff1f]/5 border border-[#82ff1f]/20 rounded-xl">
                            <p className="text-xl text-white font-light">
                                {content.governance.definition}
                            </p>
                        </div>
                    </div>

                    {/* Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {content.governance.cards.map((card: any, i: number) => {
                            const Icon = iconMap[card.icon] || Shield;
                            return (
                                <motion.div
                                    key={i}
                                    whileHover={{ y: -5 }}
                                    className="p-8 bg-[#0B0B0B] border border-white/5 rounded-2xl group hover:border-[#82ff1f]/30 transition-all"
                                >
                                    <div className="w-12 h-12 bg-zinc-900 rounded-lg flex items-center justify-center text-zinc-500 group-hover:text-[#82ff1f] mb-6 transition-colors">
                                        <Icon size={24} />
                                    </div>
                                    <h3 className="text-lg font-bold text-white">{card.title}</h3>
                                </motion.div>
                            );
                        })}
                        {/* Role Card */}
                        <div className="md:col-span-2 lg:col-span-1 p-8 bg-[#82ff1f] rounded-2xl flex flex-col justify-center text-black">
                            <p className="font-bold text-lg leading-tight">
                                "{content.governance.role}"
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* BLOCK 4: EXPERIENCE (Accordion) */}
            <AccordionGroup
                title={content.experience.title}
                items={content.experience.cases.map((c: any) => ({
                    id: c.id,
                    title: c.title,
                    subtitle: c.subtitle,
                    icon: Brain, // Default icon, purely structural
                    component: c.detailedBlock ? (
                        <div className="space-y-12">
                            {/* Context */}
                            <div className="p-8 bg-zinc-900/50 border border-white/5 rounded-2xl">
                                <h4 className="text-[#82ff1f] text-xs font-bold uppercase tracking-widest mb-4">{c.detailedBlock.context.title}</h4>
                                <p className="text-xl text-white font-light leading-relaxed">
                                    {c.detailedBlock.context.text}
                                </p>
                            </div>

                            {/* Columns */}
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16">
                                <div className="space-y-6">
                                    <h4 className="text-white text-lg font-bold border-b border-white/10 pb-4">{c.detailedBlock.columns.left.title}</h4>
                                    <ul className="space-y-4">
                                        {c.detailedBlock.columns.left.items.map((item: string, idx: number) => (
                                            <li key={idx} className="flex items-start gap-3 text-zinc-400 font-light">
                                                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#82ff1f] shrink-0" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="space-y-6">
                                    <h4 className="text-white text-lg font-bold border-b border-white/10 pb-4">{c.detailedBlock.columns.right.title}</h4>
                                    <ul className="space-y-4">
                                        {c.detailedBlock.columns.right.items.map((item: string, idx: number) => (
                                            <li key={idx} className="flex items-start gap-3 text-zinc-400 font-light">
                                                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-white/20 shrink-0" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* Governance */}
                            <div className="p-8 bg-[#82ff1f]/5 border border-[#82ff1f]/20 rounded-2xl">
                                <h4 className="text-[#82ff1f] text-xs font-bold uppercase tracking-widest mb-4">{c.detailedBlock.governance.title}</h4>
                                <p className="text-lg text-white font-light">
                                    {c.detailedBlock.governance.text}
                                </p>
                            </div>

                            {/* Learning */}
                            <div className="border-t border-white/10 pt-8">
                                <h4 className="text-zinc-500 text-xs font-bold uppercase tracking-widest mb-4">{c.detailedBlock.learning.title}</h4>
                                <p className="text-2xl text-white italic font-light leading-relaxed">
                                    "{c.detailedBlock.learning.text}"
                                </p>
                            </div>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 text-zinc-300">
                            <div className="space-y-6">
                                <h4 className="text-[#82ff1f] text-xs font-bold uppercase tracking-widest">Contexto</h4>
                                <p className="text-lg font-light leading-relaxed">{c.content.context}</p>
                                <div className="flex flex-wrap gap-2">
                                    {c.tags.map((t: string) => (
                                        <span key={t} className="px-2 py-1 bg-white/5 rounded text-[10px] uppercase text-zinc-500">{t}</span>
                                    ))}
                                </div>
                            </div>
                            <div className="space-y-6">
                                <h4 className="text-[#82ff1f] text-xs font-bold uppercase tracking-widest">Mi Rol y Proceso</h4>
                                <div className="space-y-4 font-light">
                                    <p><strong className="text-white block mb-1">Responsabilidad:</strong> {c.content.role}</p>
                                    <p><strong className="text-white block mb-1">Ejecución:</strong> {c.content.process}</p>
                                </div>
                            </div>
                            <div className="bg-white/5 p-6 rounded-xl border border-white/5 h-fit">
                                <h4 className="text-[#82ff1f] text-xs font-bold uppercase tracking-widest mb-3">Aprendizaje Clave</h4>
                                <p className="text-white italic font-medium leading-relaxed">"{c.content.learning}"</p>
                            </div>
                        </div>
                    )
                }))}
            />

            {/* BLOCK 5: SYSTEM TYPOLOGIES */}
            <section className="py-32 px-6 md:px-12 bg-[#0B0B0B]">
                <div className="max-w-6xl mx-auto">
                    <div className="mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">{content.systems.title}</h2>
                        <p className="text-zinc-500 text-lg">{content.systems.subtitle}</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {content.systems.items.map((sys: any, i: number) => {
                            const Icon = iconMap[sys.icon] || Zap;
                            return (
                                <div key={i} className="p-6 border border-white/10 rounded-2xl bg-zinc-900/20">
                                    <div className="mb-4 text-[#82ff1f]"><Icon size={28} /></div>
                                    <h3 className="text-lg font-bold text-white mb-2">{sys.title}</h3>
                                    <p className="text-sm text-zinc-500 font-light">{sys.desc}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* BLOCK 6 & 7: CULTURE & METRICS */}
            <section className="py-32 px-6 md:px-12 bg-zinc-900/30 border-y border-white/5">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">

                    {/* Culture */}
                    <div className="space-y-10">
                        <div>
                            <h2 className="text-3xl font-bold text-white mb-4">{content.culture.title}</h2>
                            <p className="text-zinc-400 font-light">{content.culture.desc}</p>
                        </div>
                        <div className="space-y-6">
                            {content.culture.steps.map((step: string, i: number) => (
                                <div key={i} className="flex items-center gap-4">
                                    <div className="w-8 h-8 rounded-full bg-[#82ff1f]/10 flex items-center justify-center text-[#82ff1f] text-xs font-bold">
                                        {i + 1}
                                    </div>
                                    <p className="text-lg text-white font-light">{step}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Metrics */}
                    <div className="space-y-10">
                        <div>
                            <h2 className="text-3xl font-bold text-white mb-4">{content.metrics.title}</h2>
                            <p className="text-zinc-400 font-light">{content.metrics.desc}</p>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            {content.metrics.items.map((m: any, i: number) => (
                                <div key={i} className="p-6 bg-[#0B0B0B] border border-white/5 rounded-xl text-center">
                                    <p className="text-3xl font-bold text-white mb-1">{m.value}</p>
                                    <p className="text-xs uppercase tracking-widest text-zinc-500">{m.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </section>

            {/* BLOCK 8 & 9: ROLE & CLOSING */}
            <section className="py-32 px-6 md:px-12 bg-[#0B0B0B]">
                <div className="max-w-4xl mx-auto text-center space-y-20">

                    {/* Role */}
                    <div className="space-y-8">
                        <span className="text-[#82ff1f] text-xs font-bold uppercase tracking-[0.2em]">{content.role.title}</span>
                        <h3 className="text-3xl md:text-5xl font-light text-white leading-tight">
                            "{content.role.content}"
                        </h3>
                    </div>

                    <div className="w-px h-24 bg-gradient-to-b from-transparent via-white/20 to-transparent mx-auto" />

                    {/* Closing */}
                    <div className="space-y-8">
                        <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter">
                            {content.closing.title}
                        </h2>
                        <p className="text-xl text-zinc-400 font-light max-w-2xl mx-auto">
                            {content.closing.desc}
                        </p>
                        <div className="pt-8">
                            <a
                                href="mailto:victortorresa94@gmail.com"
                                className="inline-flex items-center gap-3 bg-[#82ff1f] text-black px-10 py-5 rounded-full text-sm font-bold hover:shadow-[0_0_30px_rgba(130,255,31,0.4)] hover:scale-105 transition-all uppercase tracking-widest"
                            >
                                {content.closing.cta}
                                <ArrowRight size={18} />
                            </a>
                        </div>
                    </div>

                </div>
            </section>

            {/* Footer */}
            <footer className="py-12 border-t border-white/5 px-6 md:px-12 text-center">
                <p className="text-zinc-600 text-[10px] font-bold tracking-[0.3em] uppercase">© 2025 VÍCTOR TORRES — AI STRATEGIST</p>
            </footer>

        </main>
    );
}

