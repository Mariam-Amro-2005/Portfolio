"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import ThemeToggle from '@/components/ui/ThemeToggle';

export default function Home() {
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
                    className="absolute w-125 h-125 border rounded-full top-10 left-10 border-indigo-400/50 dark:border-indigo-400"
                />

                <motion.div
                    animate={{ y: [0, -20, 0] }}
                    transition={{ duration: 8, repeat: Infinity, delay: 1 }}
                    className="absolute w-62.5 h-62.5 border rounded-full bottom-30 right-10 border-pink-500/50 dark:border-pink-500"
                />

                <div className="absolute top-20 right-20 w-64 h-64 rounded-full blur-3xl bg-indigo-500/20 dark:bg-indigo-500/30" />
                <div className="absolute bottom-20 left-20 w-64 h-64 rounded-full blur-3xl bg-purple-500/20 dark:bg-purple-500/30" />
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
                    <div className="mt-5 px-6 py-3 backdrop-blur-sm border rounded-full bg-white/10 border-indigo-200/20 dark:bg-white/5 dark:border-indigo-800/30"
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
                    className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 px-4 leading-tight"
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
                    <p className="text-xl md:text-2xl max-w-2xl mx-auto text-gray-600 dark:text-gray-300"
                    >
                        <span className="font-light">Two portfolios. </span>
                        <span className="font-bold text-indigo-600 dark:text-indigo-400">One developer</span>
                        <span className="font-light">. </span>
                        <span className="font-light">Your </span>
                        <span className="font-bold text-purple-600 dark:text-purple-400">choice</span>
                        <span className="font-light">:</span>
                    </p>
                </motion.div>

                {/* Location */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-lg mb-12 flex items-center justify-center gap-2 text-gray-500 dark:text-gray-400"
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
                        className="group flex-1 backdrop-blur-sm border-2 rounded-2xl p-8 transition-all duration-300 bg-white/50 border-indigo-200 hover:border-indigo-500 hover:shadow-indigo-500/10 dark:bg-gray-900/50 dark:border-indigo-900/50 dark:hover:border-indigo-500 dark:hover:shadow-indigo-500/10 hover:shadow-xl"
                    >
                        <div className="flex flex-col items-center">
                            <div className="w-20 h-20 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 bg-indigo-100 dark:bg-indigo-900/30"
                            >
                                <svg className="w-10 h-10 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                </svg>
                            </div>
                            <h2 className="text-2xl font-bold mb-3 text-indigo-600 dark:text-indigo-400">
                                Fullstack Development
                            </h2>
                            <p className="text-center mb-6 text-gray-600 dark:text-gray-300">
                                React, Next.js, Spring Boot, TypeScript, and modern web technologies
                            </p>
                            <div className="flex flex-wrap gap-2 justify-center">
                                {['React', 'Next.js', 'Spring Boot', 'TypeScript'].map(tech => (
                                    <span key={tech} className="px-3 py-1 text-sm rounded-full bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <div className="mt-8 font-semibold group-hover:translate-x-1 transition-transform text-indigo-600 dark:text-indigo-400"
                            >
                                Explore Fullstack →
                            </div>
                        </div>
                    </Link>

                    {/* AI Card */}
                    <Link
                        href="/ai"
                        className="group flex-1 backdrop-blur-sm border-2 rounded-2xl p-8 transition-all duration-300 bg-white/50 border-purple-200 hover:border-purple-500 hover:shadow-purple-500/10 dark:bg-gray-900/50 dark:border-purple-900/50 dark:hover:border-purple-500 dark:hover:shadow-purple-500/10 hover:shadow-xl"
                    >
                        <div className="flex flex-col items-center">
                            <div className="w-20 h-20 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 bg-purple-100 dark:bg-purple-900/30"
                            >
                                <svg className="w-10 h-10 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <h2 className="text-2xl font-bold mb-3 text-purple-600 dark:text-purple-400">
                                AI & Data Science
                            </h2>
                            <p className="text-center mb-6 text-gray-600 dark:text-gray-300">
                                Machine Learning, Deep Learning, PyTorch, Data Analysis, and Computer Vision
                            </p>
                            <div className="flex flex-wrap gap-2 justify-center">
                                {['PyTorch', 'Scikit-learn', 'Python', 'TensorFlow'].map(tech => (
                                    <span key={tech} className="px-3 py-1 text-sm rounded-full bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <div className="mt-8 font-semibold group-hover:translate-x-1 transition-transform text-purple-600 dark:text-purple-400"
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
                    className="mt-8 mb-8 text-sm text-gray-500 dark:text-gray-400"
                >
                    Choose your path to explore my work and experience
                </motion.p>
            </div>
        </main>
    );
}