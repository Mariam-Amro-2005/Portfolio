"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { Lang } from "./translations";

interface LanguageContextType {
    lang: Lang;
    setLang: (lang: Lang) => void;
}

const LanguageContext = createContext<LanguageContextType>({
    lang: 'en',
    setLang: () => {},
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [lang, setLangState] = useState<Lang>('en');

    const setLang = (newLang: Lang) => {
        setLangState(newLang);
        // Apply RTL/LTR at the document level
        document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr';
        document.documentElement.lang = newLang;
        // Persist preference
        if (typeof localStorage !== 'undefined') {
            localStorage.setItem('portfolio-lang', newLang);
        }
    };

    useEffect(() => {
        // Restore saved language on mount
        const saved = localStorage.getItem('portfolio-lang') as Lang | null;
        if (saved === 'ar' || saved === 'en') {
            setLangState(saved);
            document.documentElement.dir = saved === 'ar' ? 'rtl' : 'ltr';
            document.documentElement.lang = saved;
        }
    }, []);

    return (
        <LanguageContext.Provider value={{ lang, setLang }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage(): LanguageContextType {
    return useContext(LanguageContext);
}
