export interface Role {
  period: string;
  title: string;
  place: string;
  points: string[];
}

export const roles: Role[] = [
  {
    period: '2024 — now',
    title: 'Digital Operations Manager',
    place: 'RMP Enterprise, London',
    points: [
      'Connect tools with Zapier, Make.com, and Google Apps Script.',
      'Automate repetitive work in Python with Selenium and Playwright.',
      'Build small front-end pieces in JavaScript and Nuxt.js, and ship them with Git.',
    ],
  },
  {
    period: '2021 — 2024',
    title: 'Digital Operations Executive',
    place: 'RMP Enterprise, London',
    points: [
      'Produced HTML for sites, job listings, events, and responsive email.',
      'Ran targeting and scheduling with Google Apps Script, and measured it in Analytics.',
      'Supported Apple hardware through MDM, in person and remotely.',
    ],
  },
  {
    period: '2025 — 2026',
    title: 'Full Stack Development',
    place: 'PUC Minas · postgraduate',
    points: [
      'React, React Native, and Flutter on the client.',
      'APIs across REST, GraphQL, gRPC, WebSockets, and webhooks.',
    ],
  },
];
