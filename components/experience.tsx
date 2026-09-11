import { ArrowUpRight, Calendar, MapPin } from "lucide-react";
import { OrganizationLogo } from "./organization-logo";

const experiences = [
  {
    title: "Software Engineer",
    company: "Stamina Technologies Limited",
    logo: "/logos/stamina.png",
    location: "Remote",
    type: "Full time",
    dates: "Jul 2025 – Jul 2026",
    description: "Built web applications and internal tools, contributing across full-stack development in an agile product environment.",
    technologies: ["React Native", "Node.js", "Expo", "Supabase", "TypeScript"],
    link: "https://joinstamina.com/",
  },
  {
    title: "Teaching Assistant",
    company: "University of Twente",
    logo: "/logos/utwente.png",
    location: "Enschede",
    type: "Part time",
    dates: "Sep 2025 – Nov 2025",
    description: "Supported students with assignments and projects in C and operating systems, combining technical guidance with mentoring.",
    technologies: ["C", "Operating Systems", "Mentoring"],
    link: "https://www.utwente.nl/en/",
  },
  {
    title: "Lead Full-Stack Developer",
    company: "Denda Games BV",
    logo: "/logos/denda.png",
    location: "Hybrid",
    type: "Part time",
    dates: "Jan 2025 – Jun 2025",
    description: "Maintained a content-management and analytics platform used by media companies including CNN, DPG, and NU.nl.",
    technologies: ["React", "Next.js", "Node.js", "MySQL", "Tailwind CSS", "AWS", "TypeScript"],
    link: "https://denda-corporate.com/",
  },
  {
    title: "Full-Stack Developer",
    company: "Note-Bridge",
    logo: "/logos/note-bridge.png",
    location: "Hybrid",
    type: "Full time",
    dates: "Apr 2023 – Sep 2024",
    description: "Developed and maintained a platform that helped students find and book lessons with teachers.",
    technologies: ["Next.js", "TypeScript", "Supabase", "Stripe", "Tailwind CSS"],
    link: "https://note-bridge.com",
  },
];

export function Experience() {
  return (
    <section id="experience" className="border-b border-border bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mb-12 border-b border-border pb-10">
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.24em] text-primary">Career</p>
          <h2 className="text-balance text-4xl font-bold tracking-[-0.04em] sm:text-6xl">Where I&apos;ve contributed.</h2>
        </div>

        <div className="grid gap-x-12 lg:grid-cols-2">
          {experiences.map((experience) => (
            <article key={`${experience.company}-${experience.title}`} className="grid grid-cols-[auto_1fr] gap-4 border-b border-border py-8 first:pt-0 lg:[&:nth-child(2)]:pt-0">
              <OrganizationLogo src={experience.logo} alt={experience.company} />

              <div className="min-w-0">
                <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-1">
                  <div>
                    <h3 className="text-xl font-semibold leading-snug tracking-[-0.02em] text-foreground">{experience.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{experience.company}</p>
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-primary">{experience.type}</span>
                </div>

                <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5"><MapPin className="size-3.5" />{experience.location}</span>
                  <span className="inline-flex items-center gap-1.5"><Calendar className="size-3.5" />{experience.dates}</span>
                </div>

                <p className="mt-5 text-sm leading-relaxed text-muted-foreground sm:text-base">{experience.description}</p>

                <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                  {experience.technologies.map((technology) => <span key={technology}>{technology}</span>)}
                </div>

                <a href={experience.link} target="_blank" rel="noopener noreferrer" className="group mt-5 inline-flex items-center gap-1.5 text-xs font-semibold text-foreground transition-colors hover:text-primary">
                  Visit website
                  <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
