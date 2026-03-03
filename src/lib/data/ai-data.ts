import { AboutProps, AchievementItem, AchievementsProps, CertificationItem, CertificationsProps, ContactProps, EducationItem, EducationProps, ExperienceItem, ExperienceProps, HeroProps, ProjectItem, ProjectsProps, SkillsItem, SkillsProps } from "../types";
import { PortfolioData } from './index';

const Linkedin = "https://www.linkedin.com/in/mariam-seifeldin/";
const Github = "https://github.com/Mariam-Amro-2005";
const Email = "mariam.seifeldin.2005@gmail.com";
const Phone = "+201211433445";
const Location = "Cairo, Egypt";

export const hero: HeroProps = {
    name: "Mariam Amro Ahmed Fathi Seifeldin",
    typingWords: [
        "Machine Learning Engineer",
        "Data Science Enthusiast",
        "AI & Computer Vision Developer",
        "Python & PyTorch Specialist",
        "Data Analyst & Visualization Expert",
        "End-to-End ML Pipeline Builder",
        "5+ Years Experience",
    ],
    location: Location,
    email: Email,
}

export const about: AboutProps = {
    photo: "/profile1.jpeg",
    name: "Mariam",
    bio: "I’m a Machine Learning Engineer and Data Science enthusiast building intelligent, data-driven solutions to real-world problems. I develop end-to-end ML pipelines using Python and PyTorch, and leverage tools like Pandas, Excel, and Power BI to transform complex data into actionable insights. I combine analytical rigor with practical implementation and thrive in collaborative environments where AI and data create measurable impact.",
    linkedin: Linkedin,
    github: Github,
    email: Email,
    phone: Phone,
    resume: "https://drive.google.com/file/d/1KBNGZaqmdPEwV8vgw2wUX-qfGaKjKZfE/view?usp=sharing"
};

const BachelorsEdu: EducationItem = {
    degree: "Bachelor of Science in Computer Science",
    institution: "Faculty of Computers and Artificial Intelligence – Cairo University",
    location: "Cairo, Egypt",
    startDate: "Sep 2022",
    endDate: "Present",
    description: [
        "Pursuing a degree focused on computer science with a strong GPA of 3.38 (Very Good)",
        "Relevant coursework includes core computer science subjects with honors denoting strong academic performance."
    ],
    tags: [
        "Computer Science",
        "Web Development",
        "Software Engineering",
        "Frontend Development",
        "Backend Development"
    ]
}

const HighSchoolEdu: EducationItem = {
    degree: "International General Certificate of Secondary Education (IGCSE) & A-Levels",
    institution: "Thamer International Schools",
    location: "Jeddah, Saudi Arabia",
    startDate: "Sep 2019",
    endDate: "Jun 2021",
    description: [
        "Achieved A+ equivalent (Grades 8–9) across all subjects with highest grade 9 in English.",
        "Completed A-Levels in Biology and Math with A+ grades."
    ],
    tags: [
        "IGCSE",
        "A-Levels",
        "English",
        "Biology",
        "Mathematics"
    ]
}

export const education: EducationProps = {
    educations: [BachelorsEdu, HighSchoolEdu]
}

const EgronXExp: ExperienceItem = {
    title: "Software Developer Intern",
    company: "EgronX",
    location: "Cairo, Egypt",
    startDate: "Aug 2025",
    endDate: "Oct 2025",
    description: [
        "Collaborated in a 7-member team over 4 agile sprints, developing production-ready full-stack applications with deployment via Vercel and Railway. ",
        "Built 20+ REST APIs for two projects, enabling structured data flow, CRUD operations, and backend integration. ",
        "Applied data validation techniques to ensure accuracy, reliability, and robust application performance. ",
    ],
    tags: [
        "Software Development",
        "Full-Stack Development",
        "REST APIs",
        "Data Validation",
        "Agile"
    ]
}

export const experience: ExperienceProps = {
    experiences: [EgronXExp]
}

const AIVisionClassifierSystem: ProjectItem = {
    title: "AI-Vision-Classifier-System",
    description: "In this project, my team and I built an end-to-end waste classification system designed to support automated recycling workflows, transforming raw image data into real-time intelligent predictions. I contributed to developing the preprocessing and augmentation pipeline, balancing the dataset to 500 images per class to enhance generalization, and leveraged ResNet50 transfer learning to boost accuracy from 60% to 90%. We further optimized an RBF SVM for efficient inference and integrated OpenCV for live camera-based predictions, turning a deep learning model into an interactive, deployment-ready computer vision solution.",
    image: "/ai/classifier.jpeg",
    tech: [
        "Machine Learning",
        "Computer Vision",
        "Deep Learning", 
        "Transfer Learning", 
        "PyTorch", 
        "ResNet50", 
        "OpenCV", 
        "Scikit-learn", 
        "Image Classification", 
        "Data Augmentation", 
        "Real-Time Inference", 
        "Model Optimization" 
    ],
    startDate: "Dec 2025",
    endDate: "Dec 2025",
    githubLink: "https://github.com/Mariam-Amro-2005/AI-Vision-Classifier-System",
}

const SoftComputingLibrary: ProjectItem = {
    title: "Soft Computing Library",
    description: "In this project, my team and I developed a modular Java-based soft computing library aimed at transforming theoretical AI concepts into reusable and extensible software components. I contributed to implementing key features across three pluggable modules—Genetic Algorithms, Fuzzy Logic, and Neural Networks—designing flexible chromosome structures, fuzzy membership functions, inference engines, and configurable neural network layers that support customizable pipelines and hyperparameter tuning. The library was validated on real-world problem scenarios to ensure reliability, performance, and adaptability for optimization and intelligent system design.",
    image: "/ai/genetic-alg.jpg",
    tech: [
        "Soft Computing", 
        "Genetic Algorithms", 
        "Fuzzy Logic", 
        "Neural Networks", 
        "Java", 
        "Algorithm Design", 
        "Modular Architecture", 
        "Optimization", 
        "Hyperparameter Tuning", 
        "AI Systems", 
        "Library Development"
    ],
    startDate: "Oct 2025",
    endDate: "Dec 2025",
    githubLink: "https://github.com/Mariam-Amro-2005/SoftComputingLibrary",
}

const Gomoku: ProjectItem = {
    title: "Gomoku AI Game",
    description: "In this project, my team and I built an intelligent Gomoku game to demonstrate how adversarial search algorithms drive strategic decision-making systems, supporting both Human vs AI and AI vs AI gameplay modes. I worked on implementing the Minimax algorithm enhanced with Alpha-Beta Pruning to optimize search efficiency while maintaining strong move evaluation, enabling real-time board updates and dynamic visualization using Tkinter. The project strengthened our understanding of heuristic evaluation, algorithm optimization, and AI-driven decision systems in competitive environments.",    
    image: "/ai/gomoku.jpeg",
    tech: [
        "Artificial Intelligence", 
        "Game AI", 
        "Minimax", 
        "Alpha-Beta Pruning", 
        "Python", 
        "Tkinter", 
        "Search Algorithms", 
        "Heuristic Evaluation", 
        "Decision Systems", 
        "Algorithm Optimization"
    ],
    startDate: "May 2025",
    endDate: "May 2025",
    githubLink: "https://github.com/Mariam-Amro-2005/GomokuGameAI",
}


export const project: ProjectsProps = {
    projects: [AIVisionClassifierSystem, SoftComputingLibrary, Gomoku]
};

const AISkills: SkillsItem = {
    category: "AI & Data Science",
    skills: [
        "Python", 
        "NumPy", 
        "Pandas", 
        "Scikit-learn", 
        "PyTorch", 
    ]
}

const VisualizationSkills: SkillsItem = {
    category: "Data Visualization & BI",
    skills: [
        "Matplotlib", 
        "Seaborn", 
        "Power BI" 
    ]
}

const ProgrammingSkills: SkillsItem = {
    category: "Programming Languages",
    skills: [
        "Python", "Java", "C++", "C", "Assembly"
    ]
}

const BackendSkills: SkillsItem = {
    category: "Backend Development",
    skills: [
        "Spring Boot", "Django", "MySQL", "SQL", "SQLite" 
    ]
}

const FrontendSkills: SkillsItem = {
    category: "Web & UI Development",
    skills: [
        "HTML", 
        "CSS", 
        "JavaScript", 
        "TypeScript", 
        "React", 
        "Next.js", 
        "Responsive Design"
    ]
}

const FrameworkSkills: SkillsItem = {
    category: "Tools & Frameworks",
    skills: [
        "Git", 
        "GitHub", 
        "Postman", 
        "Figma", 
        "Canva", 
        "Vercel", 
        "Railway" 
    ]
}

const SoftSkills: SkillsItem = {
    category: "Soft Skills",
    skills: ["Team Player", "Detail-oriented", "Communication" ]
}

export const skill: SkillsProps = {
    skills: [AISkills, VisualizationSkills, BackendSkills, 
        ProgrammingSkills,  FrontendSkills, FrameworkSkills, SoftSkills]
}


const DataScienceDepi: CertificationItem = {
    title: "AI & Data Science - Data Scientist",
    issuer: "Digital Egypt Pioneers Initiative (DEPI)",
    description: [
        "Issued by Digital Egypt Pioneers Initiative (DEPI), this intensive 200-hour certification covers Python, SQL, data analysis, visualization, Machine Learning, MLOps, MLflow, and Hugging Face.",
        "It emphasizes building predictive models and implementing end-to-end ML workflows with hands-on exercises.",
        "Professional skills in CV optimization, LinkedIn branding, freelancing, and networking are also developed."
    ],
    date: "Nov 2025 - Present",
    tags: [
        "Python", "Machine Learning", "Data Science"
    ]
}

const DeepLearning: CertificationItem = {
    title: "Getting Started with Deep Learning",
    issuer: "Nvidia Deep Learning Institute",
    description: [
        "Offered by Nvidia Deep Learning Institute, this certification builds foundational knowledge in deep learning, including neural networks, CNNs, augmentation, and transfer learning deployment-oriented workflows.",
        "Participants engage in practical learning to strengthen deep learning techniques and applications."
    ],
    date: "Dec 2025",
    tags: [
        "Deep Learning", "Neural Networks", "CNN"
    ]
}

const TransformerNLP: CertificationItem = {
    title: "Introduction to Transformer-Based Natural Language Processing",
    issuer: "Nvidia Deep Learning Institute",
    description: [
        "This course by Nvidia Deep Learning Institute covers the application of transformer models for token and text classification in modern NLP tasks.",
        "It builds expertise in natural language processing leveraging transformers for advanced text analysis."
    ],
    date: "Dec 2025",
    tags: [
        "Natural Language Processing", "Transformers", "Text Classification"
    ]
}

const HuaweiTechEssentials: CertificationItem = {
    title: "Introduction to Transformer-Based Natural Language Processing",
    issuer: "Nvidia Deep Learning Institute",
    description: [
        "Issued by Huawei Cloud, this foundational cloud computing training introduces essential cloud technologies and services.",
    ],
    date: "Sep 2025",
    tags: [
        "Cloud Computing", "Huawei Cloud", "Computing Essentials"
    ]
}

export const achievement: AchievementsProps = {
    achievements: []
}

export const certificate: CertificationsProps = {
    certifications: [DataScienceDepi, DeepLearning, TransformerNLP, HuaweiTechEssentials]
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

export const aiData: PortfolioData = {
    hero: hero,
    about: about,
    education: education,
    experience: experience,
    projects: project,
    skills: skill,
    achievements: achievement,
    contact: contact,
};