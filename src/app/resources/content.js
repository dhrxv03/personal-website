import { InlineCode } from "@/once-ui/components";

const person = {
    firstName: 'Dhruv',
    lastName:  'Shah',
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role:      'Senior Year CSE Student',
    avatar:    '/images/avatar.jpg',
    location:  'Asia/Kolkata',        // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
    languages: []  // optional: Leave the array empty if you don't want to display languages
}

const newsletter = {
    display: true,
    title: <>Subscribe to {person.firstName}'s Newsletter</>,
    description: <>I occasionally write about design, technology, and share thoughts on the intersection of creativity and engineering.</>
}

const social = [
    // Links are automatically displayed.
    // Import new icons in /once-ui/icons.ts
    {
        name: 'GitHub',
        icon: 'github',
        link: 'https://github.com/dhrxv03',
    },
    {
        name: 'LinkedIn',
        icon: 'linkedin',
        link: 'https://www.linkedin.com/in/dhruvshah03',
    },
    {
        name: 'X',
        icon: 'x',
        link: '',
    },
    {
        name: 'Email',
        icon: 'email',
        link: 'mailto:dhruv0310@icloud.com',
    },
    {
        name: 'CV',
        icon: 'download',
        link: 'mailto:dhruv0310@icloud.com',
    },
]

const home = {
    label: 'Home',
    title: `${person.name}'s Portfolio`,
    headline: <>Design engineer and builder</>,
    subline: <>I'm Dhruv Shah</>,
    description: 'Welcome to my portfolio website where I showcase my work and projects.' // Add this line
}

const about = {
    label: 'About',
    title: 'About me',
    description: `Meet ${person.name}, ${person.role} from ${person.location}`,
    tableOfContent: {
        display: true,
        subItems: true
    },
    avatar: {
        display: true
    },
    calendar: {
        display: false,
        link: 'https://cal.com'
    },
    intro: {
        display: true,
        title: 'Introduction',
        description: [
            <div style={{ textAlign: 'justify' }}>
                Hi, I’m Dhruv Shah, a CSE student based from Pune, India, currently studying 
                at Vishwakarma University. Over the past year, I’ve been starting my journey in Game Development and have also 
                begun learning Swift and SwiftUI. I have hands-on experience in building web applications with technologies like Next.js, 
                React.js, Node.js, and Hydrogen, specializing in creating seamless user experiences. Through various projects, 
                I’ve honed my skills in both frontend and backend development, 
                and I’m passionate about continuous learning and innovation.
            </div>
        ]
    },   
    work: {
        display: true, // set to false to hide this section
        title: 'Work Experience',
        experiences: [
            {
                company: 'OLKAP',
                timeframe: 'Oct 2024 - Present',
                role: 'Contract Developer',
                achievements: [
                    <>Developed an interactive and immersive landing page using Vite React, React Three Fiber, and Storefront API, incorporating 3D models and modern e-commerce solutions with Shopify's Hydrogen framework and Liquid templates.</>,
                    <>Designed six custom layouts in Figma with modern, high-end aesthetics while preserving the brand's identity and delivering an intuitive user experience.</>,
                    <>Optimized performance by using SWC for faster builds, CDN integration, and refactoring code, alongside enhancing SEO with keyword optimization, meta tags, and improved page speeds.</>,
                    <>Managed end-to-end deployment, including hosting, domain configuration, and DNS setup, while collaborating with the client to ensure the final product aligned with their vision.</>
                ],
                images: [ // optional: leave the array empty if you don't want to display images
                    
                ]
            },
            {
                company: 'CodixLabs',
                timeframe: 'Jun 2021 - Sep 2021',
                role: 'Software Developer Intern',
                achievements: [
                    <>Automated the process of sending emails to multiple contacts using Node.js.</>,
                    <>Designed and built an iOS Application for a client.</>,
                    <>Designed and built a superfast and responsive website for a client using Angular, TypeScript, and Node.js.</>,
                    <>Designed UI for the website using Figma.</>
                ],
                images: [ ]
            }
        ]
    },
    studies: {
        display: true, // set to false to hide this section
        title: 'Education',
        institutions: [
            {
                name: 'Vishwakarma University',
                description:[
                <>B.Tech in Computer Engineering</>,<br/>, 
                <>2022 - 2025</>,
            ]
            },
            {
                name: 'MIT Polytechnic',
                description:[
                <>Diploma in Computer Engineering</>,<br/>, 
                <>2019 - 2022</>,
            ]
            }
        ]
    },
    technical: {
        display: true, // set to false to hide this section
        title: 'Technical skills',
        skills: [
            {
                title: '',
                description: <>C++, C#, Swift, OOPS, JavaScript, SwiftUI, React, Angular, Unity, Python, PHP</>,
                images: []
            },
            
        ]
    }
}

const blog = {
    label: 'Blog',
    title: '',
    description: `Read what ${person.name} has been up to recently`
    // Create new blog posts by adding a new .mdx file to app/blog/posts
    // All posts will be listed on the /blog route
}

const work = {
    label: 'Portfolio',
    title: 'My projects',
    description: `Design and dev projects by ${person.name}`
    // Create new project pages by adding a new .mdx file to app/blog/posts
    // All projects will be listed on the /home and /work routes
}

const gallery = {
    label: 'Gallery',
    title: 'My photo gallery',
    description: `A photo collection by ${person.name}`,
    // Images from https://pexels.com
    images: [
        { 
            src: '/images/gallery/img-01.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-02.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-03.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-04.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-05.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-06.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-07.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-08.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-09.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-10.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-11.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-12.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-13.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-14.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
    ]
}

export { person, social, newsletter, home, about, blog, work, gallery };