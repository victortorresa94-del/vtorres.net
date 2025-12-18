"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";

type Achievement = {
    id: number;
    title: string;
    role: string;
    desc: string;
    tags: string[];
    image: string;
    metric?: string;
};

export default function AchievementsCarousel({ items }: { items: Achievement[] }) {
    const [index, setIndex] = useState(0);

    const nextSlide = () => {
        setIndex((prev) => (prev + 1) % items.length);
    };

    const prevSlide = () => {
        setIndex((prev) => (prev - 1 + items.length) % items.length);
    };

    const handleDragEnd = (event: any, info: any) => {
        const threshold = 50; // minimum drag distance to trigger slide change
        if (info.offset.x > threshold) {
            prevSlide();
        } else if (info.offset.x < -threshold) {
            nextSlide();
        }
    };

    return (
        <div className="relative w-full max-w-6xl mx-auto min-h-[500px] flex items-center justify-center py-10">

            {/* Background Decor */}
            <div className="absolute inset-0 bg-[#82ff1f]/5 blur-[100px] rounded-full opacity-20 pointer-events-none"></div>

            <div className="relative w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

                {/* Left: Text Content */}
                <div className="space-y-6 md:pl-8 z-20 order-2 md:order-1">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={items[index].id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.4 }}
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <span className="text-[#82ff1f] font-mono text-sm tracking-widest border border-[#82ff1f]/30 px-3 py-1 rounded-full bg-[#82ff1f]/5">
                                    0{items[index].id}
                                </span>
                                <span className="text-zinc-500 font-mono text-xs uppercase">{items[index].role}</span>
                            </div>

                            <h3 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6 leading-tight">
                                {items[index].title}
                            </h3>

                            <p className="text-lg text-zinc-400 leading-relaxed mb-6 border-l-2 border-[#82ff1f]/50 pl-6">
                                {items[index].desc}
                            </p>

                            {items[index].metric && (
                                <div className="mb-6">
                                    <p className="text-white font-bold text-xl">{items[index].metric}</p>
                                </div>
                            )}

                            <div className="flex flex-wrap gap-2">
                                {items[index].tags.map((tag) => (
                                    <span key={tag} className="px-3 py-1 bg-white/5 rounded-lg text-xs font-medium text-zinc-300 border border-white/5">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Controls */}
                    <div className="flex gap-4 pt-8">
                        <button
                            onClick={prevSlide}
                            className="p-4 rounded-full border border-white/10 text-white hover:bg-white/10 hover:border-[#82ff1f] transition-all"
                        >
                            <ArrowLeft size={20} />
                        </button>
                        <button
                            onClick={nextSlide}
                            className="p-4 rounded-full bg-[#82ff1f] text-black font-bold hover:bg-[#6ed617] hover:scale-105 transition-all shadow-[0_0_20px_rgba(130,255,31,0.3)]"
                        >
                            <ArrowRight size={20} />
                        </button>
                    </div>
                </div>

                {/* Right: 3D Stack Images - Now draggable */}
                <motion.div
                    className="relative h-[400px] md:h-[500px] w-full flex items-center justify-center order-1 md:order-2 perspective-1000 cursor-grab active:cursor-grabbing touch-pan-y"
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.2}
                    onDragEnd={handleDragEnd}
                >
                    {items.map((item, i) => {
                        const isActive = i === index;
                        const offset = i - index;

                        // Only render reasonably close cards
                        if (Math.abs(offset) > 2 && !isActive) return null;

                        return (
                            <motion.div
                                key={item.id}
                                className="absolute w-full max-w-sm md:max-w-md aspect-[3/4] rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-[#111]"
                                initial={false}
                                animate={{
                                    scale: isActive ? 1 : 1 - Math.abs(offset) * 0.1,
                                    x: isActive ? 0 : offset * 40,
                                    z: isActive ? 0 : -offset * 50,
                                    opacity: isActive ? 1 : offset > 0 ? 1 - offset * 0.4 : 0,
                                    rotateY: isActive ? 0 : offset * -5,
                                    zIndex: items.length - Math.abs(offset)
                                }}
                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                style={{
                                    transformStyle: "preserve-3d",
                                }}
                            >
                                <div className="relative w-full h-full">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                                </div>
                            </motion.div>
                        )
                    })}
                </motion.div>

            </div>
        </div >
    );
}
