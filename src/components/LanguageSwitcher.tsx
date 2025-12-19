"use client";

import { useLanguage } from '@/lib/LanguageContext';
import { Globe } from 'lucide-react';

export default function LanguageSwitcher() {
    const { language, setLanguage } = useLanguage();

    return (
        <div className="flex items-center gap-2 bg-white/5 border border-white/10 p-1 rounded-full group hover:border-[#82ff1f]/30 transition-all">
            <div className="w-8 h-8 rounded-full bg-[#82ff1f]/10 flex items-center justify-center text-[#82ff1f]">
                <Globe size={16} />
            </div>
            <button
                onClick={() => {
                    const next = language === 'es' ? 'ca' : (language as string) === 'ca' ? 'en' : 'es';
                    setLanguage(next as any);
                }}
                className="text-xs font-bold text-white pr-3 pl-1 tracking-tight hover:text-[#82ff1f] transition-colors"
            >
                {language === 'es' ? 'ESPAÑOL' : language === 'ca' ? 'CATALÀ' : 'ENGLISH'}
                <span className="ml-2 text-zinc-500 group-hover:text-zinc-300">
                    | {language === 'es' ? 'CA' : language === 'ca' ? 'EN' : 'ES'}
                </span>
            </button>
        </div>
    );
}
