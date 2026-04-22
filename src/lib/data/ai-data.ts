import { AboutProps, AchievementItem, AchievementsProps, CertificationItem, CertificationsProps, ContactProps, EducationItem, EducationProps, ExperienceItem, ExperienceProps, HeroProps, ProjectItem, ProjectsProps, SkillsItem, SkillsProps, ServiceItem } from "../types";
import { PortfolioData } from './index';

const Linkedin = "https://www.linkedin.com/in/mariam-seifeldin/";
const Github = "https://github.com/Mariam-Amro-2005";
const Email = "mariam.seifeldin.2005@gmail.com";
const Phone = "+201211433445";
const Location = "Cairo, Egypt";

export const hero: HeroProps = {
    name: { en: "Mariam Amro Ahmed Fathi Seifeldin", ar: "مريم عمرو أحمد فتحي سيف الدين" },
    typingWords: [
        { en: "Machine Learning Engineer",              ar: "مهندسة تعلم الآلة" },
        { en: "Data Science Enthusiast",                ar: "متحمسة لعلوم البيانات" },
        { en: "AI & Computer Vision Developer",         ar: "مطوّرة ذكاء اصطناعي ورؤية حاسوبية" },
        { en: "Python & PyTorch Specialist",            ar: "متخصصة في Python وPyTorch" },
        { en: "Data Analyst & Visualization Expert",    ar: "محللة بيانات وخبيرة تصوير بياني" },
        { en: "End-to-End ML Pipeline Builder",         ar: "بانية خطوط أنابيب ML من البداية للنهاية" },
        { en: "5+ Years Experience",                    ar: "خبرة +5 سنوات" },
    ],
    location: Location,
    email: Email,
}

export const about: AboutProps = {
    photo: "/profile1.jpeg",
    name: { en: "Mariam", ar: "مريم" },
    bio: {
        en: "I'm a Machine Learning Engineer and Data Science enthusiast building intelligent, data-driven solutions to real-world problems. I develop end-to-end ML pipelines using Python and PyTorch, and leverage tools like Pandas, Excel, and Power BI to transform complex data into actionable insights. I combine analytical rigor with practical implementation and thrive in collaborative environments where AI and data create measurable impact.",
        ar: "أنا مهندسة تعلم آلة ومتحمسة لعلوم البيانات، أبني حلولاً ذكية قائمة على البيانات لمشاكل العالم الحقيقي. أطوّر خطوط أنابيب ML متكاملة باستخدام Python وPyTorch، وأستفيد من أدوات مثل Pandas وExcel وPower BI لتحويل البيانات المعقدة إلى رؤى قابلة للتنفيذ. أجمع بين الدقة التحليلية والتطبيق العملي وأزدهر في البيئات التعاونية حيث يصنع الذكاء الاصطناعي والبيانات أثراً ملموساً.",
    },
    linkedin: Linkedin,
    github: Github,
    email: Email,
    phone: Phone,
    resume: "https://drive.google.com/file/d/1vML2S89Atys3K2OtrUsY4vsBF9vCvv50/view?usp=sharing"
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
            en: "Collaborated in a 7-member team over 4 agile sprints, developing production-ready full-stack applications with deployment via Vercel and Railway.",
            ar: "تعاونت في فريق مكوّن من 7 أعضاء عبر 4 دورات أجايل، لبناء تطبيقات شاملة جاهزة للإنتاج مع النشر عبر Vercel وRailway.",
        },
        {
            en: "Built 20+ REST APIs for two projects, enabling structured data flow, CRUD operations, and backend integration.",
            ar: "بنيت أكثر من 20 واجهة REST API لمشروعَين، مما أتاح تدفق البيانات المنظّم وعمليات CRUD والتكامل مع الواجهة الخلفية.",
        },
        {
            en: "Applied data validation techniques to ensure accuracy, reliability, and robust application performance.",
            ar: "طبّقت تقنيات التحقق من البيانات لضمان الدقة والموثوقية وأداء التطبيق القوي.",
        },
    ],
    tags: ["Software Development", "Full-Stack Development", "REST APIs", "Data Validation", "Agile"],
}

export const experience: ExperienceProps = {
    experiences: [EgronXExp]
}

const AIVisionClassifierSystem: ProjectItem = {
    title: {
        en: "AI-Vision-Classifier-System",
        ar: "نظام تصنيف الرؤية بالذكاء الاصطناعي",
    },
    description: {
        en: "In this project, my team and I built an end-to-end waste classification system designed to support automated recycling workflows, transforming raw image data into real-time intelligent predictions. I contributed to developing the preprocessing and augmentation pipeline, balancing the dataset to 500 images per class to enhance generalization, and leveraged ResNet50 transfer learning to boost accuracy from 60% to 90%. We further optimized an RBF SVM for efficient inference and integrated OpenCV for live camera-based predictions.",
        ar: "في هذا المشروع، بنيت مع فريقي نظاماً متكاملاً لتصنيف النفايات يدعم سير عمل إعادة التدوير الآلية، محوِّلاً بيانات الصور الخام إلى تنبؤات ذكية في الوقت الفعلي. ساهمت في تطوير خط أنابيب المعالجة المسبقة والتوسيع، وموازنة مجموعة البيانات إلى 500 صورة لكل فئة، وزيادة الدقة من 60% إلى 90% باستخدام Transfer Learning مع ResNet50.",
    },
    image: "/ai/classifier.jpeg",
    tech: ["Machine Learning", "Computer Vision", "Deep Learning", "Transfer Learning", "PyTorch", "ResNet50", "OpenCV", "Scikit-learn", "Image Classification", "Data Augmentation", "Real-Time Inference", "Model Optimization"],
    startDate: "Dec 2025",
    endDate: "Dec 2025",
    githubLink: "https://github.com/Mariam-Amro-2005/AI-Vision-Classifier-System",
}

const SoftComputingLibrary: ProjectItem = {
    title: {
        en: "Soft Computing Library",
        ar: "مكتبة الحوسبة الناعمة",
    },
    description: {
        en: "In this project, my team and I developed a modular Java-based soft computing library aimed at transforming theoretical AI concepts into reusable and extensible software components. I contributed to implementing key features across three pluggable modules—Genetic Algorithms, Fuzzy Logic, and Neural Networks—designing flexible chromosome structures, fuzzy membership functions, inference engines, and configurable neural network layers.",
        ar: "في هذا المشروع، طوّرت مع فريقي مكتبة حوسبة ناعمة معيارية مبنية بـJava تهدف إلى تحويل المفاهيم النظرية للذكاء الاصطناعي إلى مكونات برمجية قابلة لإعادة الاستخدام والتوسيع. ساهمت في تطبيق الميزات الرئيسية عبر ثلاثة وحدات: الخوارزميات الجينية، والمنطق الضبابي، والشبكات العصبية.",
    },
    image: "/ai/genetic-alg.jpg",
    tech: ["Soft Computing", "Genetic Algorithms", "Fuzzy Logic", "Neural Networks", "Java", "Algorithm Design", "Modular Architecture", "Optimization", "Hyperparameter Tuning", "AI Systems", "Library Development"],
    startDate: "Oct 2025",
    endDate: "Dec 2025",
    githubLink: "https://github.com/Mariam-Amro-2005/SoftComputingLibrary",
}

const Gomoku: ProjectItem = {
    title: {
        en: "Gomoku AI Game",
        ar: "لعبة Gomoku بالذكاء الاصطناعي",
    },
    description: {
        en: "In this project, my team and I built an intelligent Gomoku game to demonstrate how adversarial search algorithms drive strategic decision-making systems, supporting both Human vs AI and AI vs AI gameplay modes. I worked on implementing the Minimax algorithm enhanced with Alpha-Beta Pruning to optimize search efficiency while maintaining strong move evaluation, enabling real-time board updates and dynamic visualization using Tkinter.",
        ar: "في هذا المشروع، بنيت مع فريقي لعبة Gomoku ذكية لإظهار كيف تقود خوارزميات البحث التنافسي أنظمة اتخاذ القرار الاستراتيجي، مع دعم أوضاع لعب الإنسان ضد الذكاء الاصطناعي والذكاء الاصطناعي ضد الذكاء الاصطناعي. عملت على تطبيق خوارزمية Minimax مُعزَّزة بـAlpha-Beta Pruning.",
    },
    image: "/ai/gomoku.jpeg",
    tech: ["Artificial Intelligence", "Game AI", "Minimax", "Alpha-Beta Pruning", "Python", "Tkinter", "Search Algorithms", "Heuristic Evaluation", "Decision Systems", "Algorithm Optimization"],
    startDate: "May 2025",
    endDate: "May 2025",
    githubLink: "https://github.com/Mariam-Amro-2005/GomokuGameAI",
}

export const project: ProjectsProps = {
    projects: [AIVisionClassifierSystem, SoftComputingLibrary, Gomoku]
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
    skills: [AISkills, VisualizationSkills, BackendSkills, ProgrammingSkills, FrontendSkills, FrameworkSkills, SoftSkills]
}

const DataScienceDepi: CertificationItem = {
    title: {
        en: "AI & Data Science - Data Scientist",
        ar: "الذكاء الاصطناعي وعلوم البيانات - عالم بيانات",
    },
    issuer: "Digital Egypt Pioneers Initiative (DEPI)",
    description: [
        {
            en: "Issued by Digital Egypt Pioneers Initiative (DEPI), this intensive 200-hour certification covers Python, SQL, data analysis, visualization, Machine Learning, MLOps, MLflow, and Hugging Face.",
            ar: "صادرة عن مبادرة رواد مصر الرقمية (DEPI)، تغطي هذه الشهادة المكثّفة (200 ساعة) Python وSQL وتحليل البيانات والتصوير البياني والتعلم الآلي وMLOps وMLflow وHugging Face.",
        },
        {
            en: "It emphasizes building predictive models and implementing end-to-end ML workflows with hands-on exercises.",
            ar: "تُركّز على بناء النماذج التنبؤية وتطبيق سير عمل ML المتكاملة من خلال تمارين عملية.",
        },
        {
            en: "Professional skills in CV optimization, LinkedIn branding, freelancing, and networking are also developed.",
            ar: "تُطوَّر أيضاً مهارات مهنية في تحسين السيرة الذاتية وبناء العلامة الشخصية على LinkedIn والعمل الحر والتواصل.",
        },
    ],
    date: "Nov 2025 - Present",
    tags: ["Python", "Machine Learning", "Data Science"],
}

const DeepLearning: CertificationItem = {
    title: {
        en: "Getting Started with Deep Learning",
        ar: "البدء مع التعلم العميق",
    },
    issuer: "Nvidia Deep Learning Institute",
    description: [
        {
            en: "Offered by Nvidia Deep Learning Institute, this certification builds foundational knowledge in deep learning, including neural networks, CNNs, augmentation, and transfer learning deployment-oriented workflows.",
            ar: "تقدمها مؤسسة Nvidia للتعلم العميق، وتبني هذه الشهادة معرفة أساسية في التعلم العميق تشمل الشبكات العصبية وCNNs والتوسيع وسير عمل Transfer Learning الموجّهة للنشر.",
        },
        {
            en: "Participants engage in practical learning to strengthen deep learning techniques and applications.",
            ar: "يشارك المتعلمون في تعلّم عملي لتعزيز تقنيات وتطبيقات التعلم العميق.",
        },
    ],
    date: "Dec 2025",
    tags: ["Deep Learning", "Neural Networks", "CNN"],
}

const TransformerNLP: CertificationItem = {
    title: {
        en: "Introduction to Transformer-Based Natural Language Processing",
        ar: "مقدمة في معالجة اللغة الطبيعية باستخدام Transformers",
    },
    issuer: "Nvidia Deep Learning Institute",
    description: [
        {
            en: "This course by Nvidia Deep Learning Institute covers the application of transformer models for token and text classification in modern NLP tasks.",
            ar: "يغطي هذا البرنامج من مؤسسة Nvidia تطبيق نماذج Transformer في تصنيف الرموز والنصوص في مهام معالجة اللغة الطبيعية الحديثة.",
        },
        {
            en: "It builds expertise in natural language processing leveraging transformers for advanced text analysis.",
            ar: "يبني مهارات في معالجة اللغة الطبيعية بالاستفادة من Transformers لتحليل النصوص المتقدم.",
        },
    ],
    date: "Dec 2025",
    tags: ["Natural Language Processing", "Transformers", "Text Classification"],
}

const HuaweiTechEssentials: CertificationItem = {
    title: {
        en: "Tech Essentials – Cloud Computing Fundamentals",
        ar: "أساسيات التكنولوجيا وحوسبة السحابة",
    },
    issuer: "Huawei Cloud",
    description: [
        {
            en: "Issued by Huawei Cloud, this foundational cloud computing training introduces essential cloud technologies and services.",
            ar: "صادرة عن Huawei Cloud، يُقدّم هذا التدريب التأسيسي في الحوسبة السحابية التقنيات والخدمات السحابية الأساسية.",
        },
    ],
    date: "Sep 2025",
    tags: ["Cloud Computing", "Huawei Cloud", "Computing Essentials"],
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

export const aiServices: ServiceItem[] = [
    {
        title: { en: "Machine Learning", ar: "تعلم الآلة" },
        description: { en: "Custom ML models for prediction, classification, and pattern recognition.", ar: "نماذج ML مخصصة للتنبؤ والتصنيف والتعرف على الأنماط." },
        icon: "brain",
        features: ["PyTorch", "Scikit-learn", "Model Training", "Hyperparameter Tuning", "Model Deployment"],
    },
    {
        title: { en: "Data Analysis & Visualization", ar: "تحليل البيانات والتصوير البياني" },
        description: { en: "Transform raw data into actionable insights with beautiful visualizations.", ar: "حوّل البيانات الخام إلى رؤى قابلة للتنفيذ بتصورات بيانية جميلة." },
        icon: "data",
        features: ["Python", "Pandas", "Matplotlib", "Seaborn", "Power BI", "Statistical Analysis"],
    },
    {
        title: { en: "Computer Vision", ar: "رؤية الحاسوب" },
        description: { en: "Intelligent image and video analysis solutions for real-world applications.", ar: "حلول ذكية لتحليل الصور والفيديو للتطبيقات العملية." },
        icon: "vision",
        features: ["OpenCV", "ResNet", "Object Detection", "Image Classification", "Real-time Processing"],
    },
    {
        title: { en: "Deep Learning", ar: "التعلم العميق" },
        description: { en: "Advanced neural network solutions for complex AI challenges.", ar: "حلول شبكات عصبية متقدمة للتحديات المعقدة في الذكاء الاصطناعي." },
        icon: "ai",
        features: ["PyTorch", "TensorFlow", "CNNs", "RNNs", "Transfer Learning", "Model Optimization"],
    },
    {
        title: { en: "NLP Solutions", ar: "حلول معالجة اللغة الطبيعية" },
        description: { en: "Natural language processing for text analysis and understanding.", ar: "معالجة اللغة الطبيعية لتحليل النصوص وفهمها." },
        icon: "brain",
        features: ["Transformers", "Text Classification", "Sentiment Analysis", "BERT", "GPT Integration"],
    },
    {
        title: { en: "Data Engineering", ar: "هندسة البيانات" },
        description: { en: "Robust data pipelines and infrastructure for AI applications.", ar: "خطوط بيانات وبنية تحتية قوية لتطبيقات الذكاء الاصطناعي." },
        icon: "database",
        features: ["Data Pipelines", "ETL", "SQL", "Data Warehousing", "Big Data", "Efficient Queries"],
    }
];

export const aiData: PortfolioData = {
    hero: hero,
    about: about,
    education: education,
    experience: experience,
    projects: project,
    skills: skill,
    certifications: certificate,
    achievements: achievement,
    contact: contact,
    services: {
        services: aiServices
    }
};