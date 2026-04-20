export type Lang = 'en' | 'ar';

export const ui = {
    // Navbar labels
    nav: {
        home:           { en: 'Home',           ar: 'الرئيسية' },
        about:          { en: 'About',          ar: 'عني' },
        services:       { en: 'Services',       ar: 'الخدمات' },
        education:      { en: 'Education',      ar: 'التعليم' },
        experience:     { en: 'Experience',     ar: 'الخبرة' },
        projects:       { en: 'Projects',       ar: 'المشاريع' },
        skills:         { en: 'Skills',         ar: 'المهارات' },
        achievements:   { en: 'Achievements',   ar: 'الإنجازات' },
        certifications: { en: 'Certifications', ar: 'الشهادات' },
        contact:        { en: 'Contact',        ar: 'تواصل' },
    },

    // Section backgrounds (large watermark text)
    watermark: {
        about:          { en: 'About',                   ar: 'عني' },
        skills:         { en: 'Technical Skills',        ar: 'المهارات التقنية' },
        education:      { en: 'Education',               ar: 'التعليم' },
        experience:     { en: 'Professional Experience', ar: 'الخبرة المهنية' },
        projects:       { en: 'Projects',                ar: 'المشاريع' },
        achievements:   { en: 'Achievements',            ar: 'الإنجازات' },
        certifications: { en: 'Certifications',          ar: 'الشهادات' },
        contact:        { en: 'Contact',                 ar: 'تواصل' },
        services:       { en: 'Services',                ar: 'الخدمات' },
    },

    // Section headings
    heading: {
        aboutMe:        { en: 'About Me',       ar: 'عني' },
        skills:         { en: 'Technical Skills', ar: 'المهارات التقنية' },
        education:      { en: 'Education',      ar: 'التعليم' },
        experience:     { en: 'Experience',     ar: 'الخبرة' },
        projects:       { en: 'Projects',       ar: 'المشاريع' },
        achievements:   { en: 'Achievements',   ar: 'الإنجازات' },
        certifications: { en: 'Certifications', ar: 'الشهادات' },
        contact:        { en: 'Contact',        ar: 'تواصل' },
        whatIOffer:     { en: 'What I Offer',   ar: 'ما أقدمه' },
    },

    // Section subtitles / callouts
    subtitle: {
        moreAboutMe:    { en: 'More about me',              ar: 'المزيد عني' },
        skillsCallout:  { en: 'I constantly strive to improve', ar: 'أسعى دائماً للتطوير' },
        servicesFS:     { en: 'Comprehensive full-stack development services to bring your ideas to life', ar: 'خدمات تطوير متكاملة لإحياء أفكارك' },
        servicesAI:     { en: 'Cutting-edge AI and data science solutions for modern business challenges', ar: 'حلول ذكاء اصطناعي وعلوم بيانات متطورة للتحديات التجارية الحديثة' },
        interestedWorking: { en: 'Interested in working together?', ar: 'هل أنت مهتم بالتعاون معي؟' },
    },

    // Buttons / CTAs
    btn: {
        letsConnect:    { en: "Let's Connect",           ar: 'تواصل معي' },
        downloadResume: { en: 'Download Resume',         ar: 'تحميل السيرة الذاتية' },
        sendEmail:      { en: 'Send me an Email',        ar: 'أرسل لي بريداً إلكترونياً' },
        discussProject: { en: "Let's Discuss Your Project", ar: 'لنتحدث عن مشروعك' },
        viewGitHub:     { en: 'View on GitHub',          ar: 'عرض على GitHub' },
        viewLive:       { en: 'View Live',               ar: 'عرض مباشر' },
        exploreFull:    { en: 'Explore Fullstack →',     ar: 'استكشف Fullstack ←' },
        exploreAI:      { en: 'Explore AI/ML →',         ar: 'استكشف AI/ML ←' },
        techStack:      { en: 'Technology Stack',        ar: 'التقنيات المستخدمة' },
        more:           { en: 'more',                    ar: 'المزيد' },
    },

    // About section
    about: {
        greeting:       { en: "Hello! I'm",              ar: 'مرحباً! أنا' },
        connectWithMe:  { en: 'Connect with Me',         ar: 'تواصل معي' },
    },

    // Contact section
    contact: {
        quote:          { en: '"Building innovative solutions through clean code, creative problem-solving, and seamless collaboration. Let\'s turn ideas into impact."', ar: '"أبني حلولاً مبتكرة من خلال كود نظيف وحل إبداعي للمشكلات وتعاون سلس. لنحوّل الأفكار إلى تأثير حقيقي."' },
        letsConnect:    { en: "Let's Connect",           ar: 'تواصل معي' },
        readyToCollab:  { en: 'Ready to Collaborate?',  ar: 'هل أنت مستعد للتعاون؟' },
        alwaysExcited:  { en: "I'm always excited to hear about new opportunities and interesting projects. Whether you have a question or just want to say hi, feel free to reach out. I'll try my best to get back to you!", ar: 'أنا دائماً متحمس لسماع فرص جديدة ومشاريع مثيرة. سواء كان لديك سؤال أو تريد فقط التحية، لا تتردد في التواصل معي وسأحاول الرد في أقرب وقت!' },
        quickResponse:  { en: 'Quick Response Time',     ar: 'وقت استجابة سريع' },
        responseDetails:{ en: "I typically respond to inquiries within 24-48 hours. Let's discuss how we can work together!", ar: 'أرد عادةً على الاستفسارات خلال 24-48 ساعة. لنتحدث عن كيفية تعاوننا!' },
    },

    // Cards – label badges
    card: {
        experience:     { en: 'Experience',              ar: 'خبرة' },
        achievement:    { en: 'Achievement',             ar: 'إنجاز' },
        certification:  { en: 'Certification',           ar: 'شهادة' },
    },

    // Landing page (root page.tsx)
    landing: {
        welcome:        { en: '👋 Welcome to My Portfolio', ar: '👋 مرحباً بك في ملفي الشخصي' },
        twoPortfolios:  { en: 'Two portfolios.', ar: 'ملفان شخصيان.' },
        oneDeveloper:   { en: 'One developer', ar: 'مطوّرة واحدة' },
        yourChoice:     { en: 'Your choice:', ar: 'اختيارك:' },
        choosePath:     { en: 'Choose your path to explore my work and experience', ar: 'اختر مسارك لاستكشاف عملي وخبراتي' },
        fullstackTitle: { en: 'Fullstack Development', ar: 'تطوير تطبيقات الويب المتكاملة' },
        fullstackDesc:  { en: 'React, Next.js, Spring Boot, TypeScript, and modern web technologies', ar: 'React وNext.js وSpring Boot وTypeScript وتقنيات الويب الحديثة' },
        aiTitle:        { en: 'AI & Data Science', ar: 'الذكاء الاصطناعي وعلوم البيانات' },
        aiDesc:         { en: 'Machine Learning, Deep Learning, PyTorch, Data Analysis, and Computer Vision', ar: 'تعلم الآلة والتعلم العميق وPyTorch وتحليل البيانات ورؤية الكمبيوتر' },
    },

    // ExperienceCard label
    experienceLabel: { en: 'Experience', ar: 'خبرة' },
} as const;

// Helper to get a string for the current language
export function t(entry: { en: string; ar: string }, lang: Lang): string {
    return entry[lang];
}
