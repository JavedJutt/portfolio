// ─────────────────────────────────────────────────────────────
// Projects shown in the Projects section. Add / edit / reorder
// entries here — the grid renders whatever is in this array.
// ─────────────────────────────────────────────────────────────

export type ProjectLink = { label: string; href: string };

export type Project = {
  title: string;
  category: Category;
  /** One-line hook shown under the title */
  tagline: string;
  /** The business problem the client had */
  problem: string;
  /** What was built to solve it */
  solution: string;
  /** Measurable outcome — the thing clients care about */
  impact: string;
  /** Short metric badge, e.g. "hours → 40s" */
  metric?: string;
  /** Optional screenshot (16:9) shown below the title. Path under /public. */
  image?: string;
  stack: string[];
  links: ProjectLink[];
  featured?: boolean;
};

export const categories = [
  "All",
  "AI Agents & RAG",
  "Document AI",
  "Data & Analytics",
  "Speech & Voice AI",
  "SaaS Products",
] as const;

export type Category = Exclude<(typeof categories)[number], "All">;

export const projects: Project[] = [
  {
    title: "AI Executive Co-pilot (“AI CEO”)",
    category: "AI Agents & RAG",
    tagline: "A virtual chief-of-staff that never forgets a meeting, message, or email.",
    image: "/images/case-studies/ai-ceo.png",
    problem:
      "A scaling e-commerce company's CEO was drowning in information scattered across Slack, Gmail, meeting transcripts, and AI note-takers. Decisions slowed because nobody could find what had already been discussed or agreed.",
    solution:
      "A multi-layered Agentic RAG system that continuously ingests Slack, Gmail, Fellow & Limitless AI transcripts, and Airtable into a unified vector knowledge base, with n8n automation agents for Google Drive and email, scheduled watchdog agents that analyse meetings daily, and Slack-delivered executive briefs.",
    impact:
      "Executives retrieve any decision, commitment, or context in seconds instead of digging through four tools. Daily automated briefs keep leadership aligned without a single manual report.",
    metric: "4 data silos → 1 brain",
    stack: ["Python", "LangChain", "LangGraph", "Claude", "OpenAI", "Pinecone", "n8n", "FastAPI", "PostgreSQL", "Slack API", "Docker"],
    links: [
      { label: "Case study on Upwork", href: "https://www.upwork.com/freelancers/~01477a1c34b6991107?p=2032405844498563072" },
    ],
    featured: true,
  },
  {
    title: "Patient Journey — AI Assistant for Doctors",
    category: "AI Agents & RAG",
    tagline: "Real-time diagnostic support for Brazil's medical community.",
    image: "/images/case-studies/patient-journey.png",
    problem:
      "Doctors needed fast, reliable support analysing patient health patterns during consultations, without wading through records or generic search results.",
    solution:
      "An AI-powered assistant that analyses patient health patterns and provides diagnostic support and treatment recommendations in real time, built on RAG with fine-tuned models, Pinecone vector search, and LangChain-orchestrated workflows behind a custom React interface with voice and image input.",
    impact:
      "Launched to a platform serving over half a million Brazilian practitioners. Production healthcare AI, not a demo.",
    metric: "500k+ practitioners",
    stack: ["GPT-4", "LangChain", "Pinecone", "RAG", "React", "Python", "PostgreSQL", "Stripe", "Docker"],
    links: [
      { label: "Client: ttrials.com", href: "https://ttrials.com" },
      { label: "Case study on Upwork", href: "https://www.upwork.com/freelancers/~01477a1c34b6991107?p=2038590110703808512" },
    ],
    featured: true,
  },
  {
    title: "SyncFounder — Startup Workspace",
    category: "SaaS Products",
    tagline: "A startup-native workspace for early-stage founders, built end-to-end.",
    image: "/images/case-studies/syncfounder.png",
    problem:
      "Early-stage founders juggle Notion, Slack, and Trello to manage strategy, tasks, and team, losing momentum in the gaps between disconnected tools.",
    solution:
      "A complete SaaS product I built end-to-end: strategic roadmaps with structured startup stages, kanban task management, a centralized startup playbook, team collaboration, subscriptions, and SyncAI, a context-aware assistant that understands each startup's situation.",
    impact:
      "A live, revenue-ready product (free + $14/mo Pro tier) taken from concept through design, development, and deployment: the full lifecycle in one pair of hands.",
    metric: "Full product, end-to-end",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui", "AI Assistant", "Stripe", "Vercel"],
    links: [{ label: "Visit syncfounder.com", href: "https://syncfounder.com" }],
    featured: true,
  },
  {
    title: "Letter of Credit Analyzer",
    category: "Document AI",
    tagline: "Trade-finance document review, compressed from hours to seconds.",
    image: "/images/case-studies/lc-analyzer.png",
    problem:
      "Letter of Credit reviews were slow, manual, and error-prone: comparing instruction documents against customer drafts line by line, with costly consequences for missed discrepancies.",
    solution:
      "An AI analyzer that parses instruction documents and drafts, extracts key data, and intelligently compares them, handling format mismatches and partial variations, flagging discrepancies, missing fields, and unauthorized entries, and simplifying complex clauses.",
    impact:
      "Review time dropped from hours to roughly 40 seconds per document set, with human intervention on track to fall below 5%.",
    metric: "Hours → ~40 seconds",
    stack: ["Python", "GPT-4o", "Prompt Engineering", "PyPDF2", "Document Parsing"],
    links: [
      { label: "Case study on Upwork", href: "https://www.upwork.com/freelancers/~01477a1c34b6991107?p=2052017535220387840" },
    ],
    featured: true,
  },
  {
    title: "Certificate PDF Data Extractor",
    category: "Document AI",
    tagline: "Messy inspection certificates in, clean spreadsheets out.",
    image: "/images/case-studies/pdf-extractor.png",
    problem:
      "Export inspection certificates arrived as unstructured PDFs with wildly varying layouts, inconsistent units, and moisture-basis variations, turning data entry into hours of error-prone manual work per batch.",
    solution:
      "A Python pipeline combining PyPDF2 extraction with GPT-4o structured prompts, normalization logic, and retry mechanisms, built to survive batch processing and API rate limits in production.",
    impact:
      "Fully automated conversion into standardized CSV output; manual effort reduced from hours to minutes with analysis-ready data every time.",
    metric: "Hours → minutes",
    stack: ["Python", "GPT-4o", "PyPDF2", "CSV Pipelines", "Automation"],
    links: [
      { label: "Case study on Upwork", href: "https://www.upwork.com/freelancers/~01477a1c34b6991107?p=2052017665438982144" },
    ],
  },
  {
    title: "EpiWriting — Healthcare Data Analysis AI",
    category: "Data & Analytics",
    tagline: "Clinical-grade analytics over millions of fragmented records.",
    image: "/images/case-studies/epiwriting.png",
    problem:
      "A healthcare client needed insights from millions of fragmented Excel records. Traditional RAG retrieval failed them: missing data, inaccurate aggregations, and charts too unreliable for clinical analysis.",
    solution:
      "A code-first AI model using OpenAI Code Interpreter to run real Python-based filtering, cohort analysis, statistics, and visualizations with deterministic prompts. It's backed by a FastAPI/Prisma system with user profiles and disease-data administration.",
    impact:
      "100% data fidelity, accurate time-series analytics, automated insight generation, and the manual BI workload eliminated entirely.",
    metric: "100% data fidelity",
    stack: ["OpenAI Code Interpreter", "Python", "Chainlit", "Supabase", "FastAPI", "Prisma", "PostgreSQL"],
    links: [
      { label: "Case study on Upwork", href: "https://www.upwork.com/freelancers/~01477a1c34b6991107?p=2032411428965765120" },
    ],
  },
  {
    title: "AI Regulatory Reporting Engine",
    category: "Document AI",
    tagline: "Sustainability compliance mapping at machine speed.",
    image: "/images/case-studies/regulatory.png",
    problem:
      "The client relied on a slow, manual process to evaluate how Voluntary Sustainability Standards align with new regulations like CS3D and EUDR: weeks of analysis with a constant risk of inconsistency.",
    solution:
      "An AI regulatory mapping engine that parses standards and legislation documents, auto-identifies supporting evidence via RAG, classifies compliance alignment with LLMs, and generates Excel results plus professional summary reports.",
    impact:
      "Compliance analysis cut from weeks to minutes, with a repeatable, updatable process that keeps pace as regulations change.",
    metric: "Weeks → minutes",
    stack: ["Python", "FastAPI", "GPT-4o", "Pinecone", "RAG", "PostgreSQL", "React", "TypeScript"],
    links: [
      { label: "Case study on Upwork", href: "https://www.upwork.com/freelancers/~01477a1c34b6991107?p=2033473213347868672" },
    ],
  },
  {
    title: "Hebrew Speech-to-Text — Fine-Tuned Whisper",
    category: "Speech & Voice AI",
    tagline: "Custom ASR where off-the-shelf models fail.",
    image: "/images/case-studies/hebrew-stt.png",
    problem:
      "Bilingual Hebrew-English sermons defeated every standard transcription tool. Constant code-switching and cultural nuance produced unusable transcripts.",
    solution:
      "A transcription and summarization system built on a Whisper model fine-tuned on 10+ hours of custom audio, with a word-level timestamp API, LLM-based transcript refinement, Celery task queues, and GPU training/inference infrastructure.",
    impact:
      "5x lower Word Error Rate (WER) and 8x lower Character Error Rate (CER) versus baseline, turning sermons into accurate transcripts and concise English summaries.",
    metric: "5× lower WER",
    stack: ["OpenAI Whisper", "Fine-tuning", "Hugging Face", "Python", "Celery", "FastAPI", "Docker", "GPU Infrastructure"],
    links: [
      { label: "Case study on Upwork", href: "https://www.upwork.com/freelancers/~01477a1c34b6991107?p=2034205300801900544" },
    ],
  },
  {
    title: "Gotackle — AI Business Advisory Platform",
    category: "SaaS Products",
    tagline: "Connecting business owners with advisors, minus the admin overload.",
    image: "/images/case-studies/gotackle.png",
    problem:
      "Business owners and advisors wasted the hours that should have gone into strategy on administrative workload, slowing economic-development projects to a crawl.",
    solution:
      "An AI platform that connects owners and advisors and uses AI analytics to measure the impact of growth strategies and shape new ones, replacing scattered admin with a single collaborative workspace.",
    impact:
      "Owners and advisors analyse strategy impact with AI instead of spreadsheets, freeing their time for the strategic work that actually grows the business.",
    stack: ["Python", "OpenAI", "React", "AI Analytics", "Full-Stack Development"],
    links: [
      { label: "Case study on Upwork", href: "https://www.upwork.com/freelancers/~01477a1c34b6991107?p=2032413461217333248" },
    ],
  },
];
