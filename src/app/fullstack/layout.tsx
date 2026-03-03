import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Mariam Seifeldin | Full Stack & Software Developer",
    description: "Full stack developer portfolio showcasing expertise in React, Next.js, Spring Boot, and modern web technologies.",
    keywords: ["Full Stack Developer", "Software Engineer", "React", "Next.js", "Spring Boot", "TypeScript", "Web Development"],
    authors: [{ name: "Mariam Seifeldin" }],
    openGraph: {
        title: "Mariam Seifeldin | Full Stack Developer",
        description: "Explore full stack development projects and experience",
        type: "website",
    },
};

export default function FullstackLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            {children}
        </>
    );
}