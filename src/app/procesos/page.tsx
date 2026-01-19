"use client";

import Link from 'next/link';
import LanguageSwitcher from '@/components/LanguageSwitcher';

import HeroSection from '@/components/procesos/HeroSection';

import ContactSection from '@/components/procesos/ContactSection';
import AccordionGroup from '@/components/procesos/AccordionGroup';

// Content Components
import ProcessDesignSection from '@/components/procesos/ProcessDesignSection';
import ChangeManagementSection from '@/components/procesos/ChangeManagementSection';
import OracleExperienceSection from '@/components/procesos/OracleExperienceSection';
import EmeExperience from '@/components/procesos/EmeExperience';
import NaturalStandardizationSection from '@/components/procesos/NaturalStandardizationSection';
import MappedProcessesSection from '@/components/procesos/MappedProcessesSection';

import { Lightbulb, LayoutTemplate, Network, Users, BrainCircuit, Box, ShieldCheck, BarChart3, Database } from 'lucide-react';

export default function ProcesosPage() {

    // Group 1: Methodology
    const methodologyItems = [
        {
            id: 'process-design',
            title: 'Diseño de Procesos Operativos desde 0',
            subtitle: 'Creación de flujos de trabajo eficientes y escalables',
            icon: LayoutTemplate,
            component: <ProcessDesignSection isEmbedded mode="phases" />
        },
        {
            id: 'impact-measurement',
            title: 'Cómo mido el impacto',
            subtitle: 'KPIs, métricas y dashboards de control',
            icon: BarChart3,
            component: <ProcessDesignSection isEmbedded mode="kpis" />
        },
        {
            id: 'change-management',
            title: 'Gestión del Cambio y Factor Humano',
            subtitle: 'Asegurando la adopción cultural de la tecnología',
            icon: Users,
            component: <ChangeManagementSection isEmbedded />
        }
    ];

    // Group 2: Applied Experience
    const experienceItems = [
        {
            id: 'oracle',
            title: 'Oracle NetSuite Transformation',
            subtitle: 'Implementación ERP Enterprise en sector industrial',
            icon: Box,
            component: <OracleExperienceSection isEmbedded />
        },
        {
            id: 'eme',
            title: 'EME Growth Agency',
            subtitle: 'Automatización y escalado de agencia de marketing',
            icon: Network,
            component: <EmeExperience isEmbedded />
        },
        {
            id: 'natural',
            title: 'Estandarización Natural',
            subtitle: 'Caso de estudio: Sector Musical & Logístico',
            icon: BrainCircuit,
            component: <NaturalStandardizationSection isEmbedded />
        }
    ];

    // Group 3: Process Inventory
    const inventoryItems = [
        {
            id: 'mapped-processes',
            title: 'Inventario de Procesos Mapeados',
            subtitle: 'Lista completa de optimizaciones en Finanzas y Marketing',
            icon: Database,
            component: <MappedProcessesSection isEmbedded />
        }
    ];

    return (
        <main className="min-h-screen bg-[#050505] text-white selection:bg-[#82ff1f] selection:text-black font-sans">

            {/* Minimal Header */}
            <nav className="fixed top-0 w-full z-50 px-6 md:px-12 py-6 flex justify-between items-center bg-gradient-to-b from-[#050505]/90 to-transparent backdrop-blur-[2px]">
                <div className="flex items-center gap-4 md:gap-6">
                    <Link
                        href="/"
                        className="text-sm font-bold tracking-widest text-zinc-500 hover:text-white transition-colors uppercase"
                    >
                        vtorres.net <span className="text-[#82ff1f]">/</span> procesos
                    </Link>

                    <Link
                        href="/"
                        className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-[10px] md:text-xs font-bold text-white hover:bg-white/10 hover:border-[#82ff1f]/30 transition-all uppercase tracking-wider whitespace-nowrap"
                    >
                        Ver mi CV
                    </Link>
                </div>

                <div className="flex items-center gap-6">
                    <LanguageSwitcher />
                </div>
            </nav>

            <HeroSection />

            {/* Group 1: Methodology */}
            <AccordionGroup
                title="Mi Metodología"
                items={methodologyItems}
            />

            {/* Group 2: Applied Experience */}
            <AccordionGroup
                title="Experiencia Aplicada"
                items={experienceItems}
            />

            {/* Group 3: Inventory */}
            <AccordionGroup
                title="Inventario de Procesos"
                items={inventoryItems}
            />

            <ContactSection />

            {/* Simple Footer */}
            <footer className="py-8 text-center text-zinc-600 text-xs uppercase tracking-widest border-t border-zinc-900 bg-[#050505]">
                © 2025 Víctor Torres Arana
            </footer>
        </main>
    );
}
