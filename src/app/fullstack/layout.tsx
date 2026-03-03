import PageTransition from "@/components/ui/PageTransition";
import "../globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";

export const metadata: Metadata = {
    title: "Mariam Seifeldin | Full Stack and Software Developer",
    description: "Full stack developer portfolio",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <PageTransition>
                {children}
            </PageTransition>
        </ThemeProvider>
    );
}
