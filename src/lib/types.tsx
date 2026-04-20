import { PortfolioData } from "./data";

/** A piece of text that exists in both English and Arabic */
export type LocalizedString = { en: string; ar: string };

export interface HeroProps {
    name: LocalizedString;                   // proper name – not translated
    typingWords: LocalizedString[]; // animated roles – translated
    location: string;               // proper name – not translated
    email: string;
}

export interface AboutProps {
    photo: string;
    name: LocalizedString;                   // proper name – not translated
    bio: LocalizedString;
    linkedin: string;
    github: string;
    email: string;
    phone: string;
    resume: string;
}

export interface EducationItem {
    degree: LocalizedString;
    institution?: string;           // proper name of institution
    location?: string;
    startDate: string;
    endDate: string;
    description: LocalizedString[];
    tags: string[];                 // tech / subject tags – proper nouns
}
export interface EducationProps {
    educations: EducationItem[];
}

export interface ExperienceItem {
    title: LocalizedString;
    company: string;                // proper name
    location?: string;
    startDate: string;
    endDate: string;
    description: LocalizedString[];
    tags: string[];
}

export interface ExperienceProps {
    experiences: ExperienceItem[];
}

export interface ProjectItem {
    title: LocalizedString;
    description: LocalizedString;
    image?: string;
    tech: string[];                 // tech names – proper nouns
    startDate?: string;
    endDate?: string;
    githubLink?: string;
    liveLink?: string;
}

export interface ProjectsProps {
    projects: ProjectItem[];
}

export interface SkillsItem {
    category: LocalizedString;
    skills: string[];               // skill names – proper nouns
}

export interface SkillsProps {
    skills: SkillsItem[];
}

export interface CertificationItem {
    title: LocalizedString;
    issuer: string;                 // proper name
    date: string;
    description?: LocalizedString[];
    tags?: string[];
    link?: string;
}

export interface CertificationsProps {
    certifications: CertificationItem[];
}

export interface AchievementItem {
    title: LocalizedString;
    issuer: string;                 // proper name
    description: LocalizedString[];
    date: string;
    tags?: string[];
}

export interface AchievementsProps {
    achievements: AchievementItem[];
}

export interface ContactProps {
    email: string;
    phone: string;
    linkedin: string;
    github: string;
}

export interface NavbarSection {
    id: string;
    label: string;
    showIf?: (data: PortfolioData) => boolean;
}

export interface ServiceItem {
    title: LocalizedString;
    description: LocalizedString;
    icon: string;
    features: string[];             // tech / keyword tags – proper nouns
    price?: string;
    ctaText?: LocalizedString;
    ctaLink?: string;
}

export interface ServicesProps {
    services: ServiceItem[];
    mode?: 'fullstack' | 'ai';
}