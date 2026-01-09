'use client';

import { useState } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ChatWindow from './ChatWindow';
import Image from 'next/image';

export default function ChatWidget() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end sm:bottom-8 sm:right-8 print:hidden">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="mb-4 w-[90vw] max-w-[400px] origin-bottom-right rounded-2xl border border-white/10 bg-black/95 shadow-2xl backdrop-blur-xl sm:w-[400px]"
                    >
                        <ChatWindow />
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="relative flex items-center gap-4">
                {/* Speech Bubble Popup */}
                <AnimatePresence>
                    {!isOpen && (
                        <motion.div
                            initial={{ opacity: 0, x: 20, scale: 0.8 }}
                            animate={{ opacity: 1, x: 0, scale: 1 }}
                            exit={{ opacity: 0, x: 10, scale: 0.9 }}
                            transition={{ delay: 1, duration: 0.5 }}
                            className="mr-4 hidden whitespace-nowrap rounded-2xl rounded-tr-sm bg-white px-5 py-3 text-sm font-medium text-zinc-800 shadow-xl sm:block"
                        >
                            <p>Hey! Puedes preguntarme a mí... 👋</p>
                        </motion.div>
                    )}
                </AnimatePresence>

                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsOpen(!isOpen)}
                    className="group relative flex h-16 w-16 items-center justify-center overflow-hidden rounded-full border-2 border-[#82ff1f] shadow-2xl shadow-[#82ff1f]/20 transition-all hover:bg-[#82ff1f]/10"
                >
                    <AnimatePresence mode="wait">
                        {isOpen ? (
                            <motion.div
                                key="close"
                                initial={{ rotate: -90, opacity: 0 }}
                                animate={{ rotate: 0, opacity: 1 }}
                                exit={{ rotate: 90, opacity: 0 }}
                                className="flex h-full w-full items-center justify-center bg-[#82ff1f] text-black"
                            >
                                <X className="h-6 w-6" />
                            </motion.div>
                        ) : (
                            <motion.div
                                key="chat"
                                initial={{ rotate: 90, opacity: 0 }}
                                animate={{ rotate: 0, opacity: 1 }}
                                exit={{ rotate: -90, opacity: 0 }}
                                className="relative h-full w-full bg-zinc-900"
                            >
                                <Image
                                    src="/images/profile.jpg"
                                    alt="Victor AI"
                                    fill
                                    className="object-cover opacity-90 transition-opacity group-hover:opacity-100"
                                />

                                {/* Online Status Indicator */}
                                <span className="absolute bottom-1 right-1 flex h-4 w-4">
                                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#82ff1f] opacity-75"></span>
                                    <span className="relative inline-flex h-4 w-4 rounded-full border-2 border-zinc-900 bg-[#82ff1f]"></span>
                                </span>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.button>
            </div>
        </div>
    );
}
