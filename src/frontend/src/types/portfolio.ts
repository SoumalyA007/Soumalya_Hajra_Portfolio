export interface Skill {
  name: string;
  level: number; // 0-100
  category: SkillCategory;
}

export type SkillCategory =
  | "Automation"
  | "Programming"
  | "API Testing"
  | "CI/CD"
  | "Tools"
  | "Testing";

export interface Project {
  id: string;
  title: string;
  description: string;
  highlights: string[];
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  isGithubRepo?: boolean;
  stars?: number;
  forks?: number;
  language?: string;
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  duration: string;
  location: string;
  achievements: string[];
  technologies: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content?: string;
  category: string;
  publishedAt: string;
  tags: string[];
  isPublished?: boolean;
  url?: string;
}

export interface ContactMessage {
  name: string;
  email: string;
  message: string;
}

export interface GithubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  topics: string[];
  updated_at: string;
}

export type NavSection =
  | "home"
  | "about"
  | "skills"
  | "projects"
  | "experience"
  | "blog"
  | "contact";

export interface NavLink {
  id: NavSection;
  label: string;
  href: string;
}
