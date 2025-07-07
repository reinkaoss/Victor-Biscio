import { Code, FileCode, Globe, Server, Video, Workflow, Zap } from 'lucide-react';

export const skillsData = [
  {
    name: "Development Skills",
    skills: [
      { name: "HTML5", level: 85, icon: FileCode },
      { name: "CSS3", level: 85, icon: FileCode },
      { name: "JavaScript", level: 75, icon: Code },
      { name: "jQuery", level: 70, icon: Code },
      { name: "Bootstrap", level: 80, icon: FileCode },
      { name: "Node.js", level: 65, icon: Server },
      { name: "Handlebars", level: 60, icon: Code },
      { name: "ReactJS", level: 50, icon: Code },
      { name: "Nuxt.js", level: 40, icon: Code }
    ]
  },
  {
    name: "Automation & Integration",
    skills: [
      { name: "Python (Automation)", level: 70, icon: Code },
      { name: "Selenium/Playwright", level: 75, icon: Workflow },
      { name: "Zapier", level: 85, icon: Zap },
      { name: "Make.com", level: 80, icon: Workflow },
      { name: "Google App Scripts", level: 75, icon: Code },
      { name: "REST APIs", level: 60, icon: Globe },
      { name: "Git Version Control", level: 70, icon: Code }
    ]
  },
  {
    name: "Additional Skills",
    skills: [
      { name: "Adobe Premiere Pro", level: 80, icon: Video },
      { name: "Hardware Troubleshooting", level: 90, icon: Code }
    ]
  }
];