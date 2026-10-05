export interface SkillGroup {
  title: string;
  note: string;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: 'Front end',
    note: 'What I ship in the browser',
    items: ['HTML & CSS', 'JavaScript', 'React', 'Nuxt.js', 'Bootstrap', 'Handlebars', 'jQuery'],
  },
  {
    title: 'Automation',
    note: 'Day to day at RMP Enterprise',
    items: ['Python', 'Selenium', 'Playwright', 'Google Apps Script', 'Zapier', 'Make.com', 'Git'],
  },
  {
    title: 'Data & services',
    note: 'APIs, mail, and measurement',
    items: ['REST & webhooks', 'Node.js', 'SQL', 'Google Analytics', 'Google Ads', 'HTML email'],
  },
  {
    title: 'In study',
    note: 'Postgraduate, PUC Minas',
    items: ['React Native', 'Flutter', 'GraphQL', 'gRPC', 'WebSockets'],
  },
];

export const alsoSkills = ['Adobe Premiere', 'Photoshop', 'Apple hardware & MDM', 'Portuguese', 'English'];
