"use client";

import { useMemo } from "react"; // Add useMemo
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
import { PortfolioData } from "@/lib/data";
import { getVisibleNavbarSections } from "@/lib/navbar-config";

interface PortfolioPageProps {
    data: PortfolioData;
    mode: 'fullstack' | 'ai';
}

export default function PortfolioPage({ data, mode }: PortfolioPageProps) {
    // Get visible sections based on data
    const visibleSections = getVisibleNavbarSections(data);

    // Memoize the section IDs array to maintain stable reference
    const sectionIds = useMemo(
        () => visibleSections.map(s => s.id),
        [visibleSections] // Only recompute when visibleSections changes
    );

    return (
        <main>
            <Navbar
                mode={mode}
                sections={sectionIds} // Pass memoized array
            />
            <Hero {...data.hero} currentMode={mode} />
            <About {...data.about} />
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