"use client";

import { useLanguage } from '@/lib/LanguageContext';
import { Globe } from 'lucide-react';

export default function LanguageSwitcher() {
    const { language, setLanguage } = useLanguage();

    return (
        <div className="flex items-center gap-2">
            <Globe size={16} className="text-zinc-400" />
            <button
                onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}
                className="text-sm font-medium text-zinc-400 hover:text-white transition-colors px-3 py-1.5 rounded-lg hover:bg-white/5"
            >
                {language === 'es' ? 'EN' : 'ES'}
            </button>
        </div>
    );
}
