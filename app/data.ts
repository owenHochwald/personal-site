type Project = {
  name: string
  description: string
  link: string
  video: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
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
    name: 'Shakespeare GPT',
    description:
      'Custom trained transformer to generate original Shakespearean-style text.',
    link: 'https://github.com/owenHochwald/shakespeare-gpt/',
    video:
    //   'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/newProfileItem/d898be8a-7037-4c71-af0c-8997239b050d.mp4?_a=DATAdtAAZAA0',
    '/gpt_demo.mp4',
    id: 'project1',
  },
  {
    name: 'AdmitifyAI',
    description:
      'A holistic approach to college admissions guidance, powered by AI-driven insights.',
    link: 'https://admitifyai.com/',
    video:
      'admitifyResumeDemo.mp4',
    id: 'project1',
  },
  {
    name: 'Aftrbrnr',
    description: 'Open-source, company-wide time-tracking end-to-end web app.',
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
    company: 'Insomniac Design, Inc.',
    title: 'Software / Machine Learning Engineer Intern',
    start: 'June 2023',
    end: 'Aug 2023',
    link: 'https://insomniacdesign.com/',
    id: 'work1',
  },
  {
    company: 'Stealth Startup',
    title: 'Lead Machine Learning Engineer',
    start: 'Jan 2025',
    end: 'Present',
    link: '/',
    id: 'work2',
  },
]

export const EDUCATION: Education[] = [
    {
      school: 'University of British Columbia',
      link: "https://www.cs.ubc.ca/about/numbers",
      degree: 'BSc Computer Science - Dean\'s List - Science Scholar',
      start: '2024',
      end: '2026',
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
