"use client";

import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Code2, Brain, ChevronDown } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

interface ModeSwitcherProps {
    currentMode: 'fullstack' | 'ai';
}

export default function ModeSwitcher({ currentMode }: ModeSwitcherProps) {
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const modes = [
        { id: 'fullstack', label: 'Fullstack Development', icon: Code2, color: 'indigo' },
        { id: 'ai', label: 'AI & Data Science', icon: Brain, color: 'purple' }
    ] as const;

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
                        ? 'border-indigo-500 bg-indigo-50 dark:bg-indigo-950/30 hover:bg-indigo-100 dark:hover:bg-indigo-950/50'
                        : 'border-purple-500 bg-purple-50 dark:bg-purple-950/30 hover:bg-purple-100 dark:hover:bg-purple-950/50'
                    }
                `}
            >
                <div className={`
                    p-2 rounded-full
                    ${currentMode === 'fullstack' 
                        ? 'bg-indigo-100 dark:bg-indigo-900' 
                        : 'bg-purple-100 dark:bg-purple-900'}
                `}>
                    <CurrentIcon className={`
                        w-5 h-5
                        ${currentMode === 'fullstack' 
                            ? 'text-indigo-600 dark:text-indigo-300' 
                            : 'text-purple-600 dark:text-purple-300'}
                    `} />
                </div>
                <span className="font-semibold text-gray-800 dark:text-gray-200">
                    {currentModeData.label}
                </span>
                <ChevronDown className={`
                    w-4 h-4 transition-transform duration-300
                    ${isOpen ? 'rotate-180' : ''}
                    ${currentMode === 'fullstack' 
                        ? 'text-indigo-500' 
                        : 'text-purple-500'}
                `} />
            </motion.button>

            {/* Dropdown Menu */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-0 right-0 mt-2 bg-white dark:bg-gray-900 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-800 overflow-hidden z-50"
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
                                            ? 'bg-indigo-50 dark:bg-indigo-950/30'
                                            : 'bg-purple-50 dark:bg-purple-950/30'
                                        : 'hover:bg-gray-50 dark:hover:bg-gray-800'
                                    }
                                    ${!isActive && 'opacity-75 hover:opacity-100'}
                                `}
                            >
                                <div className={`
                                    p-2 rounded-full
                                    ${mode.id === 'fullstack'
                                        ? 'bg-indigo-100 dark:bg-indigo-900'
                                        : 'bg-purple-100 dark:bg-purple-900'}
                                `}>
                                    <Icon className={`
                                        w-4 h-4
                                        ${mode.id === 'fullstack'
                                            ? 'text-indigo-600 dark:text-indigo-300'
                                            : 'text-purple-600 dark:text-purple-300'}
                                    `} />
                                </div>
                                <div className="flex-1 text-left">
                                    <p className="font-semibold text-gray-800 dark:text-gray-200">
                                        {mode.label}
                                    </p>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">
                                        {mode.id === 'fullstack' 
                                            ? 'React, Next.js, Spring Boot, TypeScript'
                                            : 'Python, PyTorch, TensorFlow, Data Analysis'}
                                    </p>
                                </div>
                                {isActive && (
                                    <div className={`
                                        w-2 h-2 rounded-full
                                        ${mode.id === 'fullstack' 
                                            ? 'bg-indigo-500' 
                                            : 'bg-purple-500'}
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