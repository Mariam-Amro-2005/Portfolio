"use client";
import Container from "./Container";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ProjectItem } from "@/lib/types";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { ui, t } from "@/lib/i18n/translations";

export default function ProjectCard(data: ProjectItem) {
    const { lang } = useLanguage();

    return (
        <Container>
            <div id="projectCard" className={`w-full max-w-full border h-auto rounded-2xl p-6 
                flex flex-col justify-start gap-3.5 font-sans transition-all duration-300 
                ease-out hover:-translate-y-3 hover:shadow-2xl transform
                border-gray-300 hover:bg-linear-to-br hover:from-indigo-300/50 hover:border-purple-400/50 hover:text-indigo-600 dark:hover:border-blue-800 dark:border-gray-700 dark:text-white dark:hover:text-blue-600 dark:bg-linear-to-b dark:md:bg-linear-to-br dark:from-gray-800/90 dark:from-35% dark:md:from-15% dark:via-black/10 dark:to-gray-900 dark:to-70% dark:md:to-90%`}>

                <div id="dateTag" className="w-full flex flex-col gap-3.5 items-end">
                    <p className={`w-fit text-start text-sm font-medium border rounded-full py-1.5 px-4 
                        border-purple-400/70 bg-purple-400/20 text-indigo-600 dark:border-blue-900 dark:bg-linear-to-b dark:from-gray-800 dark:to-blue-900/50 dark:text-gray-300`}>
                        {data.startDate} - {data.endDate}
                    </p>
                    <Image
                        src={data.image || "/no-image.jpeg"}
                        alt={data.title ? `${data.title[lang]} screenshot` : "Project Image"}
                        width={1000} height={1000}
                        className="object-cover rounded-3xl w-full h-auto border border-gray-400 shadow shadow-gray-300 shadow-2xsm"
                        priority={true}
                    />
                </div>

                <div id="headings" className="flex flex-col justify-start text-start gap-3.5 pl-2 w-full">
                    <div className="flex flex-col gap-1 items-start">
                        <p className={`text-xl font-medium hover:text-indigo-600 dark:hover:text-blue-600`}>
                            {data.title[lang] || "N/A"}
                        </p>
                    </div>

                    <div>
                        <p className={`max-w-full text-balance text-md font-normal text-gray-500 dark:text-gray-300`}>
                            {data.description[lang] || "N/A"}
                        </p>
                    </div>

                    <div className="flex flex-col gap-4 ">
                        <p className="text-lg font-semibold">{t(ui.btn.techStack, lang)}</p>
                        <p>
                            {data.tech.map((tag, index) => (
                                <span key={index} className={`inline-block text-md font-medium rounded-full py-1 px-3 mr-2 mb-2 border
                                bg-purple-400/20 text-indigo-600/85 border-purple-400/70 dark:bg-blue-600/20 dark:text-gray-300 dark:border-blue-800`}> {tag}</span>
                            ))}
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link href={`${data.githubLink}`} target="_blank" rel="noopener noreferrer">
                            <div className={`flex w-fit bg-linear-to-tr text-nowrap border border-gray-500 shadow-gray-400 from-indigo-600 to-purple-700 dark:border-indigo-700 dark:shadow-gray-700 dark:from-indigo-800 dark:via-indigo-600 dark:to-blue-950 rounded-full py-2 px-4 text-white text-md font-medium align-center justify-center items-center gap-2 shadow-sm hover:scale-105 transition duration-400 cursor-pointer`}>
                                <div className="flex items-center">
                                    {t(ui.btn.viewGitHub, lang)}
                                </div>
                                <div className="flex flex-row">
                                    <Image
                                        src="/icons/icons8-open-link-100.png"
                                        alt="Project GitHub Link"
                                        width={20}
                                        height={20}
                                        className="flex items-center"
                                    >
                                    </Image>
                                </div>
                            </div>
                        </Link>

                        {
                            data.liveLink && (
                                <Link href={`${data.liveLink}`} target="_blank" rel="noopener noreferrer">
                                    <div className={`flex w-fit bg-linear-to-tr text-nowrap border border-gray-500 shadow-gray-400 from-indigo-600 to-purple-700 dark:border-indigo-700 dark:shadow-gray-700 dark:from-indigo-800 dark:via-indigo-600 dark:to-blue-950 rounded-full py-2 px-4 text-white text-md font-medium align-center justify-center items-center gap-2 shadow-sm hover:scale-105 transition duration-400 cursor-pointer`}>
                                        <div className="flex items-center">
                                            {t(ui.btn.viewLive, lang)}
                                        </div>
                                        <div className="flex flex-row">
                                            <Image
                                                src="/icons/icons8-open-link-100.png"
                                                alt="Project Live Link"
                                                width={20}
                                                height={20}
                                                className="flex items-center"
                                            >
                                            </Image>
                                        </div>
                                    </div>
                                </Link>
                            )
                        }
                    </div>
                </div>
            </div>
        </Container>
    )
}