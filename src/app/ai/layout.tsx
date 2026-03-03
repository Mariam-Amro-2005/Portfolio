import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Mariam Seifeldin | Data Scientist & Machine Learning Engineer",
    description: "Data science and AI portfolio featuring machine learning, deep learning, computer vision, and data analysis projects.",
    keywords: ["Data Scientist", "Machine Learning Engineer", "AI Engineer", "Python", "PyTorch", "Computer Vision", "Deep Learning"],
    authors: [{ name: "Mariam Seifeldin" }],
    openGraph: {
        title: "Mariam Seifeldin | AI & Data Science",
        description: "Explore AI/ML projects and data science experience",
        type: "website",
    },
};

export default function AILayout({
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