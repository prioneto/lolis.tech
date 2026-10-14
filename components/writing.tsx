import { ArrowUpRight, Calendar, PenLine } from "lucide-react";
import { OrganizationLogo } from "./organization-logo";

interface WritingItem {
  title: string;
  outlet: string;
  logo: string;
  date: string;
  summary: string;
  kind: "Research report" | "Article";
  link: string;
  linkLabel: string;
  secondaryLink?: string;
  secondaryLabel?: string;
  topics: string[];
}

const writing: WritingItem[] = [
  {
    title: "The AI Money Loop",
    outlet: "Independent research report",
    logo: "/logos/medium.png",
    date: "October 2026",
    summary:
      "How the 2024–2026 AI buildout is financed: chip vendors and clouds funding, guaranteeing and lending to their own customers, GPU-backed debt, and a chain of contracts that only two labs can pay. Researched and written by me, with AI research agents assisting, on an SEC XBRL dataset of fifteen companies, a 65-deal database and a 98-claim ledger that tests three popular accounts of the \"AI bubble\".",
    kind: "Research report",
    link: "https://claude.ai/code/artifact/9ea3bc19-c641-4236-9980-061792ac4a59",
    linkLabel: "Read the full report",
    secondaryLink: "https://github.com/prioneto/ai-bubble-anatomy",
    secondaryLabel: "Data & notes",
    topics: ["Finance", "AI infrastructure", "SEC EDGAR", "Credit"],
  },
  {
    title: "Cracking the Code: Infinite Boss Coin",
    outlet: "Medium",
    logo: "/logos/medium.png",
    date: "February 2024",
    summary:
      "A broken access-control vulnerability I found in the Online Soccer Manager game, how the exploit worked, and how it was disclosed.",
    kind: "Article",
    link: "https://medium.com/@prioneto/cracking-the-code-infinite-boss-coin-broken-access-control-exploit-93fd743e60d5",
    linkLabel: "Read on Medium",
    topics: ["Security", "Web", "Responsible disclosure"],
  },
];

export function Writing() {
  return (
    <section id="writing" className="border-b border-border bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mb-10">
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.24em] text-primary">Writing & research</p>
          <h2 className="text-balance text-3xl font-bold tracking-[-0.04em] sm:text-4xl">Things I&apos;ve looked into and written up.</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {writing.map((item) => (
            <article key={item.title} className="group flex flex-col rounded-2xl border border-border p-6">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <OrganizationLogo src={item.logo} alt={item.outlet} className="h-10 w-10 sm:h-10 sm:w-10" />
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary">{item.kind}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{item.outlet}</p>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                  <Calendar className="size-3" />
                  {item.date}
                </span>
              </div>

              <h3 className="mt-5 text-2xl font-bold tracking-[-0.04em] text-foreground">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.summary}</p>

              <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                {item.topics.map((topic) => <span key={topic}>{topic}</span>)}
              </div>

              <div className="mt-auto flex items-center gap-5 pt-6 text-sm font-semibold">
                <a href={item.link} target="_blank" rel="noopener noreferrer" className="group/link inline-flex items-center gap-1.5 text-foreground transition-colors hover:text-primary">
                  {item.linkLabel} <ArrowUpRight className="size-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                </a>
                {item.secondaryLink && (
                  <a href={item.secondaryLink} target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-colors hover:text-primary">{item.secondaryLabel}</a>
                )}
              </div>
            </article>
          ))}
        </div>

        <p className="mt-8 inline-flex items-center gap-2 text-sm text-muted-foreground">
          <PenLine className="size-4 text-primary" /> More on <a href="https://medium.com/@prioneto" target="_blank" rel="noopener noreferrer" className="font-semibold text-foreground transition-colors hover:text-primary">Medium</a>.
        </p>
      </div>
    </section>
  );
}
