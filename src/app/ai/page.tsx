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
            id: 'automation',
            title: content.automation.title,
            subtitle: content.automation.subtitle,
            icon: Zap,
            component: <AutomationBlock content={content.automation} />
        },
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
                            No implanto herramientas de IA. <span className="text-white font-medium">Implanto nuevas formas de trabajar.</span>
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
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {content.governance.cards.map((card: any, i: number) => {
                            const Icon = iconMap[card.icon] || Shield;
                            return (
                                <div
                                    key={i}
                                    className="p-6 bg-zinc-900/30 border border-white/5 rounded-xl hover:border-[#82ff1f]/30 transition-all space-y-4"
                                >
                                    <div className="w-12 h-12 bg-zinc-900 rounded-lg flex items-center justify-center text-[#82ff1f]">
                                        <Icon size={24} />
                                    </div>
                                    <h4 className="text-xl font-medium text-white">{card.title}</h4>
                                    <ul className="space-y-2">
                                        {card.items && card.items.map((item: string, idx: number) => (
                                            <li key={idx} className="flex items-start gap-2 text-zinc-400 text-sm">
                                                <span className="text-[#82ff1f] mt-1">•</span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            );
                        })}
                    </div>
                    <div className="p-8 bg-[#82ff1f] rounded-2xl text-black text-center">
                        <p className="text-lg font-medium leading-tight">"{content.governance.role}"</p>
                    </div>
                </div>
            )
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
                <div className="space-y-12">
                    {content.experience.cases.map((c: any) => (
                        <div key={c.id} className="border border-white/5 rounded-2xl p-8 bg-zinc-900/20 hover:bg-zinc-900/40 transition-all group">
                            {/* Header */}
                            <div className="flex flex-col md:flex-row md:items-start justify-between mb-8 gap-4">
                                <div>
                                    <div className="flex items-center gap-3 mb-2">
                                        <h4 className="text-2xl md:text-3xl font-medium text-white">{c.title}</h4>
                                        <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-zinc-400 font-mono">
                                            {c.content.duration}
                                        </span>
                                    </div>
                                    <p className="text-zinc-500 text-lg">{c.subtitle}</p>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {c.tags.map((tag: string) => (
                                        <span key={tag} className="px-3 py-1 bg-zinc-900 border border-white/10 rounded-full text-xs text-zinc-400 group-hover:border-[#82ff1f]/30 group-hover:text-[#82ff1f] transition-colors">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Intro Full Width */}
                            <div className="mb-10 pb-10 border-b border-white/5">
                                <p className="text-zinc-300 text-lg leading-relaxed max-w-5xl">
                                    {c.content.intro}
                                </p>
                            </div>

                            {/* 3-Col Grid: Challenge, Role, Process */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-10">
                                <div className="space-y-3">
                                    <h5 className="text-zinc-600 text-xs font-bold uppercase tracking-widest border-l-2 border-zinc-700 pl-3">El Reto</h5>
                                    <p className="text-zinc-400 text-sm leading-relaxed">{c.content.challenge}</p>
                                </div>
                                <div className="space-y-3">
                                    <h5 className="text-zinc-600 text-xs font-bold uppercase tracking-widest border-l-2 border-zinc-700 pl-3">Mi Rol</h5>
                                    <p className="text-zinc-400 text-sm leading-relaxed">{c.content.role}</p>
                                </div>
                                <div className="space-y-3">
                                    <h5 className="text-zinc-600 text-xs font-bold uppercase tracking-widest border-l-2 border-zinc-700 pl-3">Proceso</h5>
                                    <p className="text-zinc-400 text-sm leading-relaxed">{c.content.process}</p>
                                </div>
                            </div>

                            {/* Result Area */}
                            <div className="bg-[#82ff1f]/5 border border-[#82ff1f]/10 p-6 md:p-8 rounded-xl">
                                <h5 className="text-[#82ff1f] text-xs font-bold uppercase tracking-widest mb-3">Resultado / Impacto</h5>
                                <p className="text-white text-lg md:text-xl font-medium leading-relaxed">
                                    {c.content.result}
                                </p>
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
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
        }] : [])
    ];

    // Grupo 3: Mi Propuesta de Valor
    const propuestaItems = [
        {
            id: 'closing',
            title: content.closing.title,
            subtitle: 'Dónde aporto valor real',
            icon: Target,
            component: <ClosingBlock content={content.closing} />
        },
        {
            id: 'role',
            title: content.role.title,
            subtitle: 'Cómo trabajo dentro de las organizaciones',
            icon: Users,
            component: <RoleBlock content={content.role} />
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

            <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 overflow-hidden py-32 lg:py-0">
                <div className="max-w-[1600px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">

                    {/* Left: Content (55%) */}
                    <div className="lg:col-span-7 space-y-12 relative z-10 text-left">
                        <div className="space-y-6">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#82ff1f]/5 border border-[#82ff1f]/20"
                            >
                                <div className="w-1.5 h-1.5 rounded-full bg-[#82ff1f] animate-pulse" />
                                <span className="text-[#82ff1f] text-[10px] font-bold tracking-[0.2em] uppercase">
                                    {content.hero.eyebrow}
                                </span>
                            </motion.div>

                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2, duration: 0.6 }}
                                className="text-5xl md:text-7xl lg:text-9xl font-medium tracking-tight leading-[0.9] text-white"
                            >
                                <span className="block text-white">Adopción</span>
                                <span className="block text-[#82ff1f]">Responsable</span>
                                <span className="block text-zinc-600">de IA</span>
                            </motion.h1>

                            <motion.h2
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.4, duration: 0.6 }}
                                className="text-xl md:text-3xl text-zinc-300 font-light max-w-2xl leading-relaxed"
                            >
                                {content.hero.subtitle}
                            </motion.h2>
                        </div>

                        {/* Unified Text Block */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6, duration: 0.6 }}
                            className="space-y-8 pl-6 border-l-2 border-[#82ff1f]"
                        >
                            <p className="text-lg md:text-xl text-zinc-400 font-light leading-relaxed max-w-2xl">
                                <span className="text-white font-medium block mb-2">{content.hero.desc.split('. ')[0]}.</span>
                                {content.hero.desc.split('. ').slice(1).join('. ')}
                            </p>

                            <p className="text-sm text-zinc-500 font-light max-w-md">
                                He liderado adopciones de IA en entornos donde los datos importan, los errores cuestan dinero y las personas necesitan entender qué está pasando.
                            </p>

                            <div className="flex flex-wrap items-center gap-8 pt-12 pb-24 md:pb-0">
                                <Link href="#enfoque" className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-[#82ff1f] transition-all group">
                                    {content.hero.cta}
                                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                </Link>

                                <div className="flex gap-3">
                                    {["Procesos", "Gobernanza", "Cambio"].map((tag) => (
                                        <span key={tag} className="px-3 py-1 rounded-full border border-white/10 text-[10px] uppercase tracking-widest text-zinc-500 hover:border-[#82ff1f] hover:text-[#82ff1f] transition-colors cursor-default">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right: Creative Visual (45%) */}
                    <div className="lg:col-span-5 relative h-[60vh] lg:h-[85vh] w-full flex items-center justify-center">
                        {/* Background Shapes */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="absolute inset-0 z-0"
                        >
                            <div className="absolute top-10 right-10 w-64 h-64 bg-[#82ff1f]/10 rounded-full blur-[100px]" />
                            <div className="absolute bottom-10 left-10 w-64 h-64 bg-blue-500/10 rounded-full blur-[100px]" />
                        </motion.div>

                        {/* Main Image Container */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="relative w-full h-full max-h-[800px] z-10"
                        >
                            {/* Tech Frame */}
                            <div className="absolute inset-0 border border-white/10 rounded-3xl" />
                            <div className="absolute -inset-4 border border-white/5 rounded-[2rem] scale-95" />

                            {/* Image Mask */}
                            <div className="relative w-full h-full rounded-2xl overflow-hidden group">
                                <Image
                                    src="/images/procesos-hero-new.jpg"
                                    alt="Víctor Torres - AI Business Consultant"
                                    fill
                                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700 grayscale hover:grayscale-0"
                                    priority
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />

                                {/* Overlay Data Elements */}
                                <div className="absolute bottom-8 left-8 space-y-2">
                                    <div className="flex items-center gap-2 text-[#82ff1f] text-xs font-mono">
                                        <Zap size={14} />
                                        <span>SYSTEM_ACTIVE</span>
                                    </div>
                                    <p className="text-white text-sm font-medium tracking-wide">
                                        Human-in-the-loop Systems
                                    </p>
                                </div>
                            </div>

                            {/* Floating Card */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.8 }}
                                className="absolute -bottom-8 -right-8 p-6 bg-black border border-white/10 rounded-xl shadow-2xl backdrop-blur-xl max-w-[200px] hidden md:block"
                            >
                                <p className="text-zinc-400 text-xs uppercase tracking-widest mb-2">Impacto Real</p>
                                <div className="space-y-1">
                                    <p className="text-2xl text-white font-medium">+40%</p>
                                    <p className="text-xs text-zinc-500">Eficiencia Operativa en proyectos implementados</p>
                                </div>
                            </motion.div>
                        </motion.div>
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
                title="Mi Propuesta de Valor"
                items={propuestaItems}
            />

            {/* Footer */}
            <footer className="py-12 border-t border-white/5 px-6 md:px-12 text-center">
                <p className="text-zinc-600 text-[10px] font-bold tracking-[0.3em] uppercase">© 2025 VÍCTOR TORRES — AI STRATEGIST</p>
            </footer>

        </main>
    );
}
