import timesheetImage from '../imgs/Screenshot 2025-07-07 at 18.10.44.png';

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
  github: string;
  demo?: string;
  phone?: boolean;
}

export const projects: Project[] = [
  {
    title: 'Office Attendance',
    summary:
      'A workplace app for planning who is in the office. People mark their days, see colleagues on the same ones, vote as a team, and admins keep an eye on the week.',
    body: 'The live product signs people in with Slack and stores attendance in Supabase. The public demo opens straight in as a super-admin on sample data, so the calendar, vote, and admin views can be browsed with nothing saved.',
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
    imageAlt: 'Office Attendance calendar, showing who is in across September and October',
    demo: 'https://office-attendance-demo.netlify.app/',
    github: 'https://github.com/reinkaoss/office-atendance-demo',
  },
  {
    title: 'Timesheet',
    summary:
      'A reports dashboard for brand-ambassador timesheets. Filter by person, campaign, and status, then read hours, pay, and bonuses in one place.',
    body: 'Built for Higherin as Timetrack. The reports view covers submissions, expenses, and an overview, with exports for the people who need the numbers outside the app.',
    features: [
      {
        title: 'Reports',
        text: 'Submissions, pending, approved, hours, pay, and bonuses on one dashboard.',
      },
      {
        title: 'Filters',
        text: 'Narrow by ambassador, campaign, period, and status.',
      },
      {
        title: 'Expenses',
        text: 'Timesheets, expenses, and overview sit in the same report.',
      },
      {
        title: 'Export',
        text: 'Download a PDF or CSV, and sync the underlying data.',
      },
    ],
    stack: ['React', 'Vite', 'Supabase'],
    image: timesheetImage,
    imageAlt: 'Timetrack reports dashboard with submission totals, hours, and pay',
    github: 'https://github.com/reinkaoss/timesheet-platform',
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
    image: '/projects/violin-reader.png',
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
];
