"use client";

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, ShieldCheck, Users, Zap, Brain, Target, Search } from 'lucide-react';
import LanguageSwitcher from '@/components/LanguageSwitcher';

export default function AIAdoptionPage() {
    return (
        <main className="min-h-screen bg-[#050505] text-white selection:bg-[#82ff1f] selection:text-black font-sans overflow-x-hidden">

            {/* Minimal Header */}
            <nav className="fixed top-0 w-full z-50 px-6 md:px-12 py-6 flex justify-between items-center bg-[#050505]/80 backdrop-blur-md border-b border-white/5">
                <div className="flex items-center gap-4 md:gap-6">
                    <Link
                        href="/"
                        className="text-sm font-bold tracking-widest text-zinc-500 hover:text-[#82ff1f] transition-colors uppercase"
                    >
                        vtorres.net <span className="text-white/20">/</span> ai
                    </Link>

                    <Link
                        href="/"
                        className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-[10px] md:text-xs font-bold text-zinc-300 hover:bg-white/10 hover:border-[#82ff1f] transition-all uppercase tracking-wider whitespace-nowrap"
                    >
                        Ver mi CV
                    </Link>
                </div>

                <div className="flex items-center gap-6 text-white/50">
                    <LanguageSwitcher />
                </div>
            </nav>

            {/* ========================================= */}
            {/* HERO SECTION */}
            {/* ========================================= */}
            <section className="relative pt-40 md:pt-56 pb-24 px-6 md:px-12 overflow-hidden">
                {/* Background Ambient Glow */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#82ff1f]/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />

                <div className="max-w-6xl mx-auto relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
                        <div className="lg:col-span-8 space-y-8">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                            >
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#82ff1f]/10 border border-[#82ff1f]/20 mb-6">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#82ff1f] animate-pulse" />
                                    <span className="text-[#82ff1f] text-[10px] font-bold tracking-[0.2em] uppercase">AI Business Consultant</span>
                                </div>
                                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.9] text-white">
                                    Adopción <span className="text-zinc-500">Responsable</span> de IA
                                </h1>
                            </motion.div>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="text-xl md:text-2xl text-zinc-400 font-light max-w-2xl leading-relaxed"
                            >
                                Rediseño de procesos, gobernanza y gestión del cambio para entornos corporativos de alta exigencia.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                className="flex flex-wrap gap-4 pt-4"
                            >
                                {["Procesos", "Gobernanza", "Cambio Cultural", "Formación"].map((item) => (
                                    <span key={item} className="text-[10px] font-bold tracking-widest uppercase py-2 px-4 border border-white/10 rounded-full text-zinc-500">
                                        {item}
                                    </span>
                                ))}
                            </motion.div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="lg:col-span-4 flex justify-start lg:justify-end"
                        >
                            <div className="relative group">
                                <div className="absolute inset-0 bg-[#82ff1f]/20 blur-3xl rounded-full group-hover:bg-[#82ff1f]/30 transition-all duration-700" />
                                <div className="relative w-40 h-40 md:w-56 md:h-56 rounded-2xl overflow-hidden border border-white/10 bg-zinc-900 group-hover:border-[#82ff1f]/50 transition-all duration-500 transform group-hover:rotate-3">
                                    <Image
                                        src="/images/profile.jpg"
                                        alt="Víctor Torres"
                                        width={224}
                                        height={224}
                                        className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
                                    />
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Sub-hero content */}
                <div className="max-w-6xl mx-auto mt-24 grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-white/5 pt-12">
                    <div className="space-y-6 text-lg text-zinc-400 font-light leading-relaxed">
                        <p>
                            No trabajo con IA como tecnología. Trabajo con IA como una <span className="text-white font-medium">herramienta para ordenar, estandarizar y mejorar</span> la forma en que las personas trabajan.
                        </p>
                        <p>
                            Mi enfoque parte siempre de la observación. Antes de proponer cambios, entiendo cómo funcionan las cosas realmente, dónde se pierde tiempo y por qué las personas hacen lo que hacen.
                        </p>
                    </div>
                    <div className="space-y-6 text-lg text-zinc-400 font-light leading-relaxed">
                        <p>
                            En 2022, liderando operaciones y proyectos, identifiqué que mi mayor valor no era ejecutar tareas, sino <span className="text-[#82ff1f] font-medium italic">diseñar sistemas</span>. Detectar fricción operativa es mi estado natural.
                        </p>
                        <div className="pt-4">
                            <a
                                href="#experiencia"
                                className="inline-flex items-center gap-3 text-[11px] font-bold tracking-[0.2em] uppercase text-[#82ff1f] hover:gap-5 transition-all"
                            >
                                Ver experiencia aplicada
                                <ArrowRight size={14} />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* ========================================= */}
            {/* SECCIÓN 2: EXPERIENCIA Y ADOPCIÓN */}
            {/* ========================================= */}
            <section id="experiencia" className="py-32 px-6 md:px-12 bg-[#0a0a0a] relative overflow-hidden text-left">
                <div className="max-w-6xl mx-auto space-y-24 relative z-10 text-left">

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                        <div className="lg:col-span-12">
                            <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter mb-8 leading-none">
                                Transformación <br /><span className="text-zinc-500">Organizativa</span>
                            </h2>
                        </div>

                        {/* KMELEON CARD */}
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="lg:col-span-8 bg-zinc-900/50 border border-white/5 p-8 md:p-12 rounded-3xl relative overflow-hidden group text-left"
                        >
                            <div className="absolute top-0 right-0 p-8 text-white/5 group-hover:text-[#82ff1f]/10 transition-colors">
                                <Zap size={80} />
                            </div>
                            <div className="relative z-10 space-y-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-[#82ff1f]/10 border border-[#82ff1f]/20 rounded-xl flex items-center justify-center text-[#82ff1f]">
                                        <Brain size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-white">Kmeleon</h3>
                                        <p className="text-[#82ff1f] text-xs font-bold uppercase tracking-widest mt-1">CMO & AI Strategist · Enterprise Solution</p>
                                    </div>
                                </div>
                                <p className="text-xl text-zinc-300 font-light leading-relaxed">
                                    Startup de IA fundada por ex-Microsoft. Lideré la definición de servicios y GTM para clientes enterprise, traduciendo capacidades técnicas de sistemas multi-agente en valor operativo real.
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-white/5">
                                    <div className="space-y-3">
                                        <p className="text-xs font-bold uppercase tracking-widest text-[#82ff1f]">Aprendizaje Crítico</p>
                                        <p className="text-sm text-zinc-400 leading-relaxed">Solo cuando las expectativas están acotadas y el caso de uso es nítido, la IA entrega ROI real.</p>
                                    </div>
                                    <div className="space-y-3">
                                        <p className="text-xs font-bold uppercase tracking-widest text-[#82ff1f]">Gobernanza Enterprise</p>
                                        <p className="text-sm text-zinc-400 leading-relaxed">Diferenciar una demo de una solución productiva es lo que protege a la organización del riesgo.</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* AETHER LABS CARD */}
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="lg:col-span-4 bg-zinc-900/50 border border-white/5 p-8 rounded-3xl relative flex flex-col justify-between group text-left"
                        >
                            <div className="space-y-6">
                                <div className="w-10 h-10 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-zinc-400 group-hover:text-[#82ff1f] transition-colors">
                                    <Search size={20} />
                                </div>
                                <h3 className="text-xl font-bold text-white">Aether Labs</h3>
                                <p className="text-sm text-zinc-400 font-light leading-relaxed">
                                    Mi laboratorio de <span className="text-white italic">stress-testing</span>. Pruebo, descarto y valido agentes de voz y flujos n8n antes de implementarlos en entornos de producción.
                                </p>
                            </div>
                            <div className="mt-8 pt-6 border-t border-white/5">
                                <p className="text-[10px] font-bold uppercase tracking-wider text-zinc-500">Validado en:</p>
                                <div className="flex flex-wrap gap-2 mt-3">
                                    {["Agentes Voz", "n8n", "RAG"].map(tag => (
                                        <span key={tag} className="text-[9px] bg-white/5 border border-white/10 px-2 py-1 rounded text-zinc-400 uppercase tracking-tighter">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Change Management Grid */}
                    <div className="space-y-12">
                        <div className="max-w-2xl text-left">
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Gestión del Cambio Cultural</h3>
                            <p className="text-zinc-400 font-light text-lg">
                                La tecnología es el 20%. El 80% restante es psicología, comunicación y diseño de nuevos hábitos operativos.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                {
                                    icon: <Users size={20} />,
                                    title: "Factor Humano",
                                    desc: "Escucho miedos y detecto resistencias antes de proponer el primer commit. La IA que no se entiende, no se usa."
                                },
                                {
                                    icon: <Brain size={20} />,
                                    title: "Formación Senior",
                                    desc: "Traducción de conceptos técnicos a lenguaje de negocio. Empoderar al equipo para que vean a la IA como aliada, no como amenaza."
                                },
                                {
                                    icon: <Target size={20} />,
                                    title: "Acompañamiento",
                                    desc: "No entrego y me voy. Acompaño la adopción diaria, ajusto sobre la marcha y documento cada paso para la autonomía total."
                                }
                            ].map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                                    className="p-6 border border-white/5 rounded-2xl bg-white/[0.02] text-left"
                                >
                                    <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center text-[#82ff1f] mb-4">
                                        {item.icon}
                                    </div>
                                    <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
                                    <p className="text-sm text-zinc-500 font-light leading-relaxed">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ========================================= */}
            {/* SECCIÓN 3: GOBERNANZA */}
            {/* ========================================= */}
            <section className="py-32 px-6 md:px-12 bg-[#050505] relative overflow-hidden text-left">
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#82ff1f]/5 blur-[150px] rounded-full translate-y-1/2 -translate-x-1/2" />

                <div className="max-w-6xl mx-auto space-y-16 relative z-10 text-left">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 text-left">
                        <div className="space-y-4">
                            <div className="inline-block py-1 px-3 bg-zinc-900 border border-white/10 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase text-zinc-500">
                                Safety & Governance
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tighter leading-none">
                                Gobernanza y <br /><span className="text-zinc-500">Uso Responsable</span>
                            </h2>
                        </div>
                        <p className="text-zinc-500 font-light max-w-sm text-sm">
                            Gobernar la IA es proteger a la organización. No se trata de prohibir, sino de establecer el marco donde la innovación es segura.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8 text-left">
                        {/* Governance pillars */}
                        <div className="space-y-8 text-left">
                            {[
                                { icon: <ShieldCheck className="text-[#82ff1f]" />, title: "Control de Riesgos", desc: "Identificación de alucinaciones, uso indebido de datos y automatización ciega. Protejo a la organización de errores críticos." },
                                { icon: <CheckCircle2 className="text-[#82ff1f]" />, title: "Supervisión Humana", desc: "La IA propone, el humano valida. Diseño sistemas de derivación donde los casos sensibles siempre terminan en manos de expertos." },
                                { icon: <Zap className="text-[#82ff1f]" size={20} />, title: "Trazabilidad Total", desc: "Registros detallados de decisiones, logs audidatables y procesos transparentes. Si algo falla, sabemos por qué." }
                            ].map((pill, i) => (
                                <div key={i} className="flex gap-4 group text-left">
                                    <div className="mt-1">{pill.icon}</div>
                                    <div className="space-y-2">
                                        <h4 className="text-lg font-bold text-white group-hover:text-[#82ff1f] transition-colors">{pill.title}</h4>
                                        <p className="text-sm text-zinc-500 leading-relaxed font-light">{pill.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Visual checklist */}
                        <div className="bg-zinc-900/50 border border-white/5 p-8 rounded-3xl space-y-8 text-left">
                            <h4 className="text-xs font-bold uppercase tracking-widest text-[#82ff1f]">Mi rol de criterio</h4>
                            <div className="space-y-6">
                                <p className="text-lg text-zinc-300 font-light italic">
                                    "No actúo como un policía de la tecnología, sino como un cinturón de seguridad que permite al negocio ir más rápido con menos riesgo."
                                </p>
                                <div className="space-y-4">
                                    {[
                                        "Definición de fuentes de datos autorizadas",
                                        "Límites éticos y operativos por departamento",
                                        "Workflows de validación obligatoria",
                                        "Sistemas de alerta ante fallos técnicos"
                                    ].map(check => (
                                        <div key={check} className="flex items-center gap-3 text-sm text-zinc-500">
                                            <div className="w-1 h-1 bg-[#82ff1f] rounded-full" />
                                            {check}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ========================================= */}
            {/* SECCIÓN 4: CIERRE Y CTA */}
            {/* ========================================= */}
            <section className="py-32 px-6 md:px-12 bg-zinc-900 overflow-hidden relative text-left">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 relative z-10 text-left">
                    <div className="lg:col-span-12">
                        <h2 className="text-4xl md:text-6xl lg:text-8xl font-bold text-white tracking-tighter mb-12 leading-[0.9]">
                            IA con <br /><span className="text-[#82ff1f]">Propósito Real.</span>
                        </h2>
                    </div>

                    <div className="lg:col-span-5 space-y-8 text-left">
                        <div className="space-y-4">
                            <p className="text-xl text-zinc-300 font-light leading-relaxed">
                                Mi propuesta es clara: <span className="text-white font-medium">un perfil híbrido</span> que entiende el código, los procesos y a las personas.
                            </p>
                            <p className="text-zinc-500 font-light leading-relaxed">
                                Aporto la capacidad analítica para decidir dónde la IA es magia y dónde es innecesaria. Ayudo a organizaciones a no jugar con la tecnología, sino a utilizarla para escalar con orden.
                            </p>
                        </div>

                        <div className="pt-8">
                            <p className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-6">Encaje inmediato en:</p>
                            <div className="space-y-3">
                                {[
                                    "Rediseño de Operaciones Enterprise",
                                    "Consultoría del Sector Público",
                                    "Implementación Progresiva de IA",
                                    "Cambio Cultural y Estratégico"
                                ].map(v => (
                                    <div key={v} className="flex items-center gap-3 text-sm text-white/70">
                                        <ArrowRight size={14} className="text-[#82ff1f]" />
                                        {v}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-7 bg-white/[0.02] border border-white/5 p-12 rounded-3xl flex flex-col justify-between items-start text-left">
                        <div className="space-y-6">
                            <h3 className="text-2xl font-bold text-white">¿Hablamos de adopción real?</h3>
                            <p className="text-zinc-400 font-light leading-relaxed">
                                Estoy buscando integrarme en un equipo senior donde mi visión sistémica y mi capacidad de ejecución puedan generar un impacto medible.
                            </p>
                        </div>
                        <div className="mt-12 flex flex-col md:flex-row gap-6 w-full items-start">
                            <a
                                href="mailto:victortorresa94@gmail.com"
                                className="inline-flex items-center justify-center gap-3 bg-[#82ff1f] text-black px-8 py-4 rounded-full text-sm font-bold hover:shadow-[0_0_30px_rgba(130,255,31,0.4)] transition-all transform hover:scale-105"
                            >
                                Enviar mensaje directo
                                <ArrowRight size={18} />
                            </a>
                            <div className="flex items-center gap-4 px-6 md:px-0 mt-4 md:mt-0">
                                <Link
                                    href="/"
                                    className="text-xs font-bold tracking-[0.2em] uppercase text-zinc-500 hover:text-white transition-colors"
                                >
                                    Ver resto del portfolio
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Simple Footer */}
            <footer className="py-12 border-t border-white/5 px-6 md:px-12 text-left">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-zinc-600 text-[10px] font-bold tracking-[0.3em] uppercase">© 2025 VÍCTOR TORRES — AI STRATEGIST</p>
                    <div className="flex gap-8">
                        <a href="https://linkedin.com/in/victortorresa" className="text-zinc-600 hover:text-white text-[10px] font-bold tracking-widest uppercase transition-colors">LinkedIn</a>
                        <a href="mailto:victortorresa94@gmail.com" className="text-zinc-600 hover:text-white text-[10px] font-bold tracking-widest uppercase transition-colors">victortorresa94@gmail.com</a>
                    </div>
                </div>
            </footer>
        </main>
    );
}
