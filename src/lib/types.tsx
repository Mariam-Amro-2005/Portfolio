import { PortfolioData } from "./data";

export interface HeroProps {
    name: string;
    typingWords: string[];
    location: string;
    email: string;
}

export interface AboutProps {
    photo: string
    name: string
    bio: string
    linkedin: string
    github: string
    email: string
    phone: string
    resume: string
}

export interface EducationItem {
    degree: string
    institution?: string
    location?: string
    startDate: string
    endDate: string
    description: string[]
    tags: string[]
}
export interface EducationProps {
    educations: EducationItem[]
}

export interface ExperienceItem {
    title: string
    company: string
    location?: string
    startDate: string
    endDate: string
    description: string[]
    tags: string[]
}

export interface ExperienceProps {
    experiences: ExperienceItem[]
}

export interface ProjectItem {
    title: string
    description: string
    image?: string
    tech: string[]
    startDate?: string
    endDate?: string
    githubLink?: string
    liveLink?: string
}

export interface ProjectsProps {
    projects: ProjectItem[]
}

export interface SkillsItem {
    category: string
    skills: string[]
}

export interface SkillsProps {
    skills: SkillsItem[]
}

export interface CertificationItem {
    title: string
    issuer: string
    date: string
    description?: string[]
    tags?: string[]
    link?: string
}

export interface CertificationsProps {
    certifications: CertificationItem[]
}

export interface AchievementItem {
    title: string
    issuer: string
    description: string[]
    date: string
    tags?: string[]
}

export interface AchievementsProps {
    achievements: AchievementItem[]
}

export interface ContactProps {
    email: string
    phone: string
    linkedin: string
    github: string
}

export interface NavbarSection {
    id: string;
    label: string;
    showIf?: (data: PortfolioData) => boolean; // Optional condition
}

export interface ServiceItem {
    title: string;
    description: string;
    icon: string; // Icon name or path
    features: string[]; // Key features/technologies
    price?: string; // Optional: if you want to show pricing
    ctaText?: string; // Optional: custom CTA text
    ctaLink?: string; // Optional: custom CTA link
}

export interface ServicesProps {
    services: ServiceItem[];
    mode?: 'fullstack' | 'ai'; 
}