"use client";
import Container from "../ui/Container";
import { ProjectsProps } from "@/lib/types";
import ProjectCard from "../ui/ProjectCard";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { ui, t } from "@/lib/i18n/translations";

export default function Projects(project: ProjectsProps) {
    const { lang } = useLanguage();
    return (
        <Container>
            <section id="projects" className="relative w-full h-auto py-32 flex flex-col items-center justify-center text-center font-sans">
                <div className="flex flex-col w-full items-center justify-center mb-10">
                    <h1 className={`
                        absolute uppercase font-extrabold top-12.75 lg:-top-10 -z-10
                        text-black/5 dark:text-white/5
                        transition-colors duration-300 w-full text-wrap max-w-full break-all
                        text-7xl md:text-8xl lg:text-[10rem]
                    `}>
                        {t(ui.watermark.projects, lang)}
                    </h1>

                    <h2 className={`relative text-5xl sm:text-6xl font-semibold text-black dark:text-white`}>{t(ui.heading.projects, lang)}</h2>

                    <div className="flex justify-center items-center gap-2">
                        <span className="inline-block w-15 h-1 bg-linear-to-r from-indigo-600 to-indigo-500"></span>
                        <span className="text-indigo-600 text-3xl">•</span>
                        <span className="inline-block w-15 h-1 bg-linear-to-r from-indigo-500 to-indigo-600"></span>
                    </div>

                </div>

                <div className="grid grid-cols-1 gap-6 w-full lg:grid-cols-2">
                    {project.projects.map((proj, index) => (
                        <ProjectCard key={index} {...proj} />
                    ))}
                </div>
            </section>
        </Container>
    )
}