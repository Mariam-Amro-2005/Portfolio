import { PortfolioData } from "./data";

export interface NavbarItem {
    id: string;
    label: string;
    // Function to determine if this section should be shown
    shouldShow: (data: PortfolioData) => boolean;
}

// Centralized navbar configuration
export const navbarConfig: NavbarItem[] = [
    {
        id: "about",
        label: "About",
        shouldShow: () => true // Always show
    },
    {
        id: "education",
        label: "Education",
        shouldShow: () => true // Always show
    },
    {
        id: "experience",
        label: "Experience",
        shouldShow: () => true // Always show
    },
    {
        id: "projects",
        label: "Projects",
        shouldShow: () => true // Always show
    },
    {
        id: "skills",
        label: "Skills",
        shouldShow: () => true // Always show
    },
    {
        id: "achievements",
        label: "Achievements",
        shouldShow: (data: PortfolioData) => 
            data.achievements?.achievements?.length > 0
    },
    {
        id: "certifications",
        label: "Certifications",
        shouldShow: (data: PortfolioData) => 
            data.certifications?.certifications?.length > 0
    },
    {
        id: "contact",
        label: "Contact",
        shouldShow: () => true // Always show
    }
];

// Helper function to get visible sections
export function getVisibleNavbarSections(data: PortfolioData): NavbarItem[] {
    return navbarConfig.filter(item => item.shouldShow(data));
}