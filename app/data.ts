type Project = {
    name: string
    description: string
    link: string
    video?: string
    id: string
    technologies?: string[]
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
    date: string
    readingTime: number
}

type SocialLink = {
    label: string
    link: string
}
export const PROJECTS: Project[] = [
    {
        name: 'Volt',
        description:
            '130+ star terminal HTTP load tester. Hits 200k req/sec with Vim keybindings — a Postman and k6 alternative built natively for the shell. Written in Go.',
        link: 'https://github.com/owenHochwald/Volt',
        video: '/volt.mp4',
        id: 'projectvolt',
        technologies: ['Go', 'TUI', 'BubbleTea', 'Github Actions', 'HTTP'],
    },
    {
        name: 'RecMind',
        description:
            'Real-time recommendation engine using Go, RabbitMQ pub/sub, and a RAG pipeline with an embedded vector store for sub-10ms semantic search over articles.',
        link: 'https://github.com/owenHochwald/rec-mind',
        video: '/recmind_demo.mp4',
        id: 'project0',
        technologies: ['Go', 'RabbitMQ', 'pgvector', 'RAG'],
    },
    {
        name: 'Aniwatch Wrapped',
        description:
            'Went viral on first deploy — 1,000 users in 24 hours. Spotify Wrapped for anime: 15+ personalized year-in-review metrics via GraphQL with caching to bypass rate limits.',
        link: '',
        video: 'anilist_wrapped.mp4',
        id: 'projectanilistwrapped',
        technologies: ['TypeScript', 'Next.js', 'GraphQL'],
    },
    {
        name: 'AdmitifyAI',
        description:
            'Led frontend on a 5-person team building an AI-driven college admissions platform. TypeScript, Next.js, shipped to production.',
        link: 'https://admitifyai.com/',
        video: 'admitifyResumeDemo.mp4',
        id: 'project1',
        technologies: ['TypeScript', 'Next.js', 'React'],
    },
    {
        name: 'Egg Carton',
        description:
            'Serverless secret manager for developers shipping AI agents. Store, rotate, and retrieve API keys without leaking them into model context.',
        link: 'https://github.com/owenHochwald/egg-carton',
        video: 'eggcarton.mov',
        id: 'projecteggcarton',
        technologies: ['TypeScript', 'Serverless', 'AWS'],
    },
    {
        name: 'Shakespeare GPT',
        description:
            'Trained a transformer from scratch on the complete works of Shakespeare, following "Attention Is All You Need". Pure PyTorch, no pretrained weights.',
        link: 'https://github.com/owenHochwald/shakespeare-gpt/',
        video: '/gpt_demo.mp4',
        id: 'projectshakespeare',
        technologies: ['Python', 'PyTorch', 'Transformers'],
    },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
    {
        company: 'Incoming - Capital One',
        title: 'Software Engineer Intern',
        start: 'May 2026',
        end: 'August 2026',
        technologies: [],
        link: 'https://www.capitalone.com/',
        id: 'work4',
    },
    {
        company: 'UBC Launch Pad',
        title: 'Software Developer',
        start: 'September 2025',
        end: 'Present',
        technologies: ['TypeScript', 'AWS SDK', 'DynamoDB', 'ECS', 'Lambda Functions', 'React'],
        link: 'https://www.ubclaunchpad.com/',
        id: 'work0',
    },
    {
        company: 'Fairphrase',
        title: 'Software Engineer Intern',
        start: 'July 2025',
        end: 'March 2026',
        technologies: ['Kotlin', 'Docker', 'Nginx', 'Spring Boot', 'RestAPIs', 'TypeScript', 'React', 'MariaDB'],
        link: 'https://www.fairphrase.com/',
        id: 'work1',
    },
    {
        company: 'UBC Visual Cognition Lab',
        title: 'Coding Team Co-pilot Internship',
        start: 'April 2025',
        end: 'December 2025',
        technologies: ['React', 'Redux', 'MongoDB', 'AWS S3', 'Express.js', 'TypeScript', 'RAG', 'LangChain'],
        link: 'https://www.viscoglab.psych.ubc.ca/',
        id: 'work2',
    },
    {
        company: 'Insomniac Design, Inc.',
        title: 'Backend / Machine Learning Engineer Intern',
        start: 'June 2023',
        technologies: ['Python', 'FastAPI', 'Lbl2Vec', 'Unsupervised Sentiment Analysis', 'API Development'],
        end: 'Aug 2023',
        link: 'https://insomniacdesign.com/',
        id: 'work3',
    },
]

export const EDUCATION: Education[] = [
    {
        school: 'University of British Columbia',
        link: 'https://www.cs.ubc.ca/about/numbers',
        degree: "BSc Computer Science - Dean's List - Trek Excellence Scholar",
        start: '2024',
        end: '2027',
        gpa: '4.0/4.0',
        id: 'work1',
    },
]

export const BLOG_POSTS: BlogPost[] = [
    {
        title: 'Why you should read more textbooks.',
        description: 'An argument in favor of technical depth.',
        link: '/blog/why-you-should-read-more-textbooks',
        uid: 'blog-2',
        date: 'Sep 2025',
        readingTime: 4,
    },
    {
        title: 'UBC CPSC Course Review',
        description: 'A review of courses I\'ve taken in the UBC CPSC curriculum.',
        link: '/blog/ubc-cpsc-course-reviews',
        uid: 'blog-3',
        date: 'Feb 2026',
        readingTime: 5,
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
