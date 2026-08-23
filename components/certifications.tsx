import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { OrganizationLogo } from "./organization-logo";
import { Calendar, ChevronDown, ExternalLink, GraduationCap, Trophy } from "lucide-react";

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
    description:
      "Double-degree programme in cyber security, with the University of Twente as the entry university and the University of Trento as the exit university.",
    status: "Completed",
    link: "https://www.utwente.nl/en/education/master/programmes/computer-science/specialisation/cyber-security/",
    linkLabel: "Visit programme",
  },
  {
    title: "MSc Computer Science – Cyber Security",
    issuer: "University of Twente",
    logo: "/logos/utwente.png",
    date: "2025 – 2027",
    description:
      "Master's programme focused on cyber security, secure systems, and software engineering.",
    status: "Ongoing",
    link: "https://www.utwente.nl/en/education/master/programmes/computer-science/",
    linkLabel: "Visit programme",
  },
  {
    title: "BSc Technical Computer Science",
    issuer: "University of Twente",
    logo: "/logos/utwente.png",
    date: "2021 – 2025",
    description:
      "Completed a broad computer science and software engineering curriculum spanning systems, algorithms, and product development.",
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
    description:
      "Validated foundational knowledge of Git, GitHub, repositories, collaboration, and modern development workflows.",
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
    description:
      "Published research on automating user and infrastructure profiling from cyber leaks with large language models.",
    status: "Published",
    link: "https://purl.utwente.nl/essays/107532",
    linkLabel: "Read publication",
  },
  {
    title: "OSM Broken Access Control Exploit",
    issuer: "Medium",
    logo: "/logos/medium.png",
    date: "2024",
    description:
      "Documented a broken access-control vulnerability discovered in the Online Soccer Manager game.",
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

function statusClasses(status: PortfolioItem["status"]) {
  if (status === "Ongoing") {
    return "border-blue-500/30 bg-blue-500/10 text-blue-700";
  }

  if (status === "Published") {
    return "border-violet-500/30 bg-violet-500/10 text-violet-700";
  }

  return "border-emerald-500/30 bg-emerald-500/10 text-emerald-700";
}

function ItemCard({ item }: { item: PortfolioItem }) {
  return (
    <Card className="group flex h-full flex-col border-border/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <CardHeader className="space-y-0 p-5 sm:p-6">
        <div className="flex items-start gap-3.5 sm:gap-4">
          <OrganizationLogo src={item.logo} alt={item.issuer} tone={item.logoTone} />
          <div className="min-w-0 flex-1">
            <CardTitle className="text-balance text-lg leading-snug text-foreground">
              {item.title}
            </CardTitle>
            <CardDescription className="mt-1 text-sm leading-snug text-muted-foreground">
              {item.issuer}
            </CardDescription>

            <div className="mt-3 flex flex-wrap items-center gap-2 text-xs text-muted-foreground sm:text-sm">
              <Badge variant="outline" className={`rounded-full px-2.5 py-1 ${statusClasses(item.status)}`}>
                {item.status}
              </Badge>
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5" />
                {item.date}
              </span>
              {item.grade && <span className="font-semibold text-primary">{item.grade}</span>}
            </div>
          </div>
        </div>
      </CardHeader>

      <CardContent className="flex flex-1 flex-col px-5 pb-5 pt-0 sm:px-6 sm:pb-6">
        <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">{item.description}</p>
        {item.link && (
          <Button asChild variant="outline" size="sm" className="mt-5 w-full sm:w-fit">
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              {item.linkLabel ?? "View source"}
              <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        )}
      </CardContent>
    </Card>
  );
}

function CompactItem({ item }: { item: PortfolioItem }) {
  return (
    <article className="flex items-start gap-3 rounded-xl border border-border/60 bg-background p-4">
      <OrganizationLogo src={item.logo} alt={item.issuer} tone={item.logoTone} className="h-11 w-11 sm:h-11 sm:w-11" />
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-start justify-between gap-2">
          <div>
            <h4 className="text-sm font-semibold leading-snug text-foreground">{item.title}</h4>
            <p className="mt-0.5 text-xs text-muted-foreground">{item.issuer}</p>
          </div>
          <span className="text-xs font-medium text-muted-foreground">{item.date}</span>
        </div>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
        {item.link && (
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-primary hover:underline"
          >
            {item.linkLabel ?? "View source"} <ExternalLink className="h-3 w-3" />
          </a>
        )}
      </div>
    </article>
  );
}

export function Certifications() {
  return (
    <section id="certifications" className="bg-muted/30 py-16 sm:py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-14">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">Background</p>
            <h2 className="text-balance text-4xl font-bold md:text-5xl">
              Education & <span className="text-primary">Recognition</span>
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              The credentials and selected work most relevant to software engineering and cyber security.
            </p>
          </div>

          <div className="mb-6 flex items-center gap-3">
            <GraduationCap className="h-6 w-6 text-primary" />
            <h3 className="text-xl font-bold text-foreground sm:text-2xl">Education & credentials</h3>
          </div>
          <div className="grid gap-5 md:grid-cols-2 md:gap-6">
            {credentials.map((credential) => (
              <ItemCard key={credential.title} item={credential} />
            ))}
          </div>

          <div className="mb-6 mt-12 flex items-center gap-3 sm:mt-14">
            <Trophy className="h-6 w-6 text-primary" />
            <h3 className="text-xl font-bold text-foreground sm:text-2xl">Selected achievements</h3>
          </div>
          <div className="grid gap-5 md:grid-cols-2 md:gap-6">
            {selectedAchievements.map((achievement) => (
              <ItemCard key={achievement.title} item={achievement} />
            ))}
          </div>

          <details className="group mt-6 overflow-hidden rounded-xl border border-border/60 bg-card shadow-sm">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 marker:content-none sm:p-6">
              <div>
                <h3 className="font-semibold text-foreground">More achievements</h3>
                <p className="mt-1 text-sm text-muted-foreground">Three earlier projects and awards</p>
              </div>
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-border bg-background text-muted-foreground">
                <ChevronDown className="h-4 w-4 transition-transform duration-200 group-open:rotate-180" />
              </span>
            </summary>
            <div className="grid gap-3 border-t border-border/60 p-4 md:grid-cols-3 sm:p-5">
              {moreAchievements.map((achievement) => (
                <CompactItem key={achievement.title} item={achievement} />
              ))}
            </div>
          </details>
        </div>
      </div>
    </section>
  );
}
