export const SITE = {
  name: 'Rohit S.',
  role: 'Full-Stack Engineer',
  email: 'rohitsali96@gmail.com',
  phone: '+91 73876 46842',
  linkedin: 'https://www.linkedin.com/in/rohits2000/',
  x: 'https://x.com/rohitsio',
  instagram: 'https://www.instagram.com/rohit_ds2000',
  youtube: 'https://www.youtube.com/@rohitsalitrader',
};

export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export interface SkillGroup {
  title: string;
  icon: 'frontend' | 'backend' | 'database' | 'tools';
  skills: string[];
}

export const SKILL_GROUPS: SkillGroup[] = [
  {
    title: 'Frontend',
    icon: 'frontend',
    skills: ['Angular', 'Next.js & React', 'TypeScript', 'RxJS & Signals', 'Angular SSR', 'PrimeNG', 'Tailwind & shadcn/ui', 'HTML5 & SCSS'],
  },
  {
    title: 'Backend',
    icon: 'backend',
    skills: ['C#', 'ASP.NET Core', 'Node.js', 'CQRS & MediatR', 'RESTful APIs', 'WebSockets & Hosted Services', 'JWT & OAuth2', 'Clean Architecture'],
  },
  {
    title: 'Database',
    icon: 'database',
    skills: ['Azure SQL / SQL Server', 'PostgreSQL', 'Entity Framework Core', 'Prisma', 'Repository Pattern', 'Schema Design & Migrations'],
  },
  {
    title: 'Cloud & Integrations',
    icon: 'tools',
    skills: ['Azure App Service & Static Web Apps', 'Azure Key Vault & Blob Storage', 'GitHub Actions CI/CD', 'DigitalOcean VPS · PM2 · Nginx', 'Broker APIs (REST + WebSocket)', 'Razorpay & Webhooks', 'Google Gemini API', 'Telegram Bot API'],
  },
];

export interface ProjectHighlight {
  title: string;
  detail: string;
}

export interface Project {
  name: string;
  flag: string;
  tagline: string;
  /** Short facts shown under the tagline, e.g. role, timeline, scale. */
  meta: string[];
  description: string;
  /** Which illustrative preview panel to render for this project. */
  visual: 'dashboard' | 'terminal';
  /** Title shown in the preview window's title bar. */
  visualTitle: string;
  highlights: ProjectHighlight[];
  tech: string[];
  /** Omit for private / self-hosted projects. */
  liveUrl?: string;
  /** Shown when there is no `liveUrl`. */
  privateNote?: string;
}

export const PROJECTS: Project[] = [
  {
    name: 'TradeXJournal',
    flag: 'Featured · SaaS',
    tagline: 'AI-powered trading journal & algo-trading platform for Indian retail traders',
    meta: ['Solo founder & full-stack developer', 'May 2026 – present'],
    description:
      "TradeXJournal helps traders stop repeating the same mistakes. Every trade becomes structured data — strategy, emotion, rule adherence, screenshots — feeding 35+ performance reports and an AI coach that shows exactly where money is leaking. A separate algo module backtests intraday and swing strategies on real NSE data and executes them live through the Dhan broker API. I own every layer: product decisions, the integrations with a live broker, a payment gateway and an LLM, and the Azure infrastructure it runs on.",
    visual: 'dashboard',
    visualTitle: 'tradexjournal.co',
    highlights: [
      {
        title: 'Live broker integration',
        detail: 'Event-driven execution engine over Dhan WebSocket tick feeds; places OCO-style bracket orders with margin-aware position sizing.',
      },
      {
        title: 'Backtest = live',
        detail: 'Nine strategies share one code path between the backtester (up to 60 months of NSE data) and live execution. Diffed both in production and fixed the real divergences.',
      },
      {
        title: 'AI trading coach',
        detail: 'Gemini-backed post-trade summaries and personalised strength / weakness detection generated from raw trade history.',
      },
      {
        title: 'Full SaaS layer, in-house',
        detail: '14-day trials, Razorpay recurring billing with webhooks, affiliate program, Google sign-in, email confirmation, super-admin panel.',
      },
      {
        title: '35+ analytics reports',
        detail: 'Equity curve, calendar heatmap, win rate, profit factor, expectancy, R-multiples, rule adherence and emotional-state trends.',
      },
      {
        title: 'Solo-owned Azure infra',
        detail: 'GitHub Actions CI/CD, Key Vault secrets via managed identity, NAT Gateway static egress so the broker can whitelist a single IP.',
      },
    ],
    tech: [
      'Angular 21',
      'TypeScript',
      'PrimeNG',
      'Angular SSR',
      '.NET 10 / ASP.NET Core',
      'C#',
      'Clean Architecture',
      'CQRS / MediatR',
      'EF Core 10',
      'Azure SQL',
      'JWT / Google OAuth',
      'WebSockets',
      'Google Gemini',
      'Razorpay',
      'Azure App Service',
      'Azure Key Vault',
      'GitHub Actions',
    ],
    liveUrl: 'https://www.tradexjournal.co',
  },
  {
    name: 'Personalize Algo',
    flag: 'Live · Real capital',
    tagline: 'Automated intraday trading system for Indian equities (NSE)',
    meta: ['Built & operated solo', 'Aug 2026 – present', '~18k lines of TypeScript'],
    description:
      'A self-hosted algorithmic trading platform that detects inside-candle breakouts on 15-minute charts, places protected bracket orders through the Dhan broker API, and manages the full trade lifecycle — backtest, live execution, reconciled P&L — with real money. A Next.js dashboard configures and monitors strategy instances; a trading engine in the same Node process ticks every 15 seconds against the broker and enforces risk limits, daily loss caps, a global kill switch, and automatic square-off before the exchange cutoff.',
    visual: 'terminal',
    visualTitle: 'engine.log',
    highlights: [
      {
        title: 'One code path, backtest & live',
        detail: 'The same pure evaluateStrategy() runs in both, so there is no "backtest ≠ production" drift.',
      },
      {
        title: 'Crash-safe order placement',
        detail: 'Every order carries a client-generated correlation ID; a crash between broker accept and DB write is recovered by querying the broker.',
      },
      {
        title: 'Broker-held protection',
        detail: 'Dhan Super Orders keep entry, stop-loss and target at the broker, so positions stay covered even if the app goes offline.',
      },
      {
        title: 'Layered risk controls',
        detail: 'Account-wide daily max-loss, per-instance trade limits, a kill switch that survives restarts, forced square-off before the 15:10 cutoff.',
      },
      {
        title: 'Real exchange quirks handled',
        detail: 'NSE price-banded tick grids (₹0.01 → ₹5) snapped from the scrip master; IST-aware scheduling and a market-holiday calendar.',
      },
      {
        title: 'Reconciled P&L',
        detail: "Trades are costed with an estimate at exit, then overwritten with the broker's settled charges (brokerage, STT, GST, stamp duty) next morning.",
      },
      {
        title: 'Ops built in',
        detail: 'TOTP-based daily token refresh, AES-256-GCM credentials at rest, Telegram alerts via an idempotent outbox, PM2 watchdog, one-command deploy that ships git HEAD only.',
      },
    ],
    tech: [
      'Next.js 16',
      'React 19',
      'TypeScript',
      'Tailwind CSS v4',
      'shadcn/ui',
      'Recharts',
      'Node.js',
      'PostgreSQL',
      'Prisma',
      'Dhan API v2',
      'JWT / bcrypt',
      'AES-256-GCM',
      'TOTP',
      'Telegram Bot API',
      'DigitalOcean VPS',
      'PM2',
      'Nginx',
    ],
    privateNote: 'Single-tenant and private — runs live against a real broker account. Happy to walk through the code on a call.',
  },
];

export interface Tool {
  name: string;
  domain: string;
  tagline: string;
  url: string;
}

/** Smaller tools & micro-apps I've shipped and run. */
export const TOOLS: Tool[] = [
  {
    name: 'The QR Code Generator',
    domain: 'theqrcodegenerator.app',
    tagline: 'Create custom QR codes for links, text, Wi-Fi and more.',
    url: 'https://theqrcodegenerator.app',
  },
  {
    name: 'Is It Down Right Now',
    domain: 'isitdownrightnow.site',
    tagline: 'Check whether a website is down for everyone or just you.',
    url: 'https://isitdownrightnow.site',
  },
  {
    name: 'My Document Tools',
    domain: 'mydocumenttools.com',
    tagline: 'Convert, merge and edit PDFs and documents in the browser.',
    url: 'https://mydocumenttools.com',
  },
  {
    name: 'Home Loan Calculator',
    domain: 'thehomeloancalculator.com',
    tagline: 'Estimate EMIs, total interest and amortization on a home loan.',
    url: 'https://thehomeloancalculator.com',
  },
  {
    name: 'Compound Interest Calculator',
    domain: 'realcompoundinterestcalculator.com',
    tagline: 'Project how savings and investments grow with compounding.',
    url: 'https://realcompoundinterestcalculator.com',
  },
  {
    name: 'World Clock',
    domain: 'wclock.app',
    tagline: 'Compare the current time across time zones at a glance.',
    url: 'https://wclock.app',
  },
  {
    name: 'Domain Age Checker',
    domain: 'thedomainage.com',
    tagline: 'Look up how old any domain is and its registration history.',
    url: 'https://thedomainage.com',
  },
  {
    name: 'Screen Resolution',
    domain: 'whatismyscreenresolution.co',
    tagline: 'Instantly detect your screen resolution and viewport size.',
    url: 'https://whatismyscreenresolution.co',
  },
  {
    name: 'Fix My Speakers',
    domain: 'fixmyspeakerssound.com',
    tagline: 'Play a sound to eject water and clear dust from device speakers.',
    url: 'https://fixmyspeakerssound.com',
  },
];
