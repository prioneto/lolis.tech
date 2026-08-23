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
import { Calendar, ExternalLink, MapPin } from "lucide-react";

const experiences = [
  {
    title: "Software Engineer",
    company: "Stamina Technologies Limited",
    logo: "/logos/stamina.png",
    location: "Remote",
    type: "Full time",
    dates: "Jul 2025 – Jul 2026",
    description:
      "Built web applications and internal tools, contributing across full-stack development in an agile product environment.",
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
    description:
      "Supported students with assignments and projects in C and operating systems, combining technical guidance with mentoring.",
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
    description:
      "Maintained a content-management and analytics platform used by media companies including CNN, DPG, and NU.nl.",
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
    description:
      "Developed and maintained a platform that helped students find and book lessons with teachers.",
    technologies: ["Next.js", "TypeScript", "Supabase", "Stripe", "Tailwind CSS"],
    link: "https://note-bridge.com",
  },
];

export function Experience() {
  return (
    <section id="experience" className="bg-background py-16 sm:py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 text-center sm:mb-14">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">Career</p>
            <h2 className="text-balance text-4xl font-bold md:text-5xl">
              Work <span className="text-primary">Experience</span>
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 md:gap-6">
            {experiences.map((experience) => (
              <Card
                key={`${experience.company}-${experience.title}`}
                className="group flex h-full flex-col overflow-hidden border-border/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <CardHeader className="space-y-0 p-5 sm:p-6">
                  <div className="flex items-start gap-3.5 sm:gap-4">
                    <OrganizationLogo src={experience.logo} alt={experience.company} />

                    <div className="min-w-0 flex-1">
                      <CardTitle className="text-balance text-lg leading-snug text-foreground sm:text-xl">
                        {experience.title}
                      </CardTitle>
                      <CardDescription className="mt-1 text-sm leading-snug text-muted-foreground sm:text-base">
                        {experience.company}
                      </CardDescription>

                      <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-2 text-xs text-muted-foreground sm:text-sm">
                        <Badge variant="outline" className="rounded-full bg-primary/5 px-2.5 py-1 text-primary">
                          {experience.type}
                        </Badge>
                        <span className="inline-flex items-center gap-1.5">
                          <MapPin className="h-3.5 w-3.5" />
                          {experience.location}
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <Calendar className="h-3.5 w-3.5" />
                          {experience.dates}
                        </span>
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="flex flex-1 flex-col px-5 pb-5 pt-0 sm:px-6 sm:pb-6">
                  <p className="mb-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {experience.description}
                  </p>

                  <div className="mt-auto flex flex-wrap gap-2">
                    {experience.technologies.map((technology) => (
                      <Badge
                        key={technology}
                        variant="outline"
                        className="rounded-full bg-primary/5 px-2.5 py-1 text-xs transition-colors hover:bg-primary hover:text-primary-foreground"
                      >
                        {technology}
                      </Badge>
                    ))}
                  </div>

                  {experience.link && (
                    <Button asChild variant="outline" size="sm" className="mt-5 w-full sm:w-fit">
                      <a href={experience.link} target="_blank" rel="noopener noreferrer">
                        Visit website
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
