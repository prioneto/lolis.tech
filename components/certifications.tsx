import { Calendar, ChevronDown, ExternalLink, GraduationCap, Trophy } from "lucide-react";
import { OrganizationLogo } from "./organization-logo";

interface PortfolioItem {
  title: string;
  issuer: string;
  logo: string;
  date: string;
  description: string;
  status: "Ongoing" | "Completed" | "Published" | "Awarded";
  grade?: string;
  link?: string;
  linkLabel?: string;
  logoTone?: "light" | "dark";
}

const credentials: PortfolioItem[] = [
  {
    title: "Cyber Security (CSE) – SPECTRO",
    issuer: "EIT Digital Master School",
    logo: "/logos/eit-digital.png",
    date: "2025 – 2026",
    description: "Double-degree programme in cyber security, with the University of Twente as the entry university and the University of Trento as the exit university.",
    status: "Completed",
    link: "https://www.utwente.nl/en/education/master/programmes/computer-science/specialisation/cyber-security/",
    linkLabel: "Visit programme",
  },
  {
    title: "MSc Computer Science – Cyber Security",
    issuer: "University of Twente",
    logo: "/logos/utwente.png",
    date: "2025 – 2027",
    description: "Master's programme focused on cyber security, secure systems, and software engineering.",
    status: "Ongoing",
    link: "https://www.utwente.nl/en/education/master/programmes/computer-science/",
    linkLabel: "Visit programme",
  },
  {
    title: "BSc Technical Computer Science",
    issuer: "University of Twente",
    logo: "/logos/utwente.png",
    date: "2021 – 2025",
    description: "Completed a broad computer science and software engineering curriculum spanning systems, algorithms, and product development.",
    status: "Completed",
    grade: "7.4 / 10",
    link: "https://www.utwente.nl/en/education/bachelor/programmes/technical-computer-science/index.html",
    linkLabel: "Visit programme",
  },
  {
    title: "GitHub Foundations Certification",
    issuer: "GitHub",
    logo: "/logos/github.png",
    date: "2024",
    description: "Validated foundational knowledge of Git, GitHub, repositories, collaboration, and modern development workflows.",
    status: "Completed",
    link: "https://www.credly.com/badges/902c0a93-ead6-4cf5-9fa3-a98cbc22941a/public_url",
    linkLabel: "View credential",
  },
];

const selectedAchievements: PortfolioItem[] = [
  {
    title: "Automating Cyber-Leak Profiling with LLMs",
    issuer: "University of Twente",
    logo: "/logos/utwente.png",
    date: "2025",
    description: "Published research on automating user and infrastructure profiling from cyber leaks with large language models.",
    status: "Published",
    link: "https://purl.utwente.nl/essays/107532",
    linkLabel: "Read publication",
  },
  {
    title: "OSM Broken Access Control Exploit",
    issuer: "Medium",
    logo: "/logos/medium.png",
    date: "2024",
    description: "Documented a broken access-control vulnerability discovered in the Online Soccer Manager game.",
    status: "Published",
    link: "https://medium.com/@prioneto/cracking-the-code-infinite-boss-coin-broken-access-control-exploit-93fd743e60d5",
    linkLabel: "Read article",
  },
];

const moreAchievements: PortfolioItem[] = [
  {
    title: "Smart Bike Design Project",
    issuer: "University of Twente",
    logo: "/logos/utwente.png",
    date: "2025",
    description: "Published a multidisciplinary smart-bike design created for a university research group.",
    status: "Published",
    link: "https://bachelorshowcase-eemcs.apps.utwente.nl/view/S4Jq7bWG/",
    linkLabel: "View project",
  },
  {
    title: "Best Note-Bridge Project",
    issuer: "University of Twente",
    logo: "/logos/utwente.png",
    date: "2023",
    description: "Received the award for the best Note-Bridge student project.",
    status: "Awarded",
    link: "https://www.utwente.nl/en/",
    linkLabel: "Visit website",
  },
  {
    title: "2nd Place in GDWC",
    issuer: "Game Development World Championship",
    logo: "/logos/gdwc.png",
    date: "2020",
    description: "Low Poly Racing placed second in the Game Development World Championship.",
    status: "Awarded",
    grade: "2nd place",
    link: "https://thegdwc.com/",
    linkLabel: "Visit website",
    logoTone: "dark",
  },
];

function PortfolioRow({ item, compact = false }: { item: PortfolioItem; compact?: boolean }) {
  return (
    <article className={`grid grid-cols-[auto_1fr] gap-4 border-t border-border ${compact ? "py-5" : "py-7"}`}>
      <OrganizationLogo src={item.logo} alt={item.issuer} tone={item.logoTone} className={compact ? "h-10 w-10 sm:h-10 sm:w-10" : ""} />
      <div className="min-w-0">
        <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-1">
          <div>
            <h4 className={`${compact ? "text-base" : "text-lg"} font-semibold leading-snug text-foreground`}>{item.title}</h4>
            <p className="mt-1 text-sm text-muted-foreground">{item.issuer}</p>
          </div>
          <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
            <span className="text-primary">{item.status}</span>
            <span aria-hidden="true">/</span>
            <span className="inline-flex items-center gap-1.5"><Calendar className="size-3" />{item.date}</span>
          </div>
        </div>

        <p className={`leading-relaxed text-muted-foreground ${compact ? "mt-3 text-sm" : "mt-4 text-sm sm:text-base"}`}>{item.description}</p>
        <div className="mt-3 flex items-center gap-4 text-xs font-semibold">
          {item.grade && <span className="text-primary">{item.grade}</span>}
          {item.link && (
            <a href={item.link} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-1.5 text-foreground transition-colors hover:text-primary">
              {item.linkLabel ?? "View source"}
              <ExternalLink className="size-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export function Certifications() {
  return (
    <section id="certifications" className="border-b border-border bg-muted/40 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mb-12">
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.24em] text-primary">Background</p>
          <h2 className="text-balance text-4xl font-bold tracking-[-0.04em] sm:text-6xl">Education & recognition.</h2>
        </div>

        <div className="mb-12">
          <div className="mb-5 flex items-center gap-3">
            <GraduationCap className="size-5 text-primary" />
            <h3 className="text-xl font-bold text-foreground sm:text-2xl">Education & credentials</h3>
          </div>
          <div className="grid gap-x-10 md:grid-cols-2">
            {credentials.map((item) => <PortfolioRow key={item.title} item={item} />)}
          </div>
        </div>

        <div>
          <div className="mb-5 flex items-center gap-3">
            <Trophy className="size-5 text-primary" />
            <h3 className="text-xl font-bold text-foreground sm:text-2xl">Selected achievements</h3>
          </div>
          <div className="grid gap-x-10 md:grid-cols-2">
            {selectedAchievements.map((item) => <PortfolioRow key={item.title} item={item} />)}
          </div>

          <details className="group border-y border-border">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 marker:content-none">
              <div>
                <h3 className="font-semibold text-foreground">More achievements</h3>
                <p className="mt-1 text-sm text-muted-foreground">Three earlier projects and awards</p>
              </div>
              <ChevronDown className="size-4 text-muted-foreground transition-transform duration-200 group-open:rotate-180" />
            </summary>
            <div className="grid gap-x-8 border-t border-border md:grid-cols-3">
              {moreAchievements.map((item) => <PortfolioRow key={item.title} item={item} compact />)}
            </div>
          </details>
        </div>
      </div>
    </section>
  );
}
