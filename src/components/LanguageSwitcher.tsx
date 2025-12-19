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
                    const current = language as string;
                    if (current === 'es') setLanguage('ca' as any);
                    else if (current === 'ca') setLanguage('en');
                    else setLanguage('es');
                }}
                className="text-xs font-bold text-white pr-3 pl-1 tracking-tight hover:text-[#82ff1f] transition-colors"
            >
                {(language as string) === 'es' ? 'ESPAÑOL' : (language as string) === 'ca' ? 'CATALÀ' : 'ENGLISH'}
                <span className="ml-2 text-zinc-500 group-hover:text-zinc-300">
                    | {(language as string) === 'es' ? 'CA' : (language as string) === 'ca' ? 'EN' : 'ES'}
                </span>
            </button>
        </div>
    );
}
