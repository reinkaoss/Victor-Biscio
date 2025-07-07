import { Code, Globe, Layout, Columns, BarChart, ShoppingCart } from 'lucide-react';

export const projectsData = [
    {
    id: 1,
    title: "Timesheet Management System",
    description: "A modern, full-featured timesheet and brand ambassador management platform built with React and Vite.",
    image: "../src/images/timesheet.png",
    category: "web",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    github: "https://github.com/reinkaoss/timesheet-platform",
    complexity: "Complex",
    icon: ShoppingCart
  },
  {
    id: 2,
    title: "Student Hub",
    description: "A comprehensive web app for reading and note-taking, featuring powerful reading tools and intuitive note organization. Built for students, researchers, and avid readers.",
    image: "https://github.com/reinkaoss/React-Student-Hub-App/blob/main/src/notes-home.jpg?raw=true",
    category: "Web App",
    technologies: ["React", "Node.js", "axios", "Bootstrap", "Google Books API"],
    github: "https://github.com/reinkaoss/React-Student-Hub-App",
    demo: "https://react-student-hub.herokuapp.com/",
    complexity: "Complex",
    icon: Globe
  },
  {
    id: 3,
    title: "Firefox Job Uploader Extension",
    description: "A lightweight Firefox browser extension that automates job posting by extracting job preview data and auto-filling posting forms. Designed for efficiency and minimal user interaction.",
    image: "https://camo.githubusercontent.com/ef2359d832cf601a101836d794eb3d48d0533b58c1aa5bee6747440667161c5b/68747470733a2f2f643364327072756569746f7467752e636c6f756466726f6e742e6e65742f53637265656e73686f74253230323032352d30352d3132253230617425323030392e30302e33302e706e67",
    category: "Browser Extension",
    technologies: [ "JavaScript"],
    github: "https://github.com/reinkaoss/firefox-job-uploader",
    complexity: "Simple",
    icon: BarChart
  },
  {
    id: 4,
    title: "Movie Search App",
    description: "Search for movies by title View movie details, including plot, rating, and poster Add movies to your watch list with this simple React Native app",
    image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "web",
    technologies: ["JavaScript", "React Native", "CSS", "OMDb API"],
    github: "https://github.com/reinkaoss/watch_list_react_native",
    complexity: "Simple",
    icon: Globe
  },
  {
    id: 5,
    title: "bookADesk — Desk Booking System via Slack",
    description: "A lightweight desk booking system powered by Google Apps Script, with seamless Slack integration for daily/weekly notifications and direct booking via Slack.",
    image: "https://d3d2prueitotgu.cloudfront.net/Screenshot%202025-05-12%20at%2009.47.59.png",
    category: "web",
    technologies: ["Google Scripts", "HTML", "CSS", "JavaScript", "Slack API", "Zapier"],
    github: "https://github.com/reinkaoss/bookADesk",
    demo: "https://script.google.com/a/macros/rmpenterprise.co.uk/s/AKfycby0OB46k9ENsPLVeNc0JXGu0A4G_GErM5OJm3uvXJcsVQ8CtgjRLPwahESbjJk0ng/exec",
    complexity: "Medium",
    icon: Layout
  },
  {
    id: 6,
    title: "Job Scraper Backend",
    description: "A serverless-ready Python backend for scraping job postings from arbitrary URLs, extracting and structuring job metadata using OpenAI, and persisting results in JSON. This API supports batch processing to avoid timeouts in serverless environments (e.g., Vercel).",
    image: "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "app",
    technologies: ["Python3", "Flask", "BeautifulSoup", "Vercel", "PhantomJSCloud & OpenAI API"],
    github: "https://github.com/reinkaoss/job_listings_scraper",
    complexity: "Complex",
    icon: Columns
  },
];