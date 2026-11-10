export interface Role {
  period: string;
  title: string;
  place: string;
  points: string[];
}

export const roles: Role[] = [
  {
    period: '2024 — present',
    title: 'Digital Operations Manager',
    place: 'Higherin (formerly RMP Enterprise), London',
    points: [
      'Connected CRM, marketing, and operations tools with Zapier, Make, n8n, and Google Apps Script.',
      'Automated manual work in Python with Selenium, Playwright, and API workflows, shipped with Git.',
      'Used LLMs, REST, webhooks, and MCP to keep data in sync and speed up internal delivery.',
      'Built internal web tools in JavaScript, React, Nuxt.js, Tailwind CSS, Shadcn/UI, and Supabase.',
      'Turned stakeholder requirements into workflows, and wrote the specs that keep them maintainable.',
    ],
  },
  {
    period: '2021 — 2024',
    title: 'Digital Operations Executive',
    place: 'RMP Enterprise, London',
    points: [
      'Produced web content, email campaigns, and marketing assets in HTML, CSS, JavaScript, and Handlebars.',
      'Ran email automation and segmentation in Dotdigital and Google Apps Script, plus PPC, push notifications, analytics, and SQL reporting.',
      'Supported Apple devices through MDM.',
    ],
  },
  {
    period: '2021',
    title: 'Project Technician',
    place: 'RFIDentikit, Letchworth Garden City',
    points: [
      'Fixed front-end issues in HTML, CSS, and Bootstrap, and built components from design specs.',
      'Installed and configured onsite network equipment, and reported progress to the project supervisor.',
    ],
  },
  {
    period: '2020 — 2021',
    title: 'Social Media Marketing Intern',
    place: 'London Media Lounge, London',
    points: [
      'Managed the company Twitter account and made campaign ideas and thumbnails.',
      'Helped with performance reporting and suggested improvements to customer and internal processes.',
    ],
  },
  {
    period: '2020 — 2021',
    title: 'Hardware Technician and SEO Apprentice',
    place: 'Cor Solutions, Hitchin',
    points: [
      'Maintained PC, Mac, and Linux machines, including remote support.',
      'Built pages in HTML and CSS, worked on SEO, and set up Facebook and Google ads.',
    ],
  },
  {
    period: '2018 — 2020',
    title: 'Duty Manager',
    place: 'Needham House Hotel, Hitchin',
    points: [
      'Handled guest issues, bookings, rates, and refunds.',
    ],
  },
  {
    period: '2013 — 2018',
    title: 'Portuguese and Literature Teacher',
    place: 'São Paulo State Government, São Paulo',
    points: [
      'Taught literature and Portuguese grammar, and coordinated group projects.',
    ],
  },
  {
    period: '2016 — 2018',
    title: 'Military Course Teacher',
    place: 'AFIC, São Paulo',
    points: [],
  },
  {
    period: '2011 — 2013',
    title: 'Warehouse Logistics Manager',
    place: 'Concept Blindagens, Mauá',
    points: [
      'Replaced manual inventory with an automated database.',
    ],
  },
  {
    period: '2008 — 2009',
    title: 'Computer Hardware Technician',
    place: 'Clínica de Olhos Nações, Santo André',
    points: [
      'Handled updates, hardware, network access, and Windows Server across two sites.',
    ],
  },
];
