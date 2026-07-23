// Skill groups rendered in the Skills section.

export type SkillGroup = {
  title: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "AI & Automation",
    skills: [
      "OpenAI GPT-4o",
      "Anthropic Claude",
      "LangChain / LangGraph",
      "RAG Architectures",
      "AI Agents",
      "Whisper Fine-tuning",
      "OpenAI Realtime (Voice)",
      "ElevenLabs",
      "n8n / Zapier",
      "Prompt Engineering",
    ],
  },
  {
    title: "Backend",
    skills: ["Python", "FastAPI", "Node.js", "Django", "REST APIs", "WebSockets", "Celery", "Prisma"],
  },
  {
    title: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui", "Vite"],
  },
  {
    title: "Databases & Vector Stores",
    skills: ["PostgreSQL", "Supabase", "Pinecone", "MongoDB", "Snowflake", "MySQL"],
  },
  {
    title: "DevOps & Cloud",
    skills: ["Docker", "CI/CD", "AWS (Lambda, EC2, S3)", "Google Cloud", "Vercel", "GPU Infrastructure (Vast.ai)", "pm2"],
  },
  {
    title: "Integrations",
    skills: ["Slack API", "Gmail API", "WhatsApp", "Telegram Bots", "Stripe", "Airtable", "Google Maps Platform"],
  },
];
