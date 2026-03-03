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

    const linkStyle = (id: string) => {
        if (!mounted) {
            return `transition hover:text-indigo-600 underline-offset-8 decoration-2
                    ${active === id ? 'underline decoration-2 underline-offset-2' : 'no-underline hover:underline hover:decoration-indigo-500'}`;
        }

        return `transition hover:text-indigo-600 underline-offset-8 decoration-2
            ${active === id
                ? `underline decoration-2 underline-offset-2 ${theme == "dark" ? "decoration-blue-600 hover:decoration-indigo-400" : "decoration-pink-600 hover:decoration-indigo-500"}`
                : "no-underline hover:underline hover:decoration-indigo-500"
            }`;
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

    return (
        <nav className="flex justify-center mt-6 mb-6 sticky top-4 z-50 px-4">
            <div className="relative w-full max-w-6xl">
                {/* Desktop Navigation */}
                <div className="hidden min-[975px]:flex items-center justify-center">
                    <div className="flex items-center border border-slate-300 backdrop-blur-md shadow-sm rounded-full px-6 py-3 gap-6">
                        {mode && (
                            <Link
                                href="#home"
                                onClick={(e) => handleLinkClick(e, 'home')}
                                onKeyDown={(e) => handleKeyDown(e, 'home')}
                                className="transition-transform hover:scale-105"
                            >
                                <div className={`
                                    px-3 py-1 rounded-full text-xs font-semibold uppercase cursor-pointer
                                    ${mode === 'fullstack'
                                        ? 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300 hover:bg-indigo-200 dark:hover:bg-indigo-900/50'
                                        : 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300 hover:bg-purple-200 dark:hover:bg-purple-900/50'
                                    }
                                    transition-colors duration-200
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
                        <div className="flex items-center border border-slate-300 backdrop-blur-md shadow-sm rounded-full px-2 py-2">
                            {mode && (
                                <div className={`
                                    px-2 py-1 rounded-full text-xs font-semibold uppercase mr-2
                                    ${mode === 'fullstack'
                                        ? 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300'
                                        : 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300'
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
                        className="p-2 rounded-full border border-slate-300 backdrop-blur-md shadow-sm hover:bg-slate-100 dark:hover:bg-slate-800 transition cursor-pointer"
                        aria-label="Toggle menu"
                        // aria-expanded={isMenuOpen}
                    >
                        {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>

                {/* Mobile Menu Dropdown */}
                {isMenuOpen && (
                    <div className="absolute top-16 left-0 right-0 min-[975px]:hidden">
                        <div className="border border-slate-300 backdrop-blur-md bg-white/90 dark:bg-slate-900/90 shadow-lg rounded-2xl py-2 px-2">
                            <Link
                                href="#home"
                                className={`block px-4 py-3 rounded-lg transition ${active === 'home'
                                    ? `bg-slate-100 dark:bg-slate-800 ${theme == "dark" ? "text-blue-400" : "text-pink-600"}`
                                    : "hover:bg-slate-100 dark:hover:bg-slate-800"
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
                                    className={`block px-4 py-3 rounded-lg transition ${active === id
                                        ? `bg-slate-100 dark:bg-slate-800 ${theme == "dark" ? "text-blue-400" : "text-pink-600"}`
                                        : "hover:bg-slate-100 dark:hover:bg-slate-800"
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