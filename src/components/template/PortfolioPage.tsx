"use client";

import Navbar from "@/components/ui/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Education from "@/components/sections/Education";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Achievements from "@/components/sections/Achievements";
import Contact from "@/components/sections/Contact";
import { PortfolioData } from "@/lib/data";

interface PortfolioPageProps {
    data: PortfolioData;
    mode: 'fullstack' | 'ai';
}

export default function PortfolioPage({ data, mode }: PortfolioPageProps) {
    return (
        <main>
            <Navbar mode={mode} />
            <Hero {...data.hero} currentMode={mode} />
            <About {...data.about} />
            <Education {...data.education} />
            <Experience {...data.experience} />
            <Projects {...data.projects} />
            <Skills {...data.skills} />
            <Achievements {...data.achievements} />
            <Contact {...data.contact} />
        </main>
    );
}