import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Mariam Seifeldin | Portfolio",
    description: "Explore Mariam Seifeldin's work in Fullstack Development and AI/Data Science",
    keywords: ["Fullstack Developer", "AI Engineer", "Data Scientist", "React", "Next.js", "Python", "PyTorch"],
    authors: [{ name: "Mariam Seifeldin" }],
    openGraph: {
        title: "Mariam Seifeldin | Portfolio",
        description: "Fullstack Development & AI/Data Science Portfolio",
        type: "website",
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`${inter.className} antialiased`}>
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}