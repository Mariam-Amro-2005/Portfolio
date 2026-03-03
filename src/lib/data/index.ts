import {
    HeroProps, AboutProps, EducationProps, ExperienceProps,
    ProjectsProps, SkillsProps, AchievementsProps, ContactProps
} from "../types";

// Define the complete portfolio data structure
export interface PortfolioData {
    hero: HeroProps;
    about: AboutProps;
    education: EducationProps;
    experience: ExperienceProps;
    projects: ProjectsProps;
    skills: SkillsProps;
    achievements: AchievementsProps;
    contact: ContactProps;
}

// Data loader that dynamically imports based on mode
export async function loadPortfolioData(mode: 'fullstack' | 'ai'): Promise<PortfolioData> {
    switch (mode) {
        case 'fullstack':
            return (await import('./fullstack-data')).fullstackData;
        case 'ai':
            return (await import('./ai-data')).aiData;
        default:
            throw new Error(`Invalid mode: ${mode}`);
    }
}

// Synchronous version if you prefer not to use async/await in components
export function getPortfolioData(mode: 'fullstack' | 'ai'): PortfolioData {
    if (mode === 'fullstack') {
        return require('./fullstack-data').fullstackData;
    } else {
        return require('./ai-data').aiData;
    }
}