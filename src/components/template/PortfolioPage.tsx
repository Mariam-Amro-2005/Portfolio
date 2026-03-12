"use client";

import { useMemo, useState, useEffect } from "react";
import Navbar from "@/components/ui/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Education from "@/components/sections/Education";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Achievements from "@/components/sections/Achievements";
import Certifications from "@/components/sections/Certifications";
import Contact from "@/components/sections/Contact";
import Services from "@/components/sections/Services";
import { PortfolioData } from "@/lib/data";
import { getVisibleNavbarSections } from "@/lib/navbar-config";

interface PortfolioPageProps {
    data: PortfolioData;
    mode: 'fullstack' | 'ai';
}

export default function PortfolioPage({ data, mode }: PortfolioPageProps) {
    const [scrollProgress, setScrollProgress] = useState(0);

    // Get visible sections based on data
    const visibleSections = getVisibleNavbarSections(data);

    // Memoize the section IDs array to maintain stable reference
    const sectionIds = useMemo(
        () => visibleSections.map(s => s.id),
        [visibleSections]
    );

    useEffect(() => {
        const handleScroll = () => {
            const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
            const progress = (window.scrollY / totalScroll) * 100;
            setScrollProgress(progress);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Determine gradient colors based on mode
    const progressGradient = mode === 'fullstack'
        ? 'from-indigo-500 to-pink-500'
        : 'from-purple-500 to-blue-500';

    return (
        <main className="relative pt-5">
            {/* Global Scroll Progress Bar */}
            <div
                className={`max-w-full sticky top-0 left-0 h-1 bg-linear-to-r ${progressGradient} transition-all duration-150 z-[100]`}
                style={{ width: `${scrollProgress}%` }}
            />

            {/* Navbar */}
            <Navbar
                mode={mode}
                sections={sectionIds}
            />

            {/* Content Sections */}
            <Hero {...data.hero} currentMode={mode} />
            <About {...data.about} />
            
                        {/* Services Section */}
                        {data.services?.services?.length > 0 && (
                            <Services {...data.services} mode={mode} />
                        )}
                        
            <Education {...data.education} />
            <Experience {...data.experience} />
            
            <Projects {...data.projects} />
            <Skills {...data.skills} />

            {/* Conditionally render achievements */}
            {data.achievements?.achievements?.length > 0 && (
                <Achievements {...data.achievements} />
            )}

            {/* Conditionally render certifications */}
            {data.certifications?.certifications?.length > 0 && (
                <Certifications {...data.certifications} />
            )}

            <Contact {...data.contact} />
        </main>
    );
}