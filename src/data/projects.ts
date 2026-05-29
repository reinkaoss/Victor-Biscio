import { Code, Globe, Layout, Columns, BarChart, ShoppingCart } from 'lucide-react';

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  technologies: string[];
  github: string;
  demo?: string;
  complexity: string;
  icon: React.FC;
}

export const projectsData: Project[] = [
    {
    id: 1,
    title: "Timesheet Management System",
    description: "A modern, full-featured timesheet and brand ambassador management platform built with React and Vite.",
    image: "/imgs/Screenshot 2025-07-07 at 18.10.44.png",
    category: "web",
    technologies: ["React", "Vite", "Supabase"],
    github: "https://github.com/reinkaoss/timesheet-platform",
    complexity: "Complex",
    icon: ShoppingCart
  },
  {
    id: 2,
    title: "Student Hub",
    description: "A comprehensive web app for reading and note-taking, featuring powerful reading tools and intuitive note organization. Built for students, researchers, and avid readers.",
    image: "https://github.com/reinkaoss/React-Student-Hub-App/blob/main/src/notes-home.jpg?raw=true",
    category: "web",
    technologies: ["React", "Node.js", "axios", "Bootstrap", "Google Books API"],
    github: "https://github.com/reinkaoss/React-Student-Hub-App",
    demo: "https://react-student-hub.herokuapp.com/",
    complexity: "Complex",
    icon: Globe
  },
  {
    id: 3,
    title: "Finance Tracker",
    description: "A personal finance tracker for monitoring balance, savings, and a spending overview, with interactive charts powered by Chart.js.",
    image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "dashboard",
    technologies: ["React", "Vite", "Tailwind CSS", "Chart.js"],
    github: "https://github.com/reinkaoss/react-finance",
    complexity: "Medium",
    icon: BarChart
  },
  {
    id: 4,
    title: "Weather App",
    description: "A weather application showing current conditions and forecasts.",
    image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "web",
    technologies: ["JavaScript", "HTML", "CSS", "Weather API"],
    github: "https://github.com",
    demo: "https://example.com",
    complexity: "Simple",
    icon: Globe
  },
  {
    id: 5,
    title: "Portfolio Template",
    description: "A customizable portfolio template for developers.",
    image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "web",
    technologies: ["React", "TailwindCSS", "TypeScript"],
    github: "https://github.com",
    demo: "https://example.com",
    complexity: "Medium",
    icon: Layout
  },
  {
    id: 6,
    title: "Task Management App",
    description: "A Kanban-style task management application.",
    image: "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "app",
    technologies: ["React", "TypeScript", "Redux", "Firebase"],
    github: "https://github.com",
    complexity: "Complex",
    icon: Columns
  }
];