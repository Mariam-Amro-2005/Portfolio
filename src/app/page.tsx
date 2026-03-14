"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import ThemeToggle from '@/components/ui/ThemeToggle';

export default function Home() {
    const [mounted, setMounted] = useState(false);
    const { theme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    // Determine if we're in dark mode
    const isDark = theme === 'dark';

    // Don't render theme-dependent styles until mounted
    if (!mounted) {
        return (
            <main className="min-h-screen flex flex-col items-center justify-center text-center font-sans relative overflow-hidden">
                <div className="relative z-10 max-w-5xl mx-auto px-4">
                    <div className="mb-8 flex justify-center">
                        <div className="mt-5 px-6 py-3 bg-white/10 backdrop-blur-sm border border-indigo-200/20 rounded-full">
                            <span className="text-base md:text-lg font-medium bg-linear-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text">
                                👋 Welcome to My Portfolio
                            </span>
                        </div>
                    </div>
                </div>
            </main>
        );
    }

    return (
        <main className="min-h-screen flex flex-col items-center justify-center text-center font-sans relative overflow-hidden">
            {/* Theme Toggle - Positioned at top right */}
            <div className="absolute top-6 right-6 z-20">
                <ThemeToggle />
            </div>

            {/* Background Decoration Layer */}
            <div className="absolute inset-0 -z-10">
                <motion.div
                    animate={{ y: [0, -20, 0] }}
                    transition={{ duration: 8, repeat: Infinity }}
                    className={`absolute w-125 h-125 border rounded-full top-10 left-10
                        ${isDark 
                            ? 'border-indigo-400' 
                            : 'border-indigo-400/50'
                        }`}
                />
                
                <motion.div
                    animate={{ y: [0, -20, 0] }}
                    transition={{ duration: 8, repeat: Infinity, delay: 1 }}
                    className={`absolute w-62.5 h-62.5 border rounded-full bottom-30 right-10
                        ${isDark 
                            ? 'border-pink-500' 
                            : 'border-pink-500/50'
                        }`}
                />
                
                <div className={`absolute top-20 right-20 w-64 h-64 rounded-full blur-3xl
                    ${isDark ? 'bg-indigo-500/30' : 'bg-indigo-500/20'}`} 
                />
                <div className={`absolute bottom-20 left-20 w-64 h-64 rounded-full blur-3xl
                    ${isDark ? 'bg-purple-500/30' : 'bg-purple-500/20'}`} 
                />
            </div>

            {/* Content with animations */}
            <div className="relative z-10 max-w-5xl mx-auto px-4">
                {/* Welcome Badge - Made larger */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-8 flex justify-center"
                >
                    <div className={`mt-5 px-6 py-3 backdrop-blur-sm border rounded-full
                        ${isDark 
                            ? 'bg-white/5 border-indigo-800/30' 
                            : 'bg-white/10 border-indigo-200/20'
                        }`}
                    >
                        <span className="text-base md:text-lg font-medium bg-linear-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text">
                            👋 Welcome to My Portfolio
                        </span>
                    </div>
                </motion.div>

                {/* Name */}
                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6"
                >
                    Mariam{' '}
                    <span className="bg-linear-to-r from-indigo-500 to-pink-600 text-transparent bg-clip-text">
                        Amro
                    </span>
                    {' '}Ahmed Fathi Seifeldin
                </motion.h1>

                {/* Updated CTA Line - More compelling and explains the dual portfolios */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="mb-8"
                >
                    <p className={`text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed
                        ${isDark ? 'text-gray-300' : 'text-gray-600'}`}
                    >
                        <span className="font-light">I'm a developer with </span>
                        <span className="relative inline-block">
                            <span className={`font-bold ${isDark ? 'text-indigo-400' : 'text-indigo-600'}`}>
                                two sides
                            </span>
                            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-linear-to-r from-indigo-500 to-purple-500 rounded-full"></span>
                        </span>
                        <span className="font-light">. Choose the path that interests you:</span>
                    </p>
                </motion.div>

                {/* Location */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className={`text-lg mb-12 flex items-center justify-center gap-2
                        ${isDark ? 'text-gray-400' : 'text-gray-500'}`}
                >
                    <MapPin size={20} className="text-indigo-500" />
                    <span>Cairo, Egypt</span>
                </motion.p>

                {/* Portfolio Cards */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="flex flex-col md:flex-row gap-6 justify-center items-stretch max-w-3xl mx-auto"
                >
                    {/* Fullstack Card */}
                    <Link 
                        href="/fullstack" 
                        className={`group flex-1 backdrop-blur-sm border-2 rounded-2xl p-8 transition-all duration-300
                            ${isDark 
                                ? 'bg-gray-900/50 border-indigo-900/50 hover:border-indigo-500 hover:shadow-indigo-500/10' 
                                : 'bg-white/50 border-indigo-200 hover:border-indigo-500 hover:shadow-indigo-500/10'
                            } hover:shadow-xl`}
                    >
                        <div className="flex flex-col items-center">
                            <div className={`w-20 h-20 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300
                                ${isDark 
                                    ? 'bg-indigo-900/30' 
                                    : 'bg-indigo-100'
                                }`}
                            >
                                <svg className={`w-10 h-10 ${isDark ? 'text-indigo-400' : 'text-indigo-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                </svg>
                            </div>
                            <h2 className={`text-2xl font-bold mb-3 ${isDark ? 'text-indigo-400' : 'text-indigo-600'}`}>
                                Fullstack Development
                            </h2>
                            <p className={`text-center mb-6 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                                React, Next.js, Spring Boot, TypeScript, and modern web technologies
                            </p>
                            <div className="flex flex-wrap gap-2 justify-center">
                                {['React', 'Next.js', 'Spring Boot', 'TypeScript'].map(tech => (
                                    <span key={tech} className={`px-3 py-1 text-sm rounded-full
                                        ${isDark 
                                            ? 'bg-indigo-900/30 text-indigo-300' 
                                            : 'bg-indigo-100 text-indigo-700'
                                        }`}
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <div className={`mt-8 font-semibold group-hover:translate-x-1 transition-transform
                                ${isDark ? 'text-indigo-400' : 'text-indigo-600'}`}
                            >
                                Explore Fullstack →
                            </div>
                        </div>
                    </Link>

                    {/* AI Card */}
                    <Link 
                        href="/ai" 
                        className={`group flex-1 backdrop-blur-sm border-2 rounded-2xl p-8 transition-all duration-300
                            ${isDark 
                                ? 'bg-gray-900/50 border-purple-900/50 hover:border-purple-500 hover:shadow-purple-500/10' 
                                : 'bg-white/50 border-purple-200 hover:border-purple-500 hover:shadow-purple-500/10'
                            } hover:shadow-xl`}
                    >
                        <div className="flex flex-col items-center">
                            <div className={`w-20 h-20 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300
                                ${isDark 
                                    ? 'bg-purple-900/30' 
                                    : 'bg-purple-100'
                                }`}
                            >
                                <svg className={`w-10 h-10 ${isDark ? 'text-purple-400' : 'text-purple-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <h2 className={`text-2xl font-bold mb-3 ${isDark ? 'text-purple-400' : 'text-purple-600'}`}>
                                AI & Data Science
                            </h2>
                            <p className={`text-center mb-6 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                                Machine Learning, Deep Learning, PyTorch, Data Analysis, and Computer Vision
                            </p>
                            <div className="flex flex-wrap gap-2 justify-center">
                                {['PyTorch', 'Scikit-learn', 'Python', 'TensorFlow'].map(tech => (
                                    <span key={tech} className={`px-3 py-1 text-sm rounded-full
                                        ${isDark 
                                            ? 'bg-purple-900/30 text-purple-300' 
                                            : 'bg-purple-100 text-purple-700'
                                        }`}
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <div className={`mt-8 font-semibold group-hover:translate-x-1 transition-transform
                                ${isDark ? 'text-purple-400' : 'text-purple-600'}`}
                            >
                                Explore AI/ML →
                            </div>
                        </div>
                    </Link>
                </motion.div>

                {/* Footer Note - Kept as is */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className={`mt-8 mb-8 text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}
                >
                    Choose your path to explore my work and experience
                </motion.p>
            </div>
        </main>
    );
}