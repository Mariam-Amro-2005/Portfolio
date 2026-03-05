"use client";

import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Code2, Brain, ChevronDown } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { useTheme } from 'next-themes'; // Import useTheme

interface ModeSwitcherProps {
    currentMode: 'fullstack' | 'ai';
}

export default function ModeSwitcher({ currentMode }: ModeSwitcherProps) {
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);
    const [mounted, setMounted] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const { theme } = useTheme(); // Get the current theme

    const modes = [
        { id: 'fullstack', label: 'Fullstack Development', icon: Code2, color: 'indigo' },
        { id: 'ai', label: 'AI & Data Science', icon: Brain, color: 'purple' }
    ] as const;

    // Handle hydration
    useEffect(() => {
        setMounted(true);
    }, []);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const switchMode = (mode: 'fullstack' | 'ai') => {
        setIsOpen(false);
        router.push(`/${mode}`);
    };

    const currentModeData = modes.find(m => m.id === currentMode)!;
    const CurrentIcon = currentModeData.icon;

    // Don't render theme-dependent styles until mounted
    if (!mounted) {
        return (
            <div className="relative" ref={dropdownRef}>
                <div className="flex items-center gap-3 px-5 py-3 rounded-full border-2 border-gray-300 bg-gray-100">
                    <div className="p-2 rounded-full bg-gray-200">
                        <CurrentIcon className="w-5 h-5 text-gray-600" />
                    </div>
                    <span className="font-semibold text-gray-800">{currentModeData.label}</span>
                    <ChevronDown className="w-4 h-4 text-gray-500" />
                </div>
            </div>
        );
    }

    // Determine if we're in dark mode
    const isDark = theme === 'dark';

    return (
        <div className="relative" ref={dropdownRef}>
            {/* Mode Switcher Button */}
            <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setIsOpen(!isOpen)}
                className={`
                    flex items-center gap-3 px-5 py-3 rounded-full
                    border-2 transition-all duration-300
                    ${currentMode === 'fullstack'
                        ? `border-indigo-500 ${isDark ? 'bg-indigo-950/30 hover:bg-indigo-950/50' : 'bg-indigo-50 hover:bg-indigo-100'}`
                        : `border-purple-500 ${isDark ? 'bg-purple-950/30 hover:bg-purple-950/50' : 'bg-purple-50 hover:bg-purple-100'}`
                    }
                `}
            >
                <div className={`
                    p-2 rounded-full
                    ${currentMode === 'fullstack' 
                        ? isDark ? 'bg-indigo-900' : 'bg-indigo-100'
                        : isDark ? 'bg-purple-900' : 'bg-purple-100'}
                `}>
                    <CurrentIcon className={`
                        w-5 h-5
                        ${currentMode === 'fullstack' 
                            ? isDark ? 'text-indigo-300' : 'text-indigo-600'
                            : isDark ? 'text-purple-300' : 'text-purple-600'}
                    `} />
                </div>
                <span className={`font-semibold ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>
                    {currentModeData.label}
                </span>
                <ChevronDown className={`
                    w-4 h-4 transition-transform duration-300
                    ${isOpen ? 'rotate-180' : ''}
                    ${currentMode === 'fullstack' 
                        ? isDark ? 'text-indigo-400' : 'text-indigo-500'
                        : isDark ? 'text-purple-400' : 'text-purple-500'}
                `} />
            </motion.button>

            {/* Dropdown Menu */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className={`absolute left-0 right-0 mt-2 rounded-2xl shadow-xl border overflow-hidden z-50
                        ${isDark ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'}
                    `}
                >
                    {modes.map((mode) => {
                        const Icon = mode.icon;
                        const isActive = mode.id === currentMode;
                        
                        return (
                            <button
                                key={mode.id}
                                onClick={() => switchMode(mode.id)}
                                className={`
                                    w-full flex items-center gap-3 px-5 py-4
                                    transition-all duration-200
                                    ${isActive 
                                        ? mode.id === 'fullstack'
                                            ? isDark ? 'bg-indigo-950/30' : 'bg-indigo-50'
                                            : isDark ? 'bg-purple-950/30' : 'bg-purple-50'
                                        : isDark 
                                            ? 'hover:bg-gray-800' 
                                            : 'hover:bg-gray-50'
                                    }
                                    ${!isActive && 'opacity-75 hover:opacity-100'}
                                `}
                            >
                                <div className={`
                                    p-2 rounded-full
                                    ${mode.id === 'fullstack'
                                        ? isDark ? 'bg-indigo-900' : 'bg-indigo-100'
                                        : isDark ? 'bg-purple-900' : 'bg-purple-100'}
                                `}>
                                    <Icon className={`
                                        w-4 h-4
                                        ${mode.id === 'fullstack'
                                            ? isDark ? 'text-indigo-300' : 'text-indigo-600'
                                            : isDark ? 'text-purple-300' : 'text-purple-600'}
                                    `} />
                                </div>
                                <div className="flex-1 text-left">
                                    <p className={`font-semibold ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>
                                        {mode.label}
                                    </p>
                                    <p className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                                        {mode.id === 'fullstack' 
                                            ? 'React, Next.js, Spring Boot, TypeScript'
                                            : 'Python, PyTorch, TensorFlow, Data Analysis'}
                                    </p>
                                </div>
                                {isActive && (
                                    <div className={`
                                        w-2 h-2 rounded-full
                                        ${mode.id === 'fullstack' 
                                            ? isDark ? 'bg-indigo-400' : 'bg-indigo-500'
                                            : isDark ? 'bg-purple-400' : 'bg-purple-500'}
                                    `} />
                                )}
                            </button>
                        );
                    })}
                </motion.div>
            )}
        </div>
    );
}