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
    githubUrl: "https://github.com/BonsaG/ecommerce-platform",
  },
  {
    id: 2,
    title: "Birr-Guard- Mobile App",
    description:
      "A productivity application that helps users organize tasks, set priorities, and track progress with an intuitive interface.",
    image:
      "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    technologies: ["React", "TypeScript", "Firebase", "Tailwind CSS"],
    liveUrl: "https://example-Money-Guard.com",
    githubUrl: "https://github.com/BonsaG/Money-Guard.com",
  },

  {
    id: 3,
    title: "House Rental Management System Frontend",
    description:
      "A modern, feature-rich web application for managing house rentals, built with React, TypeScript, and Vite.",
      image: `${import.meta.env.BASE_URL}homerental.png`,
    technologies: ["React", "Zustand", "TypeScript", "Tailwind css", "React Hook Form with Zod validation"],
    liveUrl: "https://example-HRMS.com",
    githubUrl: "https://github.com/BonsaG/home-rental.git",
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
  github: "https://github.com/BonsaG",
  linkedin: "https://linkedin.com/in/bonsa-girma2025",
  twitter: "https://twitter.com/Bonsa_G2025",
  email: "bonsogirma@gmail.com",
};

export const aboutMe = {
  name: "Bonsa Girma",
  title: "Full Stack Developer",
  tagline: "Building modern web applications with passion and precision",
  bio: `I am a passionate Full Stack Developer with a strong foundation in modern web technologies. My journey in software development started with a curiosity about how things work on the web, which led me to dive deep into both frontend and backend development.

  I specialize in building responsive and user-friendly web applications using React, Node.js, and related technologies. My approach to development combines technical expertise with a keen eye for user experience, ensuring that the applications I build are not only functional but also intuitive and enjoyable to use.

`,
  image: `${import.meta.env.BASE_URL}me.png`,
  resumeUrl: `${import.meta.env.BASE_URL}Bonsa_Girma_Resume.pdf`,
};
