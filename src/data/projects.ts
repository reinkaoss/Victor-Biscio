export interface ProjectFeature {
  title: string;
  text: string;
}

export interface Project {
  title: string;
  summary: string;
  body: string;
  features: ProjectFeature[];
  stack: string[];
  image: string;
  imageAlt: string;
  demo?: string;
  github?: string;
  phone?: boolean;
}

export const projects: Project[] = [
  {
    title: 'Office Attendance',
    summary:
      'A workplace app for planning who is in the office. People mark their days, see colleagues on the same ones, vote as a team, and admins keep an eye on the week.',
    body: 'The production app signs people in with Slack and stores attendance in Supabase. The public demo drops you into a super-admin session on fictional sample data, so the calendar, vote, and admin views can be browsed with nothing saved.',
    features: [
      {
        title: 'Week calendar',
        text: 'Plan office days and see who else will be in.',
      },
      {
        title: 'Slack sign-in',
        text: 'The production app authenticates with Slack. The demo skips login and drops you into a session.',
      },
      {
        title: 'Team vote',
        text: 'A separate tab for voting, with admin and super-admin controls.',
      },
      {
        title: 'Admin dashboard',
        text: 'Oversight for people who run the office, not just the people booking a desk.',
      },
    ],
    stack: ['React', 'Vite', 'Supabase', 'Slack'],
    image: '/projects/office-attendance.png',
    imageAlt: 'Office Attendance month calendar with colleagues marked in on each day',
    demo: 'https://office-attendance-demo.netlify.app/',
    github: 'https://github.com/reinkaoss/office-atendance-demo',
  },
  {
    title: 'Pixel Animator',
    summary:
      'A browser-based editor for drawing and animating pixel sprites. Paint on a zoomable grid, stack layers, step through frames, and export PNGs — with automatic saves in local storage.',
    body: 'Dark-theme UI built for long sessions, with purple-medium accents and shared design tokens across panels. Select, mirror, bones, onion skin, and ComfyUI generation are stubbed in the interface; pen, fill, eraser, layers, timeline playback, and import/export are live today.',
    features: [
      {
        title: 'Draw',
        text: 'Pen, fill, and eraser on a grid from 100% to 3200% zoom, with a checkerboard for transparency.',
      },
      {
        title: 'Layers & colour',
        text: 'Per-layer visibility and opacity, plus a 16-colour starter palette and hex picker.',
      },
      {
        title: 'Animate',
        text: 'Frame timeline with thumbnails, add/duplicate/delete, playback, and FPS control.',
      },
      {
        title: 'Import & organise',
        text: 'Import from file or URL, export PNG, and group sprites as characters or objects in the sidebar.',
      },
    ],
    stack: ['Next.js', 'React', 'TypeScript', 'Konva', 'Tailwind CSS', 'Zustand'],
    image: '/projects/pixel-craft.png',
    imageAlt: 'Pixel Animator editor with a wizard sprite on the canvas, frame timeline, layers, and colour panel',
    demo: 'https://pixel-smithy.netlify.app/',
    github: 'https://github.com/reinkaoss/pixel-craft',
  },
  {
    title: 'Violin Reader',
    summary:
      'A practice page for reading violin notes. The staff shows a note, and you answer with the string and finger, or play it into the microphone.',
    body: 'Practice, live listening, song quizzes, and stats sit in one page. Filter the note pool by string, finger, and difficulty, then listen to a song before quizzing the fingerings.',
    features: [
      {
        title: 'Practice',
        text: 'Pick the string and finger for the note on the staff.',
      },
      {
        title: 'Live',
        text: 'The microphone checks the pitch you actually play.',
      },
      {
        title: 'Songs',
        text: 'Listen first, then quiz. Fingerings can stay visible.',
      },
      {
        title: 'Stats',
        text: 'Accuracy by string and finger, plus the notes that keep slipping.',
      },
    ],
    stack: ['HTML', 'CSS', 'JavaScript'],
    image: '/projects/violin-reader-practice.png',
    imageAlt: 'Violin Reader practice screen with a staff, string buttons, and finger choices',
    demo: 'https://musicsheets.netlify.app/',
    github: 'https://github.com/reinkaoss/music_sheet',
    phone: true,
  },
  {
    title: 'Finance Tracker',
    summary:
      'A monthly budget, split into the parts of a life. Each category shows what was planned, what is already paid, and what is left.',
    body: 'Overview, utilities, lifestyle, assets, retirement, and history each hold their own bills. Add an entry against a category, then mark it paid as the month goes.',
    features: [
      {
        title: 'Categories',
        text: 'Transport, gym, groceries, and the rest, each with its own budget.',
      },
      {
        title: 'Entries',
        text: 'Add an amount and a note against a category.',
      },
      {
        title: 'Paid',
        text: 'Mark a bill paid and see what is still left.',
      },
      {
        title: 'Month',
        text: 'Move between overview, lifestyle, assets, retirement, and history.',
      },
    ],
    stack: ['React', 'Vite'],
    image: '/projects/finance.jpg',
    imageAlt: 'Monthly Finances lifestyle tab, with transport, gym, and groceries budgets',
    github: 'https://github.com/reinkaoss/Finance-Tracker',
  },
  {
    title: 'Ambassador Console',
    summary:
      'An operations console for a campus brand-ambassador programme. Review timesheets and expenses, keep campaign material, and see who is active.',
    body: 'There is no backend. An Admin / Ambassador switch stands in for sign-in, and every name and figure is invented. A refresh puts the demo back to the start.',
    features: [
      {
        title: 'Timesheets',
        text: 'Open a submission, approve it, or reject it with a reason.',
      },
      {
        title: 'Expenses',
        text: 'A £0 row cannot be approved. Paid rows export to CSV.',
      },
      {
        title: 'Campaigns',
        text: 'Browse resources and hide a social post from ambassadors.',
      },
      {
        title: 'People',
        text: 'See who is online, who has not activated, and reply in the inbox.',
      },
    ],
    stack: ['React', 'Vite', 'Tailwind CSS', 'TanStack Query'],
    image: '/projects/ambassador-console.png',
    imageAlt: 'Ambassador Console dashboard with timesheets, expenses, and hours by campaign',
    demo: 'https://community-management-demo.netlify.app/',
    github: 'https://github.com/reinkaoss/hub_demo',
  },
  {
    title: 'Job Listings Scraper',
    summary:
      'Turns job ads into structured listings you can review, edit, and export.',
    body: 'Paste public job URLs, or upload a description file. Each posting comes back as a card with the title, company, salary, and description.',
    features: [
      {
        title: 'URL scraper',
        text: 'Paste comma-separated job links and fetch them together.',
      },
      {
        title: 'File extractor',
        text: 'Upload a .docx, .pdf, .txt, or markdown file.',
      },
      {
        title: 'Review',
        text: 'Correct any field, including a bulk edit on a selection.',
      },
      {
        title: 'Export',
        text: 'Download JSON, or generate a self-contained job-page URL.',
      },
    ],
    stack: ['React', 'Python', 'Flask'],
    image: '/projects/job-scraper.png',
    imageAlt: 'Job Listings Scraper with a field for comma-separated job URLs',
    demo: 'https://python-job-scraper.netlify.app/',
    github: 'https://github.com/reinkaoss/Python-job-scraper',
  },
  {
    title: 'Pokébot',
    summary:
      'An offline Pokédex you can talk to. Ask about a species, a move, or a type, and the answer shows up next to an ASCII portrait.',
    body: 'The data ships with the app, so it runs with no internet connection. The public demo answers from the Pokédex itself. A local model is optional, and only makes the replies more conversational.',
    features: [
      {
        title: 'Chat',
        text: 'Ask what Gengar is weak to, or whether Snorlax can learn Surf. Follow-ups keep the last Pokémon in mind.',
      },
      {
        title: 'Scope',
        text: 'An ASCII portrait and stat card of the Pokémon you just asked about, including alternate forms.',
      },
      {
        title: 'Evolution',
        text: 'Play a family as a scene, from the egg through each stage, and pick when there is more than one path.',
      },
      {
        title: 'Arena',
        text: 'Run a 1v1 as an ASCII battle, with HP bars, a log, and win odds.',
      },
    ],
    stack: ['Python', 'SQLite', 'JavaScript'],
    image: '/projects/poke-ascii.png',
    imageAlt: 'Pokébot showing an ASCII portrait of Eevee beside a Pokédex answer',
    demo: 'https://poke-ascii.onrender.com/',
    github: 'https://github.com/reinkaoss/poke-ascii',
  },
];
