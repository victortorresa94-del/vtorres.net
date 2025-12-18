"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, LucideIcon } from 'lucide-react';

interface AccordionItem {
    id: string;
    title: string;
    subtitle?: string;
    icon: LucideIcon;
    component: React.ReactNode;
}

interface AccordionGroupProps {
    title: string;
    items: AccordionItem[];
}

export default function AccordionGroup({ title, items }: AccordionGroupProps) {
    // Default to the first item open, or null to start closed
    const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

    return (
        <section className="py-24 px-6 md:px-20 bg-black border-t border-zinc-900">
            <div className="max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        {title}
                    </h2>
                    <div className="h-1 w-20 bg-[#82ff1f] rounded-full"></div>
                </motion.div>

                <div className="space-y-6">
                    {items.map((item, index) => (
                        <motion.div
                            key={item.id}
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
                                        <item.icon size={24} />
                                    </div>
                                    <div>
                                        <h3 className={`text-xl md:text-2xl font-medium transition-colors ${expandedIndex === index ? 'text-white' : 'text-zinc-300 group-hover:text-white'}`}>
                                            {item.title}
                                        </h3>
                                        {item.subtitle && (
                                            <p className="text-sm md:text-base text-zinc-500 mt-1">
                                                {item.subtitle}
                                            </p>
                                        )}
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
                                            {item.component}
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
