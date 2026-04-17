"use client";
import Container from "../ui/Container";
import { SkillsProps } from "@/lib/types";
import Image from "next/image"

export default function Skills(data: SkillsProps) {

    return (
        <Container>
            <section id="skills" className="relative w-full h-auto py-32 flex flex-col items-center justify-center text-center font-sans">
                <div className="flex flex-col items-center justify-center mb-10">
                    <h1 className={`
                        absolute text-7xl md:text-8xl lg:text-[10rem] uppercase font-extrabold top-12.75 lg:-top-10 -z-10
                        text-black/5 dark:text-white/5
                        transition-colors duration-300 text-wrap max-w-full break-all
                    `}>
                        Technical Skills
                    </h1>

                    <h2 className={`relative text-5xl sm:text-6xl font-semibold text-black dark:text-white`}>Technical Skills</h2>

                    <div className="flex justify-center items-center gap-2">
                        <span className="inline-block w-15 h-1 bg-linear-to-r from-indigo-600 to-indigo-500"></span>
                        <span className="text-indigo-600 text-3xl">•</span>
                        <span className="inline-block w-15 h-1 bg-linear-to-r from-indigo-500 to-indigo-600"></span>
                    </div>

                    <div className="uppercase text-gray-500 dark:text-gray-400 text-sm font-medium">
                        I constantly strive to improve
                    </div>
                </div>

                <div>
                    {data.skills.map((skill, index) => (
                        <div key={index} className="flex flex-col items-start gap-3 mb-6">
                            <div className="flex flex-row gap-3 items-end w-full ">
                                <div className={`rounded-lg p-2 bg-purple-200 dark:bg-blue-200`}>
                                    <Image
                                        src="/icons/icons8-git-branch-100.png"
                                        alt="Git Branch Icon"
                                        width={20}
                                        height={20}
                                    />
                                </div>
                                <h3 className={`text-lg font-medium text-black dark:text-gray-300`}> {skill.category} </h3>
                            </div>
                            <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full list-none mt-2">
                                {skill.skills.map((item, itemIndex) => (
                                    <li key={itemIndex} className="flex items-center gap-3 border bg-linear-to-tr rounded-xl py-2.5 px-4 shadow-sm hover:shadow-md font-medium text-black dark:text-gray-300 border-indigo-200 dark:border-blue-800 bg-white/50 dark:bg-blue-900/20 hover:bg-white dark:hover:bg-blue-900/40 hover:-translate-y-0.5 hover:border-indigo-400 dark:hover:border-blue-400 transform duration-300 ease-in-out cursor-default text-start">
                                        <span className="w-2 h-2 rounded-full bg-indigo-500 dark:bg-blue-400 flex-shrink-0"></span>
                                        <span className="truncate">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))
                    }
                </div>
            </section>
        </Container>
    )
}