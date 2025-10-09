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
        description: "A real-time article knowledge base recommendation system using a Go backend, RabbitMQ, and a RAG pipeline. Features a REST API ingestion point and embedded vector store in Pinecone for fast semantic search and recommendations.",
        link: 'https://github.com/owenHochwald/rec-mind',
        video: "/recmind_demo.mp4",
        id: 'project0'
    },
    {
        name: 'Shakespeare GPT',
        description:
            'Custom trained transformer based on the paper "Attention Is All You Need" to generate original Shakespearean-style text using PyTorch.',
        link: 'https://github.com/owenHochwald/shakespeare-gpt/',
        video:
            //   'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/newProfileItem/d898be8a-7037-4c71-af0c-8997239b050d.mp4?_a=DATAdtAAZAA0',
            '/gpt_demo.mp4',
        id: 'project1',
    },
    {
        name: 'AdmitifyAI',
        description:
            '5 person team collaberative full-stack project to build a tool taking a holistic approach to college admissions guidance, powered by AI-driven insights written..',
        link: 'https://admitifyai.com/',
        video:
            'admitifyResumeDemo.mp4',
        id: 'project1',
    },
    {
        name: 'Aftrbrnr',
        description: 'Open-source, company-wide time-tracking end-to-end web app built with NextJs and PostgreSQL.',
        link: 'https://www.aftrbrnr.com/',
        video:
            //   'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/XSfIvT7BUWbPRXhrbLed/ee6871c9-8400-49d2-8be9-e32675eabf7e.mp4?_a=DATAdtAAZAA0',
            '/aftrbrnr_demo.mp4',
        id: 'project2',
    },
    {
        name: 'Pawsture Pal',
        description: 'Chrome extension to promote better posture habits with personalized reminders and friendly cat animations.',
        link: 'https://chromewebstore.google.com/detail/Pawsture%20Pal/ghdnbollliflcjoeglpnlecdhcbcbopf',
        video:
            //   'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/XSfIvT7BUWbPRXhrbLed/ee6871c9-8400-49d2-8be9-e32675eabf7e.mp4?_a=DATAdtAAZAA0',
            '/extension_demo.mp4',
        id: 'project2',
    },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
    {
        company: 'Cambio Earth Systems',
        title: 'Software Developer I',
        start: 'Incoming January 2026',
        end: 'August 2026',
        technologies: ["TypeScript", "React", "Java", "Docker"],
        link:
            "https://www.cambioearth.com/",
        id: 'work-1',        
    },
    {
        company: 'UBC Launch Pad',
        title: 'Software Developer',
        start: 'September 2025',
        end: 'Present',
        technologies: ["AWS", "Flask", "DynamoDB", "ECS", "Lambda", "Python",  "TypeScript", "React"],
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
        technologies: ["React", "Redux", "MongoDB", "AWS S3", "Express.js", "TypeScript"],
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
        end: '8',
        gpa: '4.33/4.33',
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
