type Project = {
    name: string
    description: string
    link: string
    video?: string
    id: string
}

type WorkExperience = {
    company: string
    title: string
    start: string
    technologies: string[]
    end: string
    link: string
    id: string
}

type Education = {
    school: string
    link: string
    degree: string
    start: string
    end: string
    gpa: string
    id: string
}

type BlogPost = {
    title: string
    description: string
    link: string
    uid: string
}

type SocialLink = {
    label: string
    link: string
}
export const PROJECTS: Project[] = [
    {
        name: "RecMind",
        description: "A real-time article knowledge base recommendation system using a Go backend, RabbitMQ, and a RAG pipeline. Features a pub/sub ingestion point and embedded vector store for fast semantic search.",
        link: 'https://github.com/owenHochwald/rec-mind',
        video: "/recmind_demo.mp4",
        id: 'project0'
    },
    {
        name: 'AdmitifyAI',
        description:
            '5 person team collaberative full-stack project to build a tool taking a holistic approach to college admissions guidance, powered by AI-driven insights written in Typescript, Nextjs, and React.',
        link: 'https://admitifyai.com/',
        video:
            'admitifyResumeDemo.mp4',
        id: 'project1',
    },
    {
        name: 'Volt',
        description:
            'Terminal native HTTP / Load testing client w/ 200k req/sec with VIM style keybindings, acting as a Postman & K6 Alternative. Built in Golang.',
        link: 'https://github.com/owenHochwald/Volt',
        video: "volt.mp4",
        id: 'projectvolt'
    },
    {
        name: 'Aniwatch Wrapped',
        description:
            'Built viral statistics, data engine platform reaching 1K+ users in first 24 hours, processing personalized year-in-review with 15+ metrics. Build with TypeScript/Next.js with GraphQL API integration, caching layers to bypass rate limits, and dynamic user-level routing.',
        link: '',
        video: "anilist_wrapped.mp4",
        id: 'projectanilistwrapped'
    },
    {
        name: 'Shakespeare GPT',
        description:
            'Custom trained transformer based on the paper "Attention Is All You Need" to generate original Shakespearean-style text using PyTorch.',
        link: 'https://github.com/owenHochwald/shakespeare-gpt/',
        video:
            '/gpt_demo.mp4',
        id: 'project1',
    },

    {
        name: 'Atlas of Westeros',
        description: 'Full-featured Java Swing GUI map application for Game of Thrones. Developed with TDD (97% coverage) with OOP principles in mind.',
        link: 'https://github.com/owenHochwald/atlas-of-westeros/',
        video:
            '/westeros.mov',
        id: 'project1.5',
    },
    {
        name: 'Aftrbrnr',
        description: 'Open-source, company-wide time-tracking end-to-end web app built with NextJs and PostgreSQL.',
        link: 'https://www.aftrbrnr.com/',
        video:
            '/aftrbrnr_demo.mp4',
        id: 'project2',
    },
    {
        name: 'Throne Tracker',
        description: 'A real-time bathroom queue management for roomates. No more akward door kocking. Ever. Uses Golang, Typescript, Redis, and React.',
        link: 'https://github.com/owenHochwald/Throne-Tracker',
        video: "",
        id: "projectThroneTracker"
    },
    {
        name: 'Graphite - Visual Grid Simulator',
        description: 'Visual React + Bun app to simulate pathfinding algorithms and on the fly maze generation on a grid.',
        link: '',
        video:
            '/graph-traversal.mp4',
        id: 'project2',
    },
    {
        name: 'Pawsture Pal',
        description: 'Chrome extension to promote better posture habits with personalized reminders and friendly cat animations.',
        link: 'https://chromewebstore.google.com/detail/Pawsture%20Pal/ghdnbollliflcjoeglpnlecdhcbcbopf',
        video:
            '/extension_demo.mp4',
        id: 'project2',
    },

]

export const WORK_EXPERIENCE: WorkExperience[] = [
    {
        company: 'UBC Launch Pad',
        title: 'Software Developer',
        start: 'September 2025',
        end: 'Present',
        technologies: ["TypeScript", "AWS SDK", "DynamoDB", "ECS", "Lambda Functions", "React"],
        link:
            "https://www.ubclaunchpad.com/",
        id: 'work0',
    },
    {
        company: 'Stealth Startup',
        title: 'Software Engineer Intern',
        start: 'July 2025',
        end: 'September 2025',
        technologies: ["Kotlin", "Docker", "Nginx", "Spring Boot", "RestAPIs", "TypeScript", "React", "MariaDB"],
        link:
            "",

        // 'https://www.viscoglab.psych.ubc.ca/',
        id: 'work1',
    },
    {
        company: 'UBC Visual Cognition Lab',
        title: 'Coding Team Co-pilot Internship',
        start: 'April 2025',
        end: 'Present',
        technologies: ["React", "Redux", "MongoDB", "AWS S3", "Express.js", "TypeScript", "RAG", "LangChain"],
        link: 'https://www.viscoglab.psych.ubc.ca/',
        id: 'work2',
    },
    {
        company: 'Insomniac Design, Inc.',
        title: 'Backend / Machine Learning Engineer Intern',
        start: 'June 2023',
        end: 'Aug 2023',
        technologies: ["Python", "FastAPI", "Lbl2Vec", "Unsupervised Sentiment Analysis", "API Development"],
        link: 'https://insomniacdesign.com/',
        id: 'work3',
    },

]

export const EDUCATION: Education[] = [
    {
        school: 'University of British Columbia',
        link: "https://www.cs.ubc.ca/about/numbers",
        degree: 'BSc Computer Science - Dean\'s List - Science Scholar',
        start: '2024',
        end: '2027',
        gpa: '4.0/4.0',
        id: 'work1',
    },
]

export const BLOG_POSTS: BlogPost[] = [
    {
        title: 'How can we predict dry eyes?',
        description: 'Exploratory data analysis with a KNN model in R.',
        link: '/blog/exploring-dry-eye-disease-dataset',
        uid: 'blog-1',
    },
    {
        title: 'Why you should read more textbooks.',
        description: 'An argument in favor of technical depth.',
        link: '/blog/why-you-should-read-more-textbooks',
        uid: 'blog-2',
    },
]

export const SOCIAL_LINKS: SocialLink[] = [
    {
        label: 'Github',
        link: 'https://github.com/owenHochwald/',
    },
    {
        label: 'LinkedIn',
        link: 'https://www.linkedin.com/in/owen0hochwald/',
    },
    {
        label: 'Kaggle',
        link: 'https://www.kaggle.com/owenhochwald',
    },
    {
        label: 'Resume',
        link: '/resume.pdf',
    },
]

export const EMAIL = 'owenhochwald@gmail.com'
