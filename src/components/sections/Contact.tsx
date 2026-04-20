"use client";
import Container from "../ui/Container";
import { ContactProps } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { ui, t } from "@/lib/i18n/translations";

export default function Contact(data: ContactProps) {
    const { lang } = useLanguage();
    return (
        <Container>
            <section id="contact" className="relative w-full h-auto py-32 flex flex-col items-center justify-center text-center font-sans">
                <div className="flex flex-col w-full items-center justify-center mb-16">
                    <h1 className={`
                        absolute uppercase font-extrabold top-12.75 lg:-top-10 -z-10
                        text-black/5 dark:text-white/5
                        transition-colors duration-300 text-wrap max-w-full break-all
                        text-7xl md:text-8xl lg:text-[10rem]
                    `}>
                        {t(ui.watermark.contact, lang)}
                    </h1>

                    <h2 className={`relative text-5xl sm:text-6xl font-semibold text-black dark:text-white`}>{t(ui.heading.contact, lang)}</h2>

                    <div className="flex justify-center items-center gap-2">
                        <span className="inline-block w-15 h-1 bg-linear-to-r from-indigo-600 to-indigo-500"></span>
                        <span className="text-indigo-600 text-3xl">•</span>
                        <span className="inline-block w-15 h-1 bg-linear-to-r from-indigo-500 to-indigo-600"></span>
                    </div>

                </div>
                <div className="w-full flex md:flex-row flex-col items-center justify-around gap-15">
                    <div className="w-fit md:max-w-1/2 flex flex-col align-start justify-start gap-10">

                        <p className={`md:text-left text-gray-500 dark:text-gray-300
                            font-medium leading-relaxed text-lg text-balance
                            pr-5 transition-colors duration-300`}>
                            {t(ui.contact.quote, lang)}
                        </p>

                        <div className="flex flex-col justify-center items-center gap-5 max-w-full lg:max-w-2/3">
                            <h1 className="text-start w-full max-w-3/4 sm:max-w-full text-xl font-bold">{t(ui.contact.letsConnect, lang)}</h1>
                            <div className="flex flex-row w-full justify-between max-w-3/4 sm:max-w-full">
                            <div className="flex flex-row w-full justify-between max-w-sm">
                                <Link href={`${data.linkedin}`} target="_blank" rel="noopener noreferrer" >
                                    <div className="group border-2 border-gray-200 dark:border-gray-800 w-fit h-fit rounded-2xl hover:bg-linear-to-tr shadow-md hover:shadow-lg dark:shadow-gray-900/50 hover:from-purple-100 dark:hover:from-indigo-900/40 dark:hover:to-blue-900/40 p-3.5 transition duration-300">
                                        <Image src="/icons/icons8-linkedin-100.png" alt="LinkedIn" width={25} height={25} className="block dark:hidden group-hover:scale-110 transition-transform duration-300" />
                                        <Image src="/icons/icons8-linkedin-white-100.png" alt="LinkedIn" width={25} height={25} className="hidden dark:block group-hover:scale-110 transition-transform duration-300" />
                                    </div>
                                </Link>

                                <Link href={`${data.github}`} target="_blank" rel="noopener noreferrer">
                                    <div className="group border-2 border-gray-200 dark:border-gray-800 w-fit h-fit rounded-2xl hover:bg-linear-to-tr shadow-md hover:shadow-lg dark:shadow-gray-900/50 hover:from-purple-100 dark:hover:from-indigo-900/40 dark:hover:to-blue-900/40 p-3.5 transition duration-300">
                                        <Image src="/icons/icons8-github-100.png" alt="GitHub" width={25} height={25} className="block dark:hidden group-hover:scale-110 transition-transform duration-300" />
                                        <Image src="/icons/icons8-github-white-100.png" alt="GitHub" width={25} height={25} className="hidden dark:block group-hover:scale-110 transition-transform duration-300" />
                                    </div>
                                </Link>

                                <Link href={`mailto:${data.email}`} >
                                    <div className="group border-2 border-gray-200 dark:border-gray-800 w-fit h-fit rounded-2xl hover:bg-linear-to-tr shadow-md hover:shadow-lg dark:shadow-gray-900/50 hover:from-purple-100 dark:hover:from-indigo-900/40 dark:hover:to-blue-900/40 p-3.5 transition duration-300">
                                        <Image src="/icons/icons8-email-100.png" alt="Email" width={25} height={25} className="block dark:hidden group-hover:scale-110 transition-transform duration-300" />
                                        <Image src="/icons/icons8-email-100 (1).png" alt="Email" width={25} height={25} className="hidden dark:block group-hover:scale-110 transition-transform duration-300" />
                                    </div>
                                </Link>

                                <Link href={`tel:${data.phone}`}>
                                    <div className="group border-2 border-gray-200 dark:border-gray-800 w-fit h-fit rounded-2xl hover:bg-linear-to-tr shadow-md hover:shadow-lg dark:shadow-gray-900/50 hover:from-purple-100 dark:hover:from-indigo-900/40 dark:hover:to-blue-900/40 p-3.5 transition duration-300">
                                        <Image src="/icons/icons8-phone-100.png" alt="Phone Number" width={25} height={25} className="block dark:hidden group-hover:scale-110 transition-transform duration-300" />
                                        <Image src="/icons/icons8-phone-white-100.png" alt="Phone Number" width={25} height={25} className="hidden dark:block group-hover:scale-110 transition-transform duration-300" />
                                    </div>
                                </Link>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="w-full md:w-1/2 flex flex-col items-start md:items-center justify-center gap-8">
                        <div className="w-full md:max-w-md flex flex-col items-center">
                            <h3 className={`text-2xl font-bold mb-4 text-gray-900 dark:text-white`}>{t(ui.contact.readyToCollab, lang)}</h3>
                            <p className={`text-gray-600 dark:text-gray-300 leading-relaxed text-base mb-6`}>
                                {t(ui.contact.alwaysExcited, lang)}
                            </p>

                            <Link
                                href={`mailto:${data.email}`}
                                className={`flex w-fit bg-linear-to-tr justify-center border shadow-gray-400 from-purple-600 via-violet-500 to-indigo-600 border-purple-500 dark:border-indigo-700 dark:shadow-gray-700 dark:from-indigo-800 dark:via-indigo-600 dark:to-blue-950 rounded-full py-2 px-4 text-white text-lg font-semibold align-center justify-center items-center gap-3 shadow-md hover:scale-105 transition duration-400 cursor-pointer`}
                            >
                                {t(ui.btn.sendEmail, lang)}
                            </Link>
                        </div>

                        <div className={`w-full md:max-w-md p-6 rounded-lg border border-gray-200 bg-gray-50 dark:hover:border-blue-800 dark:border-gray-700 dark:text-white dark:hover:text-blue-600 dark:bg-linear-to-br dark:from-gray-800/90 dark:from-15% dark:to-gray-900 dark:to-90% transition-colors`}>
                            <h4 className={`font-semibold mb-3 text-gray-900 dark:text-white`}>{t(ui.contact.quickResponse, lang)}</h4>
                            <p className={`text-sm text-gray-600 dark:text-gray-300`}>
                                {t(ui.contact.responseDetails, lang)}
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </Container>
    )
}