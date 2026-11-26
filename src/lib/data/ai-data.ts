import { AboutProps, AchievementItem, AchievementsProps, CertificationItem, CertificationsProps, ContactProps, EducationItem, EducationProps, ExperienceItem, ExperienceProps, HeroProps, ProjectItem, ProjectsProps, SkillsItem, SkillsProps, ServiceItem } from "../types";
import { PortfolioData } from './index';

const Linkedin = "https://www.linkedin.com/in/mariam-seifeldin/";
const Github = "https://github.com/Mariam-Amro-2005";
const Email = "mariam.seifeldin.2005@gmail.com";
const Phone = "+201211433445";
const Location = "Cairo, Egypt";


export const hero: HeroProps = {
    name: {
        en: "Mariam Amro Ahmed Fathi Seifeldin",
        ar: "مريم عمرو أحمد فتحي سيف الدين",
    },
    typingWords: [
        {
            en: "AI Engineer",
            ar: "مهندسة ذكاء اصطناعي",
        },
        {
            en: "Machine Learning Engineer",
            ar: "مهندسة تعلم الآلة",
        },
        {
            en: "Data Science Enthusiast",
            ar: "شغوفة بعلوم البيانات",
        },
        {
            en: "Computer Vision Developer",
            ar: "مطوّرة في مجال الرؤية الحاسوبية",
        },
        {
            en: "Python & PyTorch Specialist",
            ar: "متخصصة في Python وPyTorch",
        },
        {
            en: "Data Analyst & Visualization Expert",
            ar: "محللة بيانات ومتخصصة في تصور البيانات",
        },
        {
            en: "End-to-End ML Pipeline Builder",
            ar: "متخصصة في بناء مسارات تعلم الآلة المتكاملة",
        },
        {
            en: "2+ Years Experience",
            ar: "خبرة تزيد عن سنتين",
        },
    ],
    location: Location,
    email: Email,
};


export const about: AboutProps = {
    photo: "/profile1.jpeg",
    name: { en: "Mariam", ar: "مريم" },
    bio: {
        en: "I am an AI Engineer and Data Scientist specializing in building intelligent, end-to-end solutions that bridge complex data and real-world applications. I develop RAG architectures, multi-agent frameworks, and predictive ML models using PyTorch (Python), LangGraph, and FastAPI. Skilled in NLP, deep learning, and data analysis with Scikit-learn, Pandas, and Power BI, I thrive in collaborative environments where AI creates measurable impact.",
        ar: "أنا مهندسة ذكاء اصطناعي وعالمة بيانات متخصصة في بناء حلول ذكية ومتكاملة تربط بين البيانات المعقدة والتطبيقات العملية. أقوم بتطوير هندسات RAG، وأطر متعددة الوكلاء، ونماذج تعلم آلة تنبؤية باستخدام PyTorch (Python) وLangGraph وFastAPI. ماهرة في معالجة اللغة الطبيعية والتعلم العميق وتحليل البيانات باستخدام Scikit-learn وPandas وPower BI، وأزدهر في البيئات التعاونية حيث يصنع الذكاء الاصطناعي أثراً ملموساً.",
    },
    linkedin: Linkedin,
    github: Github,
    email: Email,
    phone: Phone,
    resume: "https://drive.google.com/file/d/1LS7zHPSXQsyAei04NXW9zsveoGFT_vZo/view?usp=sharing"
};

const BachelorsEdu: EducationItem = {
    degree: {
        en: "Bachelor of Science in Computer Science",
        ar: "بكالوريوس علوم الحاسوب",
    },
    institution: "Faculty of Computers and Artificial Intelligence – Cairo University",
    location: "Cairo, Egypt",
    startDate: "Sep 2022",
    endDate: "Sep 2026",
    description: [
        {
            en: "Graduated with a BSc in Computer Science and a strong GPA of 3.4 (Very Good).",
            ar: "تخرجت بدرجة البكالوريوس في علوم الحاسوب بمعدل تراكمي قوي 3.4 (جيد جداً).",
        },
        {
            en: "Relevant coursework includes Natural Language Processing, Machine Learning, Artificial Intelligence, and Advanced Software Engineering.",
            ar: "تشمل المقررات ذات الصلة معالجة اللغة الطبيعية، وتعلم الآلة، والذكاء الاصطناعي، وهندسة البرمجيات المتقدمة.",
        },
    ],
    tags: ["Computer Science", "Artificial Intelligence", "Machine Learning", "NLP", "Software Engineering", "Full-Stack Development"],
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

const QubeterraFellowship: ExperienceItem = {
    title: {
        en: "AI Engineering Fellow",
        ar: "زميلة هندسة الذكاء الاصطناعي",
    },
    company: "Qubeterra AI NextGen Program (ITU, Huawei)",
    location: "Remote",
    startDate: "Aug 2026",
    endDate: "Oct 2026",
    description: [
        {
            en: "Selected as one of the top participants in this intensive fellowship, recognized for excellence in system architecture, problem-solving, and technical communication.",
            ar: "تم اختياري كواحدة من أفضل المشاركين في هذا البرنامج المكثف، تقديراً للتميز في هندسة الأنظمة وحل المشكلات والتواصل التقني.",
        },
        {
            en: "Engineered a production-ready RAG pipeline (911 documents) and a 5-persona LangGraph multi-agent framework with tool-calling, memory, and context summarization.",
            ar: "طوّرت خط أنابيب RAG جاهز للإنتاج (911 مستنداً) وإطار عمل LangGraph متعدد الوكلاء يضم 5 شخصيات، مع استدعاء الأدوات والذاكرة وتلخيص السياق.",
        },
        {
            en: "Built a Next.js/TypeScript frontend with real-time SSE streaming and integrated multiple LLMs (GPT, Gemma) with Langfuse for observability and Docker for containerization.",
            ar: "بنيت واجهة أمامية بـNext.js/TypeScript مع بث SSE في الوقت الفعلي، ودمجت نماذج LLM متعددة (GPT، Gemma) مع Langfuse للمراقبة وDocker للحزم.",
        },
    ],
    tags: ["AI Engineering", "LLMs", "LangGraph", "RAG", "FastAPI", "Next.js", "Docker", "Langfuse"],
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
    experiences: [QubeterraFellowship, EgronXExp]
}

const MultiAgentOpinionSimulator: ProjectItem = {
    title: {
        en: "Multi-Agent Opinion Simulator",
        ar: "محاكي الآراء متعدد الوكلاء",
    },
    description: {
        en: "Developed a production-ready RAG pipeline using 911 scraped documents for hybrid retrieval with citations, alongside a LangGraph agent framework featuring 5 personas, tool-calling, and two-tier memory. Integrated multiple LLMs (GPT, Gemma) and built a Next.js frontend with real-time SSE streaming for live agent discussions. Enhanced observability with Langfuse tracing and structured logging, containerizing the full stack with Docker.",
        ar: "طوّرت خط أنابيب RAG جاهز للإنتاج باستخدام 911 مستنداً لاسترجاع هجين مزود بالمراجع، إلى جانب إطار عمل لوكلاء LangGraph يضم 5 شخصيات، واستدعاء الأدوات، وذاكرة من مستويين. دمجت نماذج LLM متعددة (مثل GPT وGemma) وبنيت واجهة أمامية بـNext.js لبث تفاعلات الوكلاء في الوقت الفعلي عبر SSE. عززت المراقبة باستخدام Langfuse والسجلات المنظمة، وحزمت النظام بالكامل باستخدام Docker.",
    },
    image: "/ai/Multi-Agent-Opinion-Simulator.png",
    tech: ["Python", "FastAPI", "LangGraph", "Next.js", "TypeScript", "Docker", "PostgreSQL", "pgvector", "Langfuse", "LLMs"],
    startDate: "Aug 2026",
    endDate: "Oct 2026",
    liveLink: "https://drive.google.com/file/d/101b7c1BLyFmZZT_A8JNCuUSWdkyOQPGc/view?usp=sharing",
};

const InclusiChat: ProjectItem = {
    title: {
        en: "InclusiChat – Bidirectional Sign Language Translation",
        ar: "InclusiChat – ترجمة لغة الإشارة ثنائية الاتجاه",
    },
    description: {
        en: "Built a gloss-free Transformer model for sign-to-text translation, achieving a BLEU-4 score of 21.44 on the PHOENIX-2014T benchmark. Designed a text-to-sign pipeline generating 3D keypoints for avatar animation with 89.2% joint accuracy. Deployed ASR, SLR, TTS, and SLP models as a unified FastAPI microservice supporting text, voice, and sign language in real time.",
        ar: "بنيت نموذج Transformer بدون الحاجة إلى gloss لترجمة لغة الإشارة إلى نص، محققاً درجة BLEU-4 تبلغ 21.44. صممت خط أنابيب نص-إلى-إشارة لتوليد نقاط مفصلية ثلاثية الأبعاد (3D keypoints) لتحريك الصور الرمزية بدقة 89.2%. نشرت نماذج ASR وSLR وTTS كخدمة FastAPI دقيقة موحدة تدعم النصوص والصوت ولغة الإشارة في الوقت الفعلي.",
    },
    image: "/ai/InclusiChat.png",
    tech: ["PyTorch", "TensorFlow", "FastAPI", "BERT", "ONNX Runtime", "MediaPipe", "Three.js", "NLP", "Computer Vision"],
    startDate: "Sep 2025",
    endDate: "Jul 2026",
    githubLink: "https://github.com/saeedmhmoud100/Graduation-Project-Backend",
};

const EVGuard: ProjectItem = {
    title: {
        en: "EVGuard – Electric Vehicle Predictive Maintenance",
        ar: "EVGuard – الصيانة التنبؤية للسيارات الكهربائية",
    },
    description: {
        en: "Built a LightGBM model on 25 engineered features that predicts five failure modes with 99.4% accuracy and a Macro F1 score of 0.891. Applied ADASYN oversampling to resolve a 444:1 class imbalance, boosting critical overheating recall from 77% to 97%. Deployed the model via FastAPI with a decision support engine, targeting a 20% reduction in unplanned roadside breakdowns.",
        ar: "بنيت نموذج LightGBM يعتمد على 25 ميزة هندسية للتنبؤ بخمسة أنواع من الأعطال بدقة 99.4% ودرجة F1 تبلغ 0.891. طبقت تقنية ADASYN لمعالجة اختلال التوازن الطبقي (444:1)، مما رفع استدعاء ارتفاع درجة الحرارة الحرج من 77% إلى 97%. نشرت النموذج عبر FastAPI مع محرك دعم القرار لتقليل الأعطال المفاجئة على الطرق بنسبة 20%.",
    },
    image: "/ai/EVGuard.jpg",
    tech: ["Python", "LightGBM", "Scikit-Learn", "FastAPI", "Pandas", "Docker", "Machine Learning", "Predictive Maintenance"],
    startDate: "Jan 2026",
    endDate: "Jul 2026",
    githubLink: "https://github.com/Mariam-Amro-2005/Capstone-Project-DEPI",
    liveLink: "https://capstone-project-depi.vercel.app/",
};

const NLPTextClassification: ProjectItem = {
    title: {
        en: "NLP Text Classification & Word Embeddings",
        ar: "تصنيف النصوص وWord Embeddings في معالجة اللغة الطبيعية",
    },
    description: {
        en: "Trained SVM and Logistic Regression classifiers on TF-IDF features from 17k+ Amazon reviews to categorize sentiment as positive, neutral, or negative. Built a CNN model with custom Word2Vec and pre-trained GloVe embeddings to classify 400k+ tweets into 6 distinct emotions. Compared accuracy across multiple sequence padding lengths (500, 700, 1000) and embedding schemes, identifying the optimal configuration for each dataset.",
        ar: "تم تدريب مصنفات SVM و Logistic Regression على ميزات TF-IDF من أكثر من 17 ألف مراجعة أمازون لتصنيف المشاعر إلى إيجابية ومحايدة وسلبية. تم بناء نموذج CNN باستخدام Word2Vec مخصص وGloVe مدربة مسبقًا لتصنيف أكثر من 400 ألف تغريدة إلى 6 مشاعر مختلفة. تمت مقارنة الدقة عبر أطوال حشو مختلفة ومخططات تضمين، وتحديد التهيئة المثلى لكل مجموعة بيانات.",
    },
    image: "/ai/nlp-word-embedding-keras.jpg",
    tech: ["Python", "scikit-learn", "Keras", "Gensim", "NLTK", "Pandas", "NumPy", "NLP", "Word Embeddings", "CNN", "TF-IDF"],
    startDate: "May 2026",
    endDate: "May 2026",
    githubLink: "https://github.com/Salma884/NLP-Project",
};

const NgramSentenceGenerator: ProjectItem = {
    title: {
        en: "NLP Sentence Generator (N-gram Model)",
        ar: "مولد الجمل باستخدام نماذج N-gram",
    },
    description: {
        en: "Tokenized and cleaned 200k tokens from the Brown corpus to provide clean training data for n-gram models. Built bigram and trigram frequency dictionaries from scratch without external libraries, enabling fast probability look-ups. Generated sentences by greedily picking the most probable next word, stopping at a user-defined max length.",
        ar: "تم تقسيم وتنظيف 200 ألف رمز من مجموعة Brown corpus لتوفير بيانات تدريب نظيفة لنماذج n-gram. تم بناء قواميس تردد bigram و trigram من الصفر دون مكتبات خارجية، مما يتيح عمليات بحث سريعة عن الاحتمالات. تم توليد الجمل عن طريق اختيار الكلمة التالية الأكثر احتمالية بشكل جشع، والتوقف عند طول أقصى يحدده المستخدم.",
    },
    image: "/ai/n-gram-sentences.jpg",
    tech: ["Python", "NLTK", "Brown Corpus", "Bigram", "Trigram", "Language Models", "NLP"],
    startDate: "Mar 2026",
    endDate: "Mar 2026",
    githubLink: "https://github.com/Mariam-Amro-2005/NLP-Sentence-Generator",
};

const JenkinsPipeline: ProjectItem = {
    title: {
        en: "CI/CD Pipeline with Jenkins",
        ar: "خط أنابيب CI/CD باستخدام Jenkins",
    },
    description: {
        en: "Automated cloning, dependency installation, and unit testing of a Node.js calculator application using a Jenkins pipeline. Achieved full arithmetic coverage with Jest to prevent regressions before merging. The pipeline is integrated with GitHub for continuous integration, providing instant feedback on every commit.",
        ar: "أتمتة استنساج الكود، وتثبيت التبعيات، واختبار الوحدة لتطبيق آلة حاسبة بـ Node.js باستخدام خط أنابيب Jenkins. تم تحقيق تغطية اختبارية كاملة باستخدام Jest لمنع الانحدارات قبل الدمج. تم دمج خط الأنابيب مع GitHub لتكامل مستمر وتقديم تغذية راجعة فورية لكل عملية دفع.",
    },
    image: "/pipeline-overview-2.png",
    tech: ["Node.js","JavaScript", "Jest", "Jenkins", "Git", "GitHub", "CI/CD"],
    startDate: "May 2026",
    endDate: "May 2026",
    githubLink: "https://github.com/Mariam-Amro-2005/Simple-Calculator-Jenkins-Test",
};

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
    projects: [
        MultiAgentOpinionSimulator, 
        InclusiChat, 
        EVGuard, 
        NLPTextClassification, 
        NgramSentenceGenerator, 
        JenkinsPipeline, 
        AIVisionClassifierSystem, 
        SoftComputingLibrary, 
        // Gomoku
    ]
};

const ProgrammingSkills: SkillsItem = {
    category: { en: "Programming Languages", ar: "لغات البرمجة" },
    skills: ["Python", "Java", "C++", "C", "Assembly", "SQL"],
}

const AICoreSkills: SkillsItem = {
    category: { en: "AI, ML & Deep Learning", ar: "الذكاء الاصطناعي وتعلم الآلة والتعلم العميق" },
    skills: ["Scikit-learn", "PyTorch", "TensorFlow", "Hugging Face", "Machine Learning", "Deep Learning", "NLP", "TF-IDF", "Data Preprocessing", "EDA", "Feature Engineering", "Model Training", "Model Evaluation"],
}

const LLMSkills: SkillsItem = {
    category: { en: "LLMs, Agentic AI & Generative AI", ar: "نماذج اللغة الكبيرة والوكلاء والذكاء الاصطناعي التوليدي" },
    skills: ["LLMs", "RAG", "LangGraph", "LangChain", "Tool Calling", "Prompt Engineering", "Embeddings", "Word Embeddings", "Generative AI"],
}

const DataAnalysisSkills: SkillsItem = {
    category: { en: "Data Analysis & Visualization", ar: "تحليل البيانات والتصوير البياني" },
    skills: ["NumPy", "Pandas", "Matplotlib", "Seaborn", "Power BI"],
}

const BackendSkills: SkillsItem = {
    category: { en: "Backend, APIs & Databases", ar: "الواجهة الخلفية وواجهات البرمجة وقواعد البيانات" },
    skills: ["FastAPI", "Django", "Spring Boot", "REST APIs", "PostgreSQL", "pgvector", "MySQL", "SQL", "SQLite"],
}

const MLOpsSkills: SkillsItem = {
    category: { en: "MLOps & Observability", ar: "عمليات التعلم الآلي والمراقبة" },
    skills: ["MLOps", "MLflow", "Langfuse", "Structured Logging", "Agent Tracing"],
}

const CloudAndToolsSkills: SkillsItem = {
    category: { en: "Cloud, DevOps & Developer Tools", ar: "السحابة، DevOps وأدوات المطورين" },
    skills: ["Docker", "Git", "GitHub", "Postman", "Figma", "Canva", "Vercel", "Railway", "Kaggle"],
}

const FrontendSkills: SkillsItem = {
    category: { en: "Frontend & UI", ar: "الواجهة الأمامية وواجهات المستخدم" },
    skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Responsive Design"],
}

const SoftSkills: SkillsItem = {
    category: { en: "Soft Skills & Methodologies", ar: "المهارات الشخصية والمنهجيات" },
    skills: ["Agile", "Team Player", "Detail-oriented", "Communication", "Teamwork", "Mentorship"],
}

export const skill: SkillsProps = {
    skills: [ProgrammingSkills, AICoreSkills, LLMSkills, DataAnalysisSkills, BackendSkills, MLOpsSkills, CloudAndToolsSkills, FrontendSkills, SoftSkills]
}

const QubeterraFellowshipCert: CertificationItem = {
    title: {
        en: "Qubeterra AI NextGen Fellowship",
        ar: "زمالة كيوبتيرا للذكاء الاصطناعي NextGen",
    },
    issuer: "Qubeterra (Supported by ITU & Huawei)",
    description: [
        {
            en: "Selected as one of the top participants in this intensive AI engineering fellowship, focused on building practical AI systems and modern agentic architectures.",
            ar: "تم اختياري كواحدة من أفضل المشاركين في هذه الزمالة المكثفة لهندسة الذكاء الاصطناعي، والتي تركز على بناء أنظمة ذكاء اصطناعي عملية وبنى الوكلاء الحديثة.",
        },
        {
            en: "Received a formal recommendation letter from the Programs Director for excellence in system architecture, problem-solving, and technical communication.",
            ar: "حصلت على خطاب توصية رسمي من مدير البرامج للتميز في هندسة الأنظمة وحل المشكلات والتواصل التقني.",
        },
    ],
    date: "Oct 2026",
    tags: ["AI Engineering", "LLMs", "LangGraph", "RAG", "Multi-Agent Systems"],
    link: "https://drive.google.com/file/d/1OJTRBznVamad32FWlGDzLvipZRaT9Qb7/view?usp=sharing", 
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
    date: "Nov 2025 - Jul 2026",
    tags: ["Python", "Machine Learning", "Data Science"],
    link: "https://drive.google.com/file/d/1ikrz_DXn0Nw10a-gtw2MUEvvwP1QtGLu/view?usp=sharing"
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
    link: "https://drive.google.com/file/d/1jWEGfg0xyDiAN2VRPAkWSEqUZ6OjpCwY/view?usp=sharing"
}

export const achievement: AchievementsProps = {
    achievements: []
}

export const certificate: CertificationsProps = {
    certifications: [
        QubeterraFellowshipCert,
        DataScienceDepi, 
        // DeepLearning, 
        // TransformerNLP, 
        HuaweiTechEssentials,
    ]
}

export const contact: ContactProps = {
    linkedin: Linkedin,
    github: Github,
    email: Email,
    phone: Phone,
}

export const languages = [
    "Arabic (Mother tongue)", "English (Fluent, IGCSE certified)", "German (A2)"
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