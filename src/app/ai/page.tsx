"use client";

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/LanguageContext';
import { translations } from '@/lib/translations';
import {
    Shield, Database, UserCheck, FileSearch, EyeOff,
    MessageSquare, Mic, Zap, GitMerge,
    Brain, ArrowRight, Lightbulb, Users, Target
} from 'lucide-react';
import AccordionGroup from '@/components/procesos/AccordionGroup';
import AutomationBlock from '@/components/ai/AutomationBlock';
import RoleBlock from '@/components/ai/RoleBlock';
import ClosingBlock from '@/components/ai/ClosingBlock';

const iconMap: Record<string, any> = {
    Shield, Database, UserCheck, FileSearch, EyeOff,
    MessageSquare, Mic, Zap, GitMerge, Brain,
    Lightbulb, Users, Target
};

export default function AIAdoptionPage() {
    const { t } = useLanguage();
    const content = (t as any).ai || translations.es.ai;

    if (!content) {
        return (
            <div className="min-h-screen bg-[#0B0B0B] flex items-center justify-center text-zinc-500">
                <div className="animate-pulse">Cargando contenido...</div>
            </div>
        );
    }

    // Grupo 1: Mi Enfoque
    const enfoqueItems = [
        {
            id: 'approach',
            title: content.approach.title,
            subtitle: content.approach.subtitle,
            icon: Lightbulb,
            component: (
                <div className="space-y-12">
                    <div className="p-6 bg-[#82ff1f]/5 border border-[#82ff1f]/20 rounded-xl">
                        <p className="text-xl text-white font-light">{content.approach.manifesto}</p>
                    </div>
                    <div className="text-2xl md:text-3xl font-medium text-white">
                        {content.approach.statement}
                    </div>
                    <div className="space-y-8">
                        {content.approach.steps.map((step: any, i: number) => (
                            <div key={i} className="flex items-start gap-6 border-b border-white/5 pb-6 last:border-0">
                                <span className="text-[#82ff1f] font-mono text-sm mt-1">{step.step}</span>
                                <p className="text-xl text-zinc-300 font-light">{step.text}</p>
                            </div>
                        ))}
                    </div>
                    <div className="pt-8 text-center border-t border-white/5">
                        <p className="text-lg text-zinc-400 font-light">
                            No implanto features de IA. <span className="text-white font-medium">Implanto nuevas formas de trabajar.</span>
                        </p>
                    </div>
                </div>
            )
        },
        {
            id: 'governance',
            title: content.governance.title,
            subtitle: content.governance.subtitle,
            icon: Shield,
            component: (
                <div className="space-y-12">
                    <div className="p-6 bg-[#82ff1f]/5 border border-[#82ff1f]/20 rounded-xl">
                        <p className="text-xl text-white font-light">{content.governance.definition}</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {content.governance.cards.map((card: any, i: number) => {
                            const Icon = iconMap[card.icon] || Shield;
                            return (
                                <div
                                    key={i}
                                    className="p-6 bg-zinc-900/30 border border-white/5 rounded-xl hover:border-[#82ff1f]/30 transition-all"
                                >
                                    <div className="w-12 h-12 bg-zinc-900 rounded-lg flex items-center justify-center text-[#82ff1f] mb-4">
                                        <Icon size={24} />
                                    </div>
                                    <h4 className="text-lg font-medium text-white">{card.title}</h4>
                                </div>
                            );
                        })}
                    </div>
                    <div className="p-8 bg-[#82ff1f] rounded-2xl text-black text-center">
                        <p className="text-lg font-medium leading-tight">"{content.governance.role}"</p>
                    </div>
                </div>
            )
        },
        {
            id: 'automation',
            title: content.automation.title,
            subtitle: content.automation.subtitle,
            icon: Zap,
            component: <AutomationBlock content={content.automation} />
        }
    ];

    // Grupo 2: Experiencia e Implementación
    const experienciaItems = [
        {
            id: 'experience',
            title: content.experience.title,
            subtitle: 'Proyectos reales de adopción de IA',
            icon: Brain,
            component: (
                <div className="space-y-8">
                    {content.experience.cases.map((c: any) => (
                        <div key={c.id} className="border border-white/5 rounded-xl p-8 hover:border-white/10 transition-all">
                            <div className="flex items-start justify-between mb-6">
                                <div>
                                    <h4 className="text-2xl font-medium text-white mb-2">{c.title}</h4>
                                    <p className="text-zinc-500">{c.subtitle}</p>
                                </div>
                                <div className="flex gap-2">
                                    {c.tags.map((tag: string) => (
                                        <span key={tag} className="px-3 py-1 bg-white/5 rounded-full text-xs text-zinc-400">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                                <div className="space-y-3">
                                    <h5 className="text-[#82ff1f] text-xs font-bold uppercase">Contexto</h5>
                                    <p className="text-zinc-300 leading-relaxed">{c.content.context}</p>
                                </div>
                                <div className="space-y-3">
                                    <h5 className="text-[#82ff1f] text-xs font-bold uppercase">Mi Rol</h5>
                                    <p className="text-zinc-400 font-light">{c.content.role}</p>
                                    <h5 className="text-white text-sm font-medium mt-4">Proceso</h5>
                                    <p className="text-zinc-400 font-light">{c.content.process}</p>
                                </div>
                                <div className="bg-white/5 p-6 rounded-xl">
                                    <h5 className="text-[#82ff1f] text-xs font-bold uppercase mb-3">Aprendizaje</h5>
                                    <p className="text-white italic">"{c.content.learning}"</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )
        },
        ...(content.systems && content.systems.cards ? [{
            id: 'systems',
            title: content.systems.title,
            subtitle: content.systems.subtitle,
            icon: GitMerge,
            component: (
                <div className="space-y-12">
                    <p className="text-xl text-zinc-400 font-light">{content.systems.intro}</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {content.systems.cards.map((sys: any, i: number) => (
                            <div key={i} className="p-8 bg-zinc-900/30 border border-white/5 rounded-2xl hover:border-[#82ff1f]/30 transition-all space-y-6">
                                <div>
                                    <h4 className="text-xl font-medium text-white mb-1">{sys.title}</h4>
                                    <p className="text-sm text-[#82ff1f] font-mono">{sys.subtitle}</p>
                                </div>
                                <p className="text-zinc-400 font-light">{sys.desc}</p>
                                <ul className="space-y-2 border-t border-white/5 pt-4">
                                    {sys.items.map((item: string, idx: number) => (
                                        <li key={idx} className="flex items-start gap-2 text-sm text-zinc-500">
                                            <span className="text-[#82ff1f] mt-1">·</span> {item}
                                        </li>
                                    ))}
                                </ul>
                                <div className="bg-black/20 p-4 rounded-lg border border-white/5">
                                    <p className="text-xs text-zinc-500 uppercase font-bold mb-1">Gobernanza</p>
                                    <p className="text-sm text-zinc-400 italic">"{sys.governance}"</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )
        }] : []),
        ...(content.culture_change ? [{
            id: 'culture',
            title: content.culture_change.title,
            subtitle: content.culture_change.subtitle,
            icon: Users,
            component: (
                <div className="space-y-16">
                    <div className="text-center p-6 bg-[#82ff1f]/5 border border-[#82ff1f]/20 rounded-xl">
                        <p className="text-[#82ff1f] font-medium">{content.culture_change.anchor}</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {content.culture_change.phases.map((phase: any, i: number) => (
                            <div key={i} className="space-y-6">
                                <div className="w-10 h-10 rounded-full bg-[#82ff1f] text-black flex items-center justify-center font-bold">
                                    {i + 1}
                                </div>
                                <div>
                                    <h4 className="text-xl font-medium text-white mb-3">{phase.title}</h4>
                                    <p className="text-zinc-400 mb-6">{phase.desc}</p>
                                    <ul className="space-y-3">
                                        {phase.actions.map((action: string, idx: number) => (
                                            <li key={idx} className="flex items-start gap-2 text-sm text-zinc-500">
                                                <span className="text-[#82ff1f] mt-1">✓</span>
                                                {action}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="border-t border-white/5 pt-12 text-center">
                        <p className="text-2xl text-white font-light">{content.culture_change.closure}</p>
                    </div>
                </div>
            )
        }] : []),
        ...(content.metrics && content.metrics.macro ? [{
            id: 'metrics',
            title: content.metrics.title,
            subtitle: content.metrics.subtitle,
            icon: Target,
            component: (
                <div className="space-y-16">
                    <p className="text-xl text-zinc-400 font-light text-center">{content.metrics.intro}</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {content.metrics.macro.map((m: any, i: number) => (
                            <div key={i} className="p-6 bg-zinc-900/30 border border-white/5 rounded-xl space-y-4">
                                <p className="text-xs text-zinc-500 font-bold uppercase">{m.title}</p>
                                <p className="text-white text-lg font-medium italic">"{m.question}"</p>
                                <div className="h-px bg-white/5" />
                                <p className="text-sm text-zinc-400">{m.measure}</p>
                            </div>
                        ))}
                    </div>
                    <div className="border-t border-white/5 pt-12 text-center">
                        <p className="text-3xl font-medium text-white max-w-4xl mx-auto">{content.metrics.closure}</p>
                    </div>
                </div>
            )
        }] : [])
    ];

    // Grupo 3: Mi Rol y Propuesta
    const propuestaItems = [
        {
            id: 'role',
            title: content.role.title,
            subtitle: 'Cómo trabajo dentro de las organizaciones',
            icon: Users,
            component: <RoleBlock content={content.role} />
        },
        {
            id: 'closing',
            title: content.closing.title,
            subtitle: 'Dónde aporto valor real',
            icon: Target,
            component: <ClosingBlock content={content.closing} />
        }
    ];

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

            {/* HERO */}
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
                            className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight leading-[0.95] text-white"
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
                            {["Procesos", "Gobernanza", "Cambio Cultural", "Formación"].map((tag) => (
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
                        <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/5 bg-zinc-900 shadow-2xl">
                            <Image
                                src="/images/ai-hero-new.jpg"
                                alt="Víctor Torres - AI Business Consultant"
                                fill
                                className="object-cover object-top hover:scale-105 transition-all duration-700"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                        </div>
                    </motion.div>
                </div>

                {/* Bottom Hero Block */}
                <div className="max-w-[1400px] mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 mt-20 md:mt-32 pb-20 border-t border-white/5 pt-12">
                    <div className="text-lg md:text-xl text-zinc-300 font-light leading-relaxed">
                        <p className="max-w-xl">
                            <span className="font-medium text-white block mb-2">{content.hero.desc.split('. ')[0]}.</span>
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

            {/* Grupo 1: Mi Enfoque */}
            <AccordionGroup
                title="Mi Enfoque"
                items={enfoqueItems}
            />

            {/* Grupo 2: Experiencia e Implementación */}
            <AccordionGroup
                title="Experiencia e Implementación"
                items={experienciaItems}
            />

            {/* Grupo 3: Mi Rol y Propuesta */}
            <AccordionGroup
                title="Mi Rol y Propuesta de Valor"
                items={propuestaItems}
            />

            {/* Footer */}
            <footer className="py-12 border-t border-white/5 px-6 md:px-12 text-center">
                <p className="text-zinc-600 text-[10px] font-bold tracking-[0.3em] uppercase">© 2025 VÍCTOR TORRES — AI STRATEGIST</p>
            </footer>

        </main>
    );
}
