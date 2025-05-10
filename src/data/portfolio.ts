import { Project, Skill } from "../types";

export const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce platform with product listings, user authentication, cart functionality, and payment processing.",
    image:
      "https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe API"],
    liveUrl: "https://example-ecommerce.com",
    githubUrl: "https://github.com/yourusername/ecommerce-platform",
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "A productivity application that helps users organize tasks, set priorities, and track progress with an intuitive interface.",
    image:
      "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    technologies: ["React", "TypeScript", "Firebase", "Tailwind CSS"],
    liveUrl: "https://example-taskmanager.com",
    githubUrl: "https://github.com/yourusername/task-manager",
  },
  {
    id: 3,
    title: "Real-Time Chat Application",
    description:
      "A real-time messaging platform supporting direct messaging, group chats, and media sharing with end-to-end encryption.",
    image:
      "https://images.pexels.com/photos/7350195/pexels-photo-7350195.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    technologies: ["React", "Socket.io", "Express", "MongoDB", "JWT"],
    liveUrl: "https://example-chat.com",
    githubUrl: "https://github.com/yourusername/real-time-chat",
  },
  {
    id: 4,
    title: "Weather Dashboard",
    description:
      "An interactive weather dashboard that displays current conditions and forecasts for multiple locations with data visualization.",
    image:
      "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    technologies: ["React", "Chart.js", "OpenWeather API", "Tailwind CSS"],
    liveUrl: "https://example-weather.com",
    githubUrl: "https://github.com/yourusername/weather-dashboard",
  },
  {
    id: 5,
    title: "Content Management System",
    description:
      "A custom CMS built from scratch with user roles, content editing, and publishing workflows for blog and marketing websites.",
    image:
      "https://images.pexels.com/photos/35550/ipad-tablet-technology-touch.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    technologies: ["React", "Node.js", "PostgreSQL", "GraphQL", "AWS S3"],
    liveUrl: "https://example-cms.com",
    githubUrl: "https://github.com/yourusername/cms-platform",
  },
];

export const skills: Record<string, Skill[]> = {
  frontend: [
    { name: "React", level: 95 },
    { name: "JavaScript", level: 90 },
    { name: "TypeScript", level: 85 },
    { name: "HTML/CSS", level: 95 },
    { name: "Tailwind CSS", level: 90 },
    { name: "Redux", level: 80 },
  ],
  backend: [
    { name: "Node.js", level: 90 },
    { name: "Express", level: 85 },
    { name: "MongoDB", level: 80 },
    { name: "PostgreSQL", level: 75 },
    { name: "GraphQL", level: 70 },
    { name: "REST API", level: 90 },
  ],
  tools: [
    { name: "Git", level: 90 },
    { name: "Docker", level: 75 },
    { name: "Postman", level: 85 },
    { name: "Vite", level: 80 },
    { name: "Webpack", level: 75 },
    { name: "Jest", level: 80 },
  ],
};

export const socialLinks = {
  github: "https://github.com/bonsagirma",
  linkedin: "https://linkedin.com/in/bonsagirma",
  twitter: "https://twitter.com/bonsagirma",
  email: "bonsa.girma@gmail.com",
};

export const aboutMe = {
  name: "Bonsa Girma",
  title: "Full Stack Developer",
  tagline: "Building modern web applications with passion and precision",
  bio: `I am a passionate Full Stack Developer with a strong foundation in modern web technologies. My journey in software development started with a curiosity about how things work on the web, which led me to dive deep into both frontend and backend development.

  I specialize in building responsive and user-friendly web applications using React, Node.js, and related technologies. My approach to development combines technical expertise with a keen eye for user experience, ensuring that the applications I build are not only functional but also intuitive and enjoyable to use.

  Currently, I'm focused on expanding my knowledge in cloud technologies and microservices architecture, while continuously improving my skills in React and Node.js ecosystem.`,
  image: "/me.png",
  imageAlt: "Bonsa Girma",
  resumeUrl: "/Bonsa_Girma_Resume.pdf",
};
