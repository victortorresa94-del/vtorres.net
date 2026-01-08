import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, LucideIcon } from 'lucide-react';

interface NestedItem {
    id: string;
    title: string;
    subtitle?: string;
    content: React.ReactNode;
}

interface NestedAccordionProps {
    items: NestedItem[];
}

const NestedAccordion: React.FC<NestedAccordionProps> = ({ items }) => {
    const [openId, setOpenId] = useState<string | null>(items[0]?.id || null);

    return (
        <div className="space-y-4 w-full">
            {items.map((item) => (
                <div
                    key={item.id}
                    className="border border-white/5 bg-zinc-900/40 rounded-xl overflow-hidden"
                >
                    <button
                        onClick={() => setOpenId(openId === item.id ? null : item.id)}
                        className="w-full flex items-center justify-between p-6 hover:bg-white/5 transition-colors text-left"
                    >
                        <div>
                            <h4 className={`text-lg transition-colors font-heading font-bold ${openId === item.id ? 'text-[#82ff1f]' : 'text-zinc-200'}`}>
                                {item.title}
                            </h4>
                            {item.subtitle && (
                                <p className="text-sm text-zinc-500 mt-1">{item.subtitle}</p>
                            )}
                        </div>
                        <ChevronDown
                            size={18}
                            className={`text-zinc-500 transition-transform duration-300 ${openId === item.id ? 'rotate-180 text-[#82ff1f]' : ''}`}
                        />
                    </button>

                    <AnimatePresence>
                        {openId === item.id && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden"
                            >
                                <div className="p-6 pt-0 border-t border-white/5">
                                    <div className="pt-6">
                                        {item.content}
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            ))}
        </div>
    );
};

export default NestedAccordion;
