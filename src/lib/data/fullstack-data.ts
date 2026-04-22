import { AboutProps, AchievementItem, AchievementsProps, CertificationsProps, ContactProps, EducationItem, EducationProps, ExperienceItem, ExperienceProps, HeroProps, ProjectItem, ProjectsProps, SkillsItem, SkillsProps, ServiceItem } from "../types";
import { PortfolioData } from './index';

const Linkedin = "https://www.linkedin.com/in/mariam-seifeldin/";
const Github = "https://github.com/Mariam-Amro-2005";
const Email = "mariam.seifeldin.2005@gmail.com";
const Phone = "+201211433445";
const Location = "Cairo, Egypt";

export const hero: HeroProps = {
    name: { en: "Mariam Amro Ahmed Fathi Seifeldin", ar: "مريم عمرو أحمد فتحي سيف الدين" },
    typingWords: [
        { en: "Full-Stack Developer",    ar: "مطوّرة Full-Stack" },
        { en: "Next.js Specialist",      ar: "متخصصة في Next.js" },
        { en: "React Engineer",          ar: "مهندسة React" },
        { en: "Backend API Builder",     ar: "مطوّرة Backend وواجهات برمجية" },
        { en: "Software Engineer",       ar: "مهندسة برمجيات" },
        { en: "5+ Years Experience",     ar: "خبرة +5 سنوات" },
    ],
    location: Location,
    email: Email,
}

export const about: AboutProps = {
    photo: "/profile1.jpeg",
    name: { en: "Mariam", ar: "مريم" },
    bio: {
        en: "I am a dedicated Computer Science student at Cairo University with hands-on experience in full-stack web development using React, Spring Boot, and Django. Skilled in building responsive applications and collaborating on real-world projects. Seeking a Software Engineering Internship or Junior Developer opportunity to apply my technical skills and contribute to meaningful products.",
        ar: "أنا طالبة علوم حاسوب متفانية في جامعة القاهرة، أمتلك خبرة عملية في تطوير تطبيقات الويب الشاملة باستخدام React وSpring Boot وDjango. أتقن بناء تطبيقات متجاوبة والتعاون في مشاريع حقيقية. أسعى للحصول على فرصة تدريب هندسة برمجيات أو منصب مطوّر مبتدئ لتطبيق مهاراتي التقنية والمساهمة في منتجات ذات قيمة.",
    },
    linkedin: Linkedin,
    github: Github,
    email: Email,
    phone: Phone,
    resume: "https://drive.google.com/file/d/1eVP4ahB4EVlCu5dnUxoCvn6jRXrtJp2I/view?usp=sharing"
};

const BachelorsEdu: EducationItem = {
    degree: {
        en: "Bachelor of Science in Computer Science",
        ar: "بكالوريوس علوم الحاسوب",
    },
    institution: "Faculty of Computers and Artificial Intelligence – Cairo University",
    location: "Cairo, Egypt",
    startDate: "Sep 2022",
    endDate: "Present",
    description: [
        {
            en: "Pursuing a degree focused on computer science with a strong GPA of 3.38 (Very Good)",
            ar: "أتابع درجة علمية في علوم الحاسوب بمعدل تراكمي قوي 3.38 (جيد جداً)",
        },
        {
            en: "Relevant coursework includes core computer science subjects with honors denoting strong academic performance.",
            ar: "تشمل المقررات ذات الصلة مواد علوم الحاسوب الأساسية مع تميز يدل على أداء أكاديمي قوي.",
        },
    ],
    tags: ["Computer Science", "Web Development", "Software Engineering", "Frontend Development", "Backend Development"],
}

const HighSchoolEdu: EducationItem = {
    degree: {
        en: "International General Certificate of Secondary Education (IGCSE) & A-Levels",
        ar: "شهادة الثانوية العامة الدولية (IGCSE) والمستوى المتقدم (A-Levels)",
    },
    institution: "Thamer International Schools",
    location: "Jeddah, Saudi Arabia",
    startDate: "Sep 2019",
    endDate: "Jun 2021",
    description: [
        {
            en: "Achieved A+ equivalent (Grades 8–9) across all subjects with highest grade 9 in English.",
            ar: "حققت ما يعادل A+ (درجات 8-9) في جميع المواد مع أعلى درجة 9 في اللغة الإنجليزية.",
        },
        {
            en: "Completed A-Levels in Biology and Math with A+ grades.",
            ar: "أتممت دراسة المستوى المتقدم في الأحياء والرياضيات بدرجات A+.",
        },
    ],
    tags: ["IGCSE", "A-Levels", "English", "Biology", "Mathematics"],
}

export const education: EducationProps = {
    educations: [BachelorsEdu, HighSchoolEdu]
}

const EgronXExp: ExperienceItem = {
    title: {
        en: "Software Developer Intern",
        ar: "متدرب تطوير برمجيات",
    },
    company: "EgronX",
    location: "Cairo, Egypt",
    startDate: "Aug 2025",
    endDate: "Oct 2025",
    description: [
        {
            en: "Completed a 62-day internship across 4 agile sprints, working in a 7-member team on UI/UX, backend, and full-stack development.",
            ar: "أتممت تدريباً لمدة 62 يوماً عبر 4 دورات أجايل، عملت خلالها في فريق مكوّن من 7 أعضاء على واجهة المستخدم والواجهة الخلفية والتطوير الشامل.",
        },
        {
            en: "Designed user flows, wireframes, and interactive prototypes using Figma for a health-focused application.",
            ar: "صمّمت تدفقات المستخدم والنماذج الأولية التفاعلية باستخدام Figma لتطبيق يركز على الصحة.",
        },
        {
            en: "Built backend services with Spring Boot, JWT, and MySQL, implementing 15+ REST APIs for product and order management.",
            ar: "بنيت خدمات الواجهة الخلفية باستخدام Spring Boot وJWT وMySQL مع تطبيق أكثر من 15 واجهة REST API لإدارة المنتجات والطلبات.",
        },
        {
            en: "Developed HealMeals, a full-stack meal-planning web app using React, TypeScript, and Tailwind, integrating 20+ backend APIs.",
            ar: "طوّرت HealMeals، تطبيق ويب شامل لتخطيط الوجبات باستخدام React وTypeScript وTailwind، مع ربط أكثر من 20 واجهة API خلفية.",
        },
        {
            en: "Delivered production-ready features including an Admin Dashboard, Zod validation, Shadcn components, TanStack Query, and deployment via Vercel and Railway.",
            ar: "قدّمت ميزات جاهزة للإنتاج تشمل لوحة تحكم المسؤول والتحقق بـZod ومكونات Shadcn وTanStack Query والنشر عبر Vercel وRailway.",
        },
    ],
    tags: ["Software Development", "Full-Stack Development", "REST APIs", "Data Validation", "Agile"],
}

export const experience: ExperienceProps = {
    experiences: [EgronXExp]
}

const HealMeals: ProjectItem = {
    title: {
        en: "HealMeals - Full-Stack Web App",
        ar: "HealMeals - تطبيق ويب شامل",
    },
    description: {
        en: "HealMeals was built with a clear purpose: helping users make smarter food choices based on their health needs. As part of the development team, I contributed to building a full-stack application that recommends and filters recipes tailored to allergies, dietary restrictions, and fitness goals. On the frontend, I developed responsive React (TypeScript) components and connected them to Spring Boot backend services, ensuring smooth and reliable data flow. Working closely with teammates, I helped bridge frontend and backend systems to deliver a seamless experience across both web and mobile platforms.",
        ar: "تم بناء HealMeals بهدف واضح: مساعدة المستخدمين على اتخاذ خيارات غذائية أذكى بناءً على احتياجاتهم الصحية. كجزء من فريق التطوير، ساهمت في بناء تطبيق شامل يوصي بوصفات مناسبة مصفّاة حسب الحساسيات والقيود الغذائية وأهداف اللياقة البدنية. على الواجهة الأمامية، طوّرت مكونات React (TypeScript) متجاوبة وربطتها بخدمات الواجهة الخلفية المبنية بـSpring Boot.",
    },
    image: "/fullstack/HealMeals-Cover.png",
    tech: ["React", "TypeScript", "Spring Boot", "MySQL"],
    startDate: "Sep 2025",
    endDate: "Oct 2025",
    githubLink: "https://github.com/Mariam-Amro-2005/HealMeals-Frontend-Latest",
    liveLink: "https://heal-meals-frontend-latest.vercel.app/"
}

const FurnitureHome: ProjectItem = {
    title: {
        en: "Furniture Home – E-Commerce Backend",
        ar: "Furniture Home – واجهة خلفية للتجارة الإلكترونية",
    },
    description: {
        en: "In this project, my team and I focused on powering the logic behind an e-commerce experience. I designed and implemented the Order module using Spring Boot, handling everything from entity modeling and database queries to business logic and REST API endpoints. I built features for order placement, retrieval, and status tracking, ensuring smooth checkout integration and optimized database performance.",
        ar: "في هذا المشروع، ركّزنا على تطوير المنطق الخلفي لتجربة التجارة الإلكترونية. صمّمت ونفّذت وحدة الطلبات باستخدام Spring Boot، معالجةً كل شيء من نمذجة الكيانات واستعلامات قاعدة البيانات إلى منطق الأعمال ونقاط نهاية REST API.",
    },
    image: "/fullstack/FurnitureHome-Cover.png",
    tech: ["Spring Boot", "Lombok", "MySQL"],
    startDate: "Aug 2025",
    endDate: "Aug 2025",
    githubLink: "https://github.com/Mariam-Amro-2005/Furniture_Home",
}

const ReelVerse: ProjectItem = {
    title: {
        en: "ReelVerse – TMDB Media Browser Web App",
        ar: "ReelVerse – تطبيق تصفح الأفلام والمسلسلات",
    },
    description: {
        en: "ReelVerse began as a way to transform raw movie data into an engaging discovery experience. I built this responsive React application to help users seamlessly explore trending movies and TV shows through an intuitive interface. By integrating multiple TMDB APIs and implementing centralized state management, I created a smooth browsing journey featuring search, genre filtering, pagination, and dynamic detail pages.",
        ar: "انطلق ReelVerse كطريقة لتحويل بيانات الأفلام الخام إلى تجربة اكتشاف شيّقة. بنيت هذا التطبيق المتجاوب بـReact لمساعدة المستخدمين على استكشاف الأفلام والمسلسلات الرائجة بسهولة من خلال واجهة بديهية مع دمج واجهات TMDB API وإدارة الحالة المركزية.",
    },
    image: "/fullstack/ReelVerse-Cover.png",
    tech: ["React", "JavaScript", "TMDB API", "JSX", "Context API", "CSS"],
    startDate: "Jul 2025",
    endDate: "Jul 2025",
    githubLink: "https://github.com/Mariam-Amro-2005/ReelVerse",
    liveLink: "https://reel-verse-one.vercel.app/"
}

const LMS: ProjectItem = {
    title: {
        en: "Learning Management System",
        ar: "نظام إدارة التعلم",
    },
    description: {
        en: "This project was driven by the idea of simplifying academic workflows through structured backend design. I developed a Spring Boot–based Learning Management System that organizes assignments, submissions, and grading into clear processes. By designing RESTful APIs and implementing role-based access control, I ensured that students and instructors each had streamlined experiences.",
        ar: "انطلق هذا المشروع من فكرة تبسيط سير العمل الأكاديمي من خلال تصميم خلفي منظّم. طوّرت نظام إدارة تعلم مبني على Spring Boot ينظّم الواجبات والتسليمات والتقييمات في عمليات واضحة، مع تصميم REST APIs وتطبيق التحكم في الوصول المبني على الأدوار.",
    },
    image: "/fullstack/lms-erd-final.png",
    tech: ["Spring Boot", "Java"],
    startDate: "Nov 2024",
    endDate: "Dec 2024",
    githubLink: "https://github.com/Mariam-Amro-2005/LMS-Assessments",
}

const Library: ProjectItem = {
    title: {
        en: "Online Library System",
        ar: "نظام المكتبة الإلكترونية",
    },
    description: {
        en: "The Online Library System was built to replicate the experience of managing a digital library from both user and administrator perspectives. Using Django, my team and I developed a full-stack application where users can browse and borrow books while administrators manage inventory and accounts securely.",
        ar: "تم بناء نظام المكتبة الإلكترونية لمحاكاة تجربة إدارة مكتبة رقمية من منظور المستخدمين والمسؤولين على حد سواء. باستخدام Django، طوّرنا تطبيقاً شاملاً يتيح للمستخدمين تصفح الكتب واستعارتها بينما يدير المسؤولون المخزون والحسابات بأمان.",
    },
    image: "/fullstack/Online-Library-Cover.png",
    tech: ["Django", "HTML", "CSS", "JavaScript"],
    startDate: "May 2024",
    endDate: "Jun 2024",
    githubLink: "https://github.com/Mariam-Amro-2005/Web-project",
}

export const project: ProjectsProps = {
    projects: [HealMeals, FurnitureHome, ReelVerse, LMS, Library]
};

const AISkills: SkillsItem = {
    category: { en: "AI & Data Science", ar: "الذكاء الاصطناعي وعلوم البيانات" },
    skills: ["Python", "NumPy", "Pandas", "Scikit-learn", "PyTorch"],
}

const VisualizationSkills: SkillsItem = {
    category: { en: "Data Visualization & BI", ar: "تصوير البيانات وذكاء الأعمال" },
    skills: ["Matplotlib", "Seaborn", "Power BI"],
}

const ProgrammingSkills: SkillsItem = {
    category: { en: "Programming Languages", ar: "لغات البرمجة" },
    skills: ["Python", "Java", "C++", "C", "Assembly"],
}

const BackendSkills: SkillsItem = {
    category: { en: "Backend Development", ar: "تطوير الواجهة الخلفية" },
    skills: ["Spring Boot", "Django", "MySQL", "SQL", "SQLite"],
}

const FrontendSkills: SkillsItem = {
    category: { en: "Web & UI Development", ar: "تطوير الويب وواجهات المستخدم" },
    skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Responsive Design"],
}

const FrameworkSkills: SkillsItem = {
    category: { en: "Tools & Frameworks", ar: "الأدوات والأطر البرمجية" },
    skills: ["Git", "GitHub", "Postman", "Figma", "Canva", "Vercel", "Railway"],
}

const SoftSkills: SkillsItem = {
    category: { en: "Soft Skills", ar: "المهارات الشخصية" },
    skills: ["Team Player", "Detail-oriented", "Communication"],
}

export const skill: SkillsProps = {
    skills: [FrontendSkills, BackendSkills, ProgrammingSkills, AISkills, VisualizationSkills, FrameworkSkills, SoftSkills]
}

const MindersAchievment: AchievementItem = {
    title: {
        en: "Outstanding Frontend Committee Member",
        ar: "عضو لجنة الواجهة الأمامية المتميز",
    },
    issuer: "Minders",
    description: [
        {
            en: "Participated in two weekly sessions focused on frontend development, covering modern tools and best practices while collaborating on mini-project planning.",
            ar: "شاركت في جلستين أسبوعيتين تركّزان على تطوير الواجهة الأمامية، تناولتا الأدوات الحديثة وأفضل الممارسات مع التعاون في تخطيط المشاريع الصغيرة.",
        },
        {
            en: "Earned the Best Committee Member certificate during the second term of the 2025 season in recognition of performance and engagement.",
            ar: "حصلت على شهادة أفضل عضو في اللجنة خلال الفصل الدراسي الثاني من موسم 2025 تقديراً للأداء والمشاركة الفعّالة.",
        },
        {
            en: "Maintained an A+ (Excellent) standing throughout the program, demonstrating consistent commitment and academic excellence.",
            ar: "حافظت على تقدير A+ (ممتاز) طوال البرنامج، مما يدل على التزام راسخ وتميز أكاديمي مستمر.",
        },
    ],
    date: "Feb 2025 – Sept 2025",
    tags: ["React", "TypeScript", "Advanced JavaScript"],
}

export const achievement: AchievementsProps = {
    achievements: [MindersAchievment]
}

export const certificate: CertificationsProps = {
    certifications: []
}

export const contact: ContactProps = {
    linkedin: Linkedin,
    github: Github,
    email: Email,
    phone: Phone,
}

export const languages = [
    "Arabic (Mother tongue)", "English (Fluent, IGCSE certified)"
]

export const fullstackServices: ServiceItem[] = [
    {
        title: { en: "Frontend Development", ar: "تطوير الواجهة الأمامية" },
        description: { en: "Responsive, interactive user interfaces built with modern React and Next.js.", ar: "واجهات مستخدم متجاوبة وتفاعلية مبنية بـReact وNext.js الحديثَين." },
        icon: "web",
        features: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Responsive Design", "Figma to Code"],
    },
    {
        title: { en: "Backend Development", ar: "تطوير الواجهة الخلفية" },
        description: { en: "Scalable server-side applications with Spring Boot and RESTful APIs.", ar: "تطبيقات قابلة للتوسع على جانب الخادم باستخدام Spring Boot وواجهات REST API." },
        icon: "backend",
        features: ["Spring Boot", "Java", "REST APIs", "JWT Authentication", "MySQL", "Postman"],
    },
    {
        title: { en: "Full-Stack Applications", ar: "تطبيقات شاملة" },
        description: { en: "End-to-end web applications from database design to polished UI.", ar: "تطبيقات ويب متكاملة من تصميم قاعدة البيانات إلى واجهة مستخدم مصقولة." },
        icon: "code",
        features: ["React + Spring Boot", "TypeScript", "JWT Auth", "State Management", "Database Design", "Vercel/Railway Deploy"],
    },
    {
        title: { en: "Database Design", ar: "تصميم قواعد البيانات" },
        description: { en: "Efficient database modeling and query optimization for web applications.", ar: "نمذجة قواعد بيانات فعّالة وتحسين الاستعلامات لتطبيقات الويب." },
        icon: "database",
        features: ["MySQL", "SQLite", "Database Normalization", "Complex Queries", "ERD Design", "Data Modeling"],
    },
    {
        title: { en: "API Development", ar: "تطوير واجهات البرمجة" },
        description: { en: "Well-structured RESTful APIs with proper documentation and validation.", ar: "واجهات REST API منظّمة جيداً مع توثيق وتحقق مناسبَين." },
        icon: "cloud",
        features: ["RESTful Design", "Spring Boot", "Request Validation", "Error Handling", "API Documentation", "Postman Testing"],
    },
    {
        title: { en: "Version Control & Collaboration", ar: "التحكم في الإصدار والتعاون" },
        description: { en: "Professional git workflows and team collaboration practices.", ar: "سير عمل Git احترافية وممارسات تعاون فريق متميزة." },
        icon: "code",
        features: ["Git", "GitHub", "Pull Requests", "Code Review", "Agile Methodologies", "Team Collaboration"],
    }
];

export const fullstackData: PortfolioData = {
    hero: hero,
    about: about,
    education: education,
    experience: experience,
    projects: project,
    skills: skill,
    achievements: achievement,
    certifications: certificate,
    contact: contact,
    services: {
        services: fullstackServices,
        mode: "fullstack"
    }
};