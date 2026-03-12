"use client";

import Container from "../ui/Container";
import { motion } from "framer-motion";
import { ServicesProps } from "@/lib/types";
import { useThemeStyles } from "@/lib/hooks/useThemeStyles";
import Link from "next/link";
import {
    Code2,
    Globe,
    Database,
    Smartphone,
    Cloud,
    Brain,
    LineChart,
    Eye,
    Sparkles,
    BarChart3
} from "lucide-react";

// Icon mapping for different service types
const iconMap: Record<string, any> = {
    // Fullstack icons
    'web': Globe,
    'mobile': Smartphone,
    'backend': Database,
    'cloud': Cloud,
    'code': Code2,

    // AI icons
    'brain': Brain,
    'chart': LineChart,
    'vision': Eye,
    'ai': Sparkles,
    'data': BarChart3,
};

export default function Services({ services, mode = 'fullstack' }: ServicesProps) {
    const { mounted, isDark } = useThemeStyles();

    if (!mounted) {
        return (
            <Container>
                <section id="services" className="relative w-full h-auto py-20 flex flex-col items-center justify-center text-center font-sans">
                    <div className="h-96" /> {/* Placeholder */}
                </section>
            </Container>
        );
    }

    // Determine colors based on mode
    const primaryColor = mode === 'fullstack' ? 'indigo' : 'purple';
    const gradientFrom = mode === 'fullstack' ? 'from-indigo-500' : 'from-purple-500';
    const gradientTo = mode === 'fullstack' ? 'to-pink-500' : 'to-blue-500';

    // Check if any service has CTA data to show the bottom CTA section
    const hasAnyCta = services.some(service => service.ctaText || service.ctaLink);

    return (
        <Container>
            <section id="services" className="relative w-full h-auto py-20 flex flex-col items-center justify-center text-center font-sans">
                {/* Section Header */}
                <div className="flex flex-col w-full items-center justify-center mb-10">
                    <h1 className={`
                        absolute uppercase font-extrabold top-12.75 lg:-top-10 -z-10
                        ${isDark ? 'text-white/5' : 'text-black/5'}
                        transition-colors duration-300 width-full max-w-full break-all
                        text-7xl md:text-8xl lg:text-[10rem]
                    `}>
                        Services
                    </h1>

                    <h2 className={`relative text-6xl font-semibold ${isDark ? 'text-white' : 'text-black'}`}>
                        What I Offer
                    </h2>

                    <div className="flex justify-center items-center gap-2">
                        <span className={`inline-block w-15 h-1 bg-linear-to-r ${gradientFrom} ${gradientTo}`}></span>
                        <span className={`text-${primaryColor}-600 text-3xl`}>•</span>
                        <span className={`inline-block w-15 h-1 bg-linear-to-r ${gradientTo} ${gradientFrom}`}></span>
                    </div>

                    <p className={`mt-4 max-w-2xl text-center ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                        {mode === 'fullstack'
                            ? 'Comprehensive full-stack development services to bring your ideas to life'
                            : 'Cutting-edge AI and data science solutions for modern business challenges'
                        }
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl mx-auto">
                    {services.map((service, index) => {
                        // Get the appropriate icon component
                        const IconComponent = iconMap[service.icon] || Code2;

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className={`
                                    group relative overflow-hidden rounded-2xl p-8
                                    backdrop-blur-sm border-2 transition-all duration-300
                                    hover:shadow-xl hover:-translate-y-1
                                    ${isDark
                                        ? `bg-gray-900/50 border-${primaryColor}-900/50 hover:border-${primaryColor}-500 hover:shadow-${primaryColor}-500/10`
                                        : `bg-white/50 border-${primaryColor}-200 hover:border-${primaryColor}-500 hover:shadow-${primaryColor}-500/10`
                                    }
                                `}
                            >
                                {/* Decorative gradient orb */}
                                <div className={`
                                    absolute -top-20 -right-20 w-40 h-40 rounded-full blur-3xl opacity-20
                                    bg-linear-to-br ${gradientFrom} ${gradientTo}
                                    group-hover:opacity-30 transition-opacity duration-500
                                `} />

                                {/* Icon */}
                                <div className={`
                                    w-16 h-16 rounded-xl flex items-center justify-center mb-6
                                    bg-linear-to-br ${gradientFrom} ${gradientTo} bg-opacity-10
                                    ${isDark ? 'bg-opacity-20' : 'bg-opacity-10'}
                                `}>
                                    <IconComponent className={`
                                        w-8 h-8 text-white
                                    `} />
                                    {/* 
                                    ${mode === 'fullstack'
                                            ? isDark ? 'text-indigo-300' : 'text-indigo-600'
                                            : isDark ? 'text-purple-300' : 'text-purple-600'
                                        }
                                     */}
                                </div>

                                {/* Title */}
                                <h3 className={`
                                    text-2xl font-bold mb-3 text-left
                                    ${isDark ? 'text-white' : 'text-gray-900'}
                                `}>
                                    {service.title}
                                </h3>

                                {/* Description */}
                                <p className={`
                                    text-left mb-6 leading-relaxed
                                    ${isDark ? 'text-gray-300' : 'text-gray-600'}
                                `}>
                                    {service.description}
                                </p>

                                {/* Features/Tags */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {service.features.slice(0, 4).map((feature, idx) => (
                                        <span
                                            key={idx}
                                            className={`
                                                px-3 py-1 text-xs rounded-full
                                                ${mode === 'fullstack'
                                                    ? isDark
                                                        ? 'bg-indigo-900/30 text-indigo-300'
                                                        : 'bg-indigo-100 text-indigo-700'
                                                    : isDark
                                                        ? 'bg-purple-900/30 text-purple-300'
                                                        : 'bg-purple-100 text-purple-700'
                                                }
                                            `}
                                        >
                                            {feature}
                                        </span>
                                    ))}
                                    {service.features.length > 4 && (
                                        <span className={`
                                            px-3 py-1 text-xs rounded-full
                                            ${isDark ? 'bg-gray-800 text-gray-300' : 'bg-gray-100 text-gray-600'}
                                        `}>
                                            +{service.features.length - 4} more
                                        </span>
                                    )}
                                </div>

                                {/* Price (optional) */}
                                {service.price && (
                                    <div className="mb-4">
                                        <span className={`
                                            text-2xl font-bold
                                            ${mode === 'fullstack'
                                                ? isDark ? 'text-indigo-400' : 'text-indigo-600'
                                                : isDark ? 'text-purple-400' : 'text-purple-600'
                                            }
                                        `}>
                                            {service.price}
                                        </span>
                                        <span className={`text-sm ml-1 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                                            / project
                                        </span>
                                    </div>
                                )}

                                {/* Conditional CTA Button - only shows if either ctaText or ctaLink is provided */}
                                {(service.ctaText || service.ctaLink) && (
                                    <Link
                                        href={service.ctaLink || '#contact'}
                                        className={`
                                            inline-flex items-center gap-2 mt-4 font-semibold
                                            group-hover:translate-x-1 transition-transform
                                            ${mode === 'fullstack'
                                                ? isDark ? 'text-indigo-400' : 'text-indigo-600'
                                                : isDark ? 'text-purple-400' : 'text-purple-600'
                                            }
                                        `}
                                    >
                                        {service.ctaText || 'Learn More'}
                                        <span className="text-lg">→</span>
                                    </Link>
                                )}
                            </motion.div>
                        );
                    })}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="mt-12 text-center"
                >
                    <p className={`text-lg mb-4 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                        Interested in working together?
                    </p>
                    <Link
                        href="#contact"
                        className={`
                                inline-flex items-center gap-2 px-8 py-4 rounded-full
                                font-semibold text-white transition-all duration-1000
                                hover:scale-105 hover:shadow-xl ease-in-out
                                bg-linear-to-r ${gradientFrom} ${gradientTo}
                                hover:shadow-${primaryColor}-500/25
                            `}
                    >
                        Let's Discuss Your Project
                        <span className="text-xl">→</span>
                    </Link>
                </motion.div>
            </section>
        </Container>
    );
}