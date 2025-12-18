"use client";

import { useState } from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Database, Zap, Users, BrainCircuit } from 'lucide-react';

// Import the sub-sections
import OracleExperienceSection from './OracleExperienceSection';
import EmeExperience from './EmeExperience';
import ChangeManagementSection from './ChangeManagementSection';
import NaturalStandardizationSection from './NaturalStandardizationSection';

export default function ExperienceSection() {
    const { t } = useLanguage();
    // We'll trust the sub-components to fetch their own content from translations
    // But we need titles for the Accordion headers. We can fetch them or hardcode "labels".
    // Better to fetch titles from translations for consistency.

    const [expandedIndex, setExpandedIndex] = useState<number | null>(0); // Default first open? Or all closed? User said "desplegable", implying user opens them. Let's default 0 open so it's not empty.

    const sections = [
        {
            id: 'oracle',
            title: t.procesos.oracleExperience?.title || "Oracle NetSuite Transformation",
            subtitle: t.procesos.oracleExperience?.company || "DisrupTT / CulturA",
            icon: Database,
            component: <OracleExperienceSection isEmbedded={true} />
        },
        {
            id: 'eme',
            title: "EME Growth Agency", // Title is hardcoded in EmeExperience usually, but let's grab from translation if possible, or static. 
            subtitle: "Deep Dive: Operations & Project Management",
            icon: Zap,
            component: <EmeExperience isEmbedded={true} />
        },
        {
            id: 'change',
            title: t.procesos.changeManagement?.title || "Change Management & Human Factor",
            subtitle: t.procesos.changeManagement?.subtitle || "Methodology",
            icon: Users,
            component: <ChangeManagementSection isEmbedded={true} />
        },
        {
            id: 'natural',
            title: t.procesos.naturalStandardization?.title || "Natural Standardization",
            subtitle: "Origin & Natural Skillset",
            icon: BrainCircuit,
            component: <NaturalStandardizationSection isEmbedded={true} />
        }
    ];

    return (
        <section className="py-24 px-6 md:px-20 bg-black min-h-screen">
            <div className="max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        {t.procesos.experience.title}
                    </h2>
                    <div className="h-1 w-20 bg-[#82ff1f] rounded-full"></div>
                </motion.div>

                <div className="space-y-6">
                    {sections.map((section, index) => (
                        <motion.div
                            key={section.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="border border-zinc-900 rounded-3xl bg-zinc-900/10 overflow-hidden"
                        >
                            <button
                                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-6 md:p-8 hover:bg-zinc-900/30 transition-colors group text-left"
                            >
                                <div className="flex items-center gap-6">
                                    <div className={`p-4 rounded-full border border-zinc-800 transition-colors ${expandedIndex === index ? 'bg-[#82ff1f] text-black border-[#82ff1f]' : 'bg-transparent text-zinc-500 group-hover:text-[#82ff1f] group-hover:border-[#82ff1f]/50'}`}>
                                        <section.icon size={24} />
                                    </div>
                                    <div>
                                        <h3 className={`text-xl md:text-2xl font-medium transition-colors ${expandedIndex === index ? 'text-white' : 'text-zinc-300 group-hover:text-white'}`}>
                                            {section.title}
                                        </h3>
                                        <p className="text-sm md:text-base text-zinc-500 mt-1">
                                            {section.subtitle}
                                        </p>
                                    </div>
                                </div>
                                <div className={`p-2 rounded-full border border-zinc-800 transition-all duration-300 ${expandedIndex === index ? 'rotate-180 bg-zinc-800 text-white' : 'text-zinc-500'}`}>
                                    <ChevronDown size={20} />
                                </div>
                            </button>

                            <AnimatePresence>
                                {expandedIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.4, ease: "easeInOut" }}
                                        className="overflow-hidden bg-black/20"
                                    >
                                        <div className="p-2 md:p-6 border-t border-zinc-800/50">
                                            {/* We pass a prop to inform components they are inside an accordion to potentially adjust padding/titles if needed, though they don't support it yet */}
                                            {section.component}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
