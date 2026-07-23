// The full-lifecycle delivery process shown in the Services section.

export type Service = {
  step: string;
  title: string;
  description: string;
  deliverables: string[];
};

export const services: Service[] = [
  {
    step: "01",
    title: "Planning & Architecture",
    description:
      "We start with your business problem, not a tech wishlist. I map requirements, design the system, and pick the stack that fits your budget and timeline — including whether AI actually belongs in the solution.",
    deliverables: ["Requirements & scope document", "System architecture", "Tech stack selection", "Data & AI strategy"],
  },
  {
    step: "02",
    title: "Development",
    description:
      "Frontend, backend, AI agents, automation pipelines — built as one coherent system by one engineer who owns the whole picture. You get working software in review-able increments, not a big-bang reveal.",
    deliverables: ["Frontend & backend implementation", "AI agents & RAG pipelines", "Third-party integrations", "Automated testing"],
  },
  {
    step: "03",
    title: "DevOps & Infrastructure",
    description:
      "Code that only runs on a laptop is not a deliverable. I containerize, set up CI/CD, provision cloud infrastructure, and wire up monitoring so the system is observable and repeatable from day one.",
    deliverables: ["Docker & CI/CD pipelines", "Cloud setup (AWS / GCP / Vercel)", "Monitoring & alerting", "Security & secrets management"],
  },
  {
    step: "04",
    title: "Deployment & Maintenance",
    description:
      "I take the system live, harden it under real traffic, and stay available for scaling and support. You end the project with a running product and the documentation to own it — not a codebase you need someone else to finish.",
    deliverables: ["Production go-live", "Performance & scaling", "Documentation & handover", "Ongoing support"],
  },
];
