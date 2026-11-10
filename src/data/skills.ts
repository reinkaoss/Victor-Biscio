export interface Skill {
  name: string;
  icon?: string;
  mark?: string;
}

export interface SkillGroup {
  title: string;
  note: string;
  items: Skill[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: 'Front end',
    note: 'What I ship in the browser',
    items: [
      { name: 'HTML5', icon: 'html5' },
      { name: 'CSS', icon: 'css' },
      { name: 'JavaScript', icon: 'javascript' },
      { name: 'React', icon: 'react' },
      { name: 'Nuxt.js', icon: 'nuxt' },
      { name: 'Astro', icon: 'astro' },
      { name: 'Tailwind CSS', icon: 'tailwindcss' },
      { name: 'shadcn/ui', icon: 'shadcnui' },
      { name: 'Bootstrap', icon: 'bootstrap' },
      { name: 'Handlebars', icon: 'handlebars' },
      { name: 'jQuery', icon: 'jquery' },
    ],
  },
  {
    title: 'Automation',
    note: 'Day to day at Higherin',
    items: [
      { name: 'Python', icon: 'python' },
      { name: 'Selenium', icon: 'selenium' },
      { name: 'Playwright', icon: 'playwright' },
      { name: 'Google Apps Script', icon: 'googleappsscript' },
      { name: 'Zapier', icon: 'zapier' },
      { name: 'Make', icon: 'make' },
      { name: 'n8n', icon: 'n8n' },
      { name: 'Git', icon: 'git' },
    ],
  },
  {
    title: 'APIs & AI',
    note: 'Integrations, models, and measurement',
    items: [
      { name: 'REST APIs', mark: 'API' },
      { name: 'Webhooks', mark: 'WH' },
      { name: 'MCP', icon: 'mcp' },
      { name: 'LLMs', mark: 'LLM' },
      { name: 'RAG', mark: 'RAG' },
      { name: 'Node.js', icon: 'nodedotjs' },
      { name: 'MySQL', icon: 'mysql' },
      { name: 'Supabase', icon: 'supabase' },
      { name: 'Google Analytics', icon: 'googleanalytics' },
      { name: 'Google Ads', icon: 'googleads' },
      { name: 'Dotdigital', mark: 'Dd' },
      { name: 'HTML email', mark: 'EM' },
    ],
  },
  {
    title: 'In study',
    note: 'Postgraduate, PUC Minas',
    items: [
      { name: 'React Native', icon: 'react' },
      { name: 'Flutter', icon: 'flutter' },
      { name: 'GraphQL', icon: 'graphql' },
      { name: 'gRPC', icon: 'grpc' },
      { name: 'WebSockets', mark: 'WS' },
    ],
  },
];

export const alsoSkills: Skill[] = [
  { name: 'Adobe Premiere', icon: 'premiere' },
  { name: 'Photoshop', icon: 'photoshop' },
  { name: 'Apple hardware & MDM', icon: 'apple' },
];

export const languages = ['Portuguese', 'English'];
