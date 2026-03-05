"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { useTheme } from "next-themes";
import { Menu, X } from "lucide-react";

interface NavbarProps {
    mode?: 'fullstack' | 'ai';
    sections: string[];
}

export default function Navbar({ mode, sections }: NavbarProps) {
    const [active, setActive] = useState("");
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [mounted, setMounted] = useState(false);
    const { theme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        const observers: IntersectionObserver[] = [];
        const allSections = ['home', ...sections];

        const options: IntersectionObserverInit = {
            threshold: 0.2,
            rootMargin: '-80px 0px 0px 0px',
        };

        allSections.forEach((id) => {
            const element = document.getElementById(id);
            if (!element) return;

            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setActive(id);
                        setIsMenuOpen(false);
                    }
                },
                options
            );

            observer.observe(element);
            observers.push(observer);
        });

        return () => observers.forEach((obs) => obs.disconnect());
    }, [sections]);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 975) {
                setIsMenuOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Don't render theme-dependent styles until mounted
    if (!mounted) {
        return (
            <nav className="flex justify-center mt-6 mb-6 sticky top-4 z-50 px-4">
                <div className="relative w-full max-w-6xl">
                    <div className="hidden min-[975px]:flex items-center justify-center">
                        <div className="flex items-center border border-slate-300 backdrop-blur-md shadow-sm rounded-full px-6 py-3 gap-6">
                            <div className="w-32 h-8" /> {/* Placeholder */}
                        </div>
                    </div>
                </div>
            </nav>
        );
    }

    const isDark = theme === 'dark';

    const linkStyle = (id: string) => {
        const baseStyle = "transition hover:text-indigo-600 underline-offset-8 decoration-2";
        
        if (active === id) {
            return `${baseStyle} underline decoration-2 underline-offset-2 ${
                isDark 
                    ? "decoration-blue-600 hover:decoration-indigo-400" 
                    : "decoration-pink-600 hover:decoration-indigo-500"
            }`;
        }
        
        return `${baseStyle} no-underline hover:underline hover:decoration-indigo-500`;
    };

    const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
        const target = document.getElementById(id);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        setIsMenuOpen(false);
    };

    const handleKeyDown = (e: React.KeyboardEvent, id: string) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            const target = document.getElementById(id);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                setIsMenuOpen(false);
            }
        }
    };

    const formatLabel = (id: string) => {
        if (id === 'home') return 'Home';
        if (id === 'achievements' || id === 'certifications') {
            return id.charAt(0).toUpperCase() + id.slice(1);
        }
        return id.charAt(0).toUpperCase() + id.slice(1);
    };

    // Border color based on theme
    const borderColor = isDark ? 'border-slate-700' : 'border-slate-300';
    
    // Dropdown background based on theme
    const dropdownBg = isDark 
        ? 'bg-slate-900/90 border-slate-700' 
        : 'bg-white/90 border-slate-300';

    return (
        <nav className="flex justify-center mt-6 mb-6 sticky top-4 z-50 px-4">
            <div className="relative w-full max-w-6xl">
                {/* Desktop Navigation */}
                <div className="hidden min-[975px]:flex items-center justify-center">
                    <div className={`flex items-center border ${borderColor} backdrop-blur-md shadow-sm rounded-full px-6 py-3 gap-6`}>
                        {mode && (
                            <Link
                                href="#home"
                                onClick={(e) => handleLinkClick(e, 'home')}
                                onKeyDown={(e) => handleKeyDown(e, 'home')}
                                className="transition-transform hover:scale-105"
                            >
                                <div className={`
                                    px-3 py-1 rounded-full text-xs font-semibold uppercase cursor-pointer
                                    transition-colors duration-200
                                    ${mode === 'fullstack'
                                        ? isDark
                                            ? 'bg-indigo-900/30 text-indigo-300 hover:bg-indigo-900/50'
                                            : 'bg-indigo-100 text-indigo-700 hover:bg-indigo-200'
                                        : isDark
                                            ? 'bg-purple-900/30 text-purple-300 hover:bg-purple-900/50'
                                            : 'bg-purple-100 text-purple-700 hover:bg-purple-200'
                                    }
                                `}>
                                    {mode === 'fullstack' ? 'Fullstack' : 'AI/ML'}
                                </div>
                            </Link>
                        )}

                        {sections.map((id) => (
                            <Link
                                key={id}
                                href={`#${id}`}
                                className={linkStyle(id)}
                                onClick={(e) => handleLinkClick(e, id)}
                                onKeyDown={(e) => handleKeyDown(e, id)}
                            >
                                {formatLabel(id)}
                            </Link>
                        ))}

                        <ThemeToggle />
                    </div>
                </div>

                {/* Mobile Navigation */}
                <div className="flex min-[975px]:hidden items-center justify-between">
                    <Link
                        href="#home"
                        onClick={(e) => handleLinkClick(e, 'home')}
                        onKeyDown={(e) => handleKeyDown(e, 'home')}
                        className="flex items-center"
                    >
                        <div className={`flex items-center border ${borderColor} backdrop-blur-md shadow-sm rounded-full px-2 py-2`}>
                            {mode && (
                                <div className={`
                                    px-2 py-1 rounded-full text-xs font-semibold uppercase mr-2
                                    ${mode === 'fullstack'
                                        ? isDark
                                            ? 'bg-indigo-900/30 text-indigo-300'
                                            : 'bg-indigo-100 text-indigo-700'
                                        : isDark
                                            ? 'bg-purple-900/30 text-purple-300'
                                            : 'bg-purple-100 text-purple-700'
                                    }
                                `}>
                                    {mode === 'fullstack' ? 'FS' : 'AI'}
                                </div>
                            )}
                            <ThemeToggle />
                        </div>
                    </Link>

                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className={`p-2 rounded-full border ${borderColor} backdrop-blur-md shadow-sm transition cursor-pointer
                            ${isDark 
                                ? 'hover:bg-slate-800' 
                                : 'hover:bg-slate-100'
                            }`}
                        aria-label="Toggle menu"
                        // aria-expanded={isMenuOpen}
                    >
                        {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>

                {/* Mobile Menu Dropdown */}
                {isMenuOpen && (
                    <div className="absolute top-16 left-0 right-0 min-[975px]:hidden">
                        <div className={`border ${dropdownBg} backdrop-blur-md shadow-lg rounded-2xl py-2 px-2`}>
                            <Link
                                href="#home"
                                className={`block px-4 py-3 rounded-lg transition ${
                                    active === 'home'
                                        ? isDark
                                            ? 'bg-slate-800 text-blue-400'
                                            : 'bg-slate-100 text-pink-600'
                                        : isDark
                                            ? 'hover:bg-slate-800 text-gray-200'
                                            : 'hover:bg-slate-100 text-gray-800'
                                }`}
                                onClick={(e) => handleLinkClick(e, 'home')}
                                onKeyDown={(e) => handleKeyDown(e, 'home')}
                            >
                                {formatLabel('home')}
                            </Link>
                            {sections.map((id) => (
                                <Link
                                    key={id}
                                    href={`#${id}`}
                                    className={`block px-4 py-3 rounded-lg transition ${
                                        active === id
                                            ? isDark
                                                ? 'bg-slate-800 text-blue-400'
                                                : 'bg-slate-100 text-pink-600'
                                            : isDark
                                                ? 'hover:bg-slate-800 text-gray-200'
                                                : 'hover:bg-slate-100 text-gray-800'
                                    }`}
                                    onClick={(e) => handleLinkClick(e, id)}
                                    onKeyDown={(e) => handleKeyDown(e, id)}
                                >
                                    {formatLabel(id)}
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}