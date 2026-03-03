"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

export default function Home() {
    return (
        <main className="min-h-screen flex flex-col items-center justify-center text-center font-sans relative overflow-hidden">
            {/* Background Decoration Layer */}
            <div className="absolute inset-0 -z-10">
                <motion.div
                    animate={{ y: [0, -20, 0] }}
                    transition={{ duration: 8, repeat: Infinity }}
                    className="absolute w-125 h-125 border border-indigo-400/50 dark:border-indigo-400 rounded-full top-10 left-10"
                />
                
                <motion.div
                    animate={{ y: [0, -20, 0] }}
                    transition={{ duration: 8, repeat: Infinity, delay: 1 }}
                    className="absolute w-62.5 h-62.5 border border-pink-500/50 dark:border-pink-500 rounded-full bottom-30 right-10"
                />
                
                <div className="absolute top-20 right-20 w-64 h-64 bg-indigo-500/20 dark:bg-indigo-500/30 rounded-full blur-3xl" />
                <div className="absolute bottom-20 left-20 w-64 h-64 bg-purple-500/20 dark:bg-purple-500/30 rounded-full blur-3xl" />
            </div>

            {/* Content with animations */}
            <div className="relative z-10 max-w-5xl mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-8 flex justify-center"
                >
                    <div className="mt-5 px-4 py-2 bg-white/10 dark:bg-white/5 backdrop-blur-sm border border-indigo-200/20 dark:border-indigo-800/30 rounded-full">
                        <span className="text-sm font-medium bg-linear-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text">
                            👋 Welcome to My Portfolio
                        </span>
                    </div>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6"
                >
                    Mariam{' '}
                    <span className="bg-linear-to-r from-indigo-500 to-pink-600 text-transparent bg-clip-text">
                        Ahmed
                    </span>
                    {' '}Fathi Seifeldin
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto"
                >
                    Exploring {' '}
                    <span className="font-semibold text-indigo-600 dark:text-indigo-400">Fullstack Development</span>
                    {' '}&{' '}
                    <span className="font-semibold text-purple-600 dark:text-purple-400">AI/Data Science</span>
                </motion.p>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-lg text-gray-500 dark:text-gray-400 mb-12 flex items-center justify-center gap-2"
                >
                    <MapPin size={20} className="text-indigo-500" />
                    <span>Cairo, Egypt</span>
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="flex flex-col md:flex-row gap-6 justify-center items-stretch max-w-3xl mx-auto"
                >
                    {/* Fullstack Card */}
                    <Link 
                        href="/fullstack" 
                        className="group flex-1 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm border-2 border-indigo-200 dark:border-indigo-900/50 rounded-2xl p-8 hover:border-indigo-500 hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300"
                    >
                        <div className="flex flex-col items-center">
                            <div className="w-20 h-20 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <svg className="w-10 h-10 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                </svg>
                            </div>
                            <h2 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-3">Fullstack Development</h2>
                            <p className="text-gray-600 dark:text-gray-300 text-center mb-6">
                                React, Next.js, Spring Boot, TypeScript, and modern web technologies
                            </p>
                            <div className="flex flex-wrap gap-2 justify-center">
                                {['React', 'Next.js', 'Spring Boot', 'TypeScript'].map(tech => (
                                    <span key={tech} className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-sm rounded-full">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <div className="mt-8 text-indigo-600 dark:text-indigo-400 font-semibold group-hover:translate-x-1 transition-transform">
                                Explore Fullstack →
                            </div>
                        </div>
                    </Link>

                    {/* AI Card */}
                    <Link 
                        href="/ai" 
                        className="group flex-1 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm border-2 border-purple-200 dark:border-purple-900/50 rounded-2xl p-8 hover:border-purple-500 hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300"
                    >
                        <div className="flex flex-col items-center">
                            <div className="w-20 h-20 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <svg className="w-10 h-10 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <h2 className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-3">AI & Data Science</h2>
                            <p className="text-gray-600 dark:text-gray-300 text-center mb-6">
                                Machine Learning, Deep Learning, PyTorch, Data Analysis, and Computer Vision
                            </p>
                            <div className="flex flex-wrap gap-2 justify-center">
                                {['PyTorch', 'Scikit-learn', 'Python', 'TensorFlow'].map(tech => (
                                    <span key={tech} className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-sm rounded-full">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <div className="mt-8 text-purple-600 dark:text-purple-400 font-semibold group-hover:translate-x-1 transition-transform">
                                Explore AI/ML →
                            </div>
                        </div>
                    </Link>
                </motion.div>

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