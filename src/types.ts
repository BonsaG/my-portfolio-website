export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
}

export interface Skill {
  name: string;
  level: number;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface FormData {
  name: string;
  email: string;
  message: string;
}