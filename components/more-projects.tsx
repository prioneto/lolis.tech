import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Landy",
    category: "Live web app",
    description: "A flight logbook that finds your flights in Gmail and Google Calendar, enriches them with real flight data, and puts every route on an interactive globe with lifetime stats.",
    image: "/landy-site.webp",
    visualClass: "bg-[#101114]",
    technologies: ["Next.js", "Supabase", "Mapbox"],
    liveUrl: "https://www.landy.gr",
    note: "Source private",
  },
  {
    title: "ClickShift",
    category: "Open-source macOS app",
    description: "A menu-bar utility that lets a Zwift Click v2 control virtual shifting in training apps that don't support it, with auto-reconnect, app profiles and no network access at all.",
    image: "/clickshift.webp",
    visualClass: "bg-[#fdf0e1]",
    technologies: ["Swift", "CoreBluetooth", "macOS"],
    liveUrl: "https://clickshift.lolis.tech",
    sourceUrl: "https://github.com/prioneto/ClickShift",
  },
];

export function MoreProjects() {
  return (
    <section id="more-projects" className="border-b border-border bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mb-10">
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.24em] text-primary">Also shipped</p>
          <h2 className="text-balance text-3xl font-bold tracking-[-0.04em] sm:text-4xl">Two more, built end to end.</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <article key={project.title} className="group flex flex-col overflow-hidden rounded-2xl border border-border">
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className={`relative block aspect-[16/10] overflow-hidden ${project.visualClass}`}>
                <Image
                  src={project.image}
                  alt={`${project.title} website`}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                />
                <span className="absolute right-3 top-3 grid size-9 place-items-center rounded-full bg-background text-foreground shadow-md transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <ArrowUpRight className="size-4" />
                </span>
              </a>

              <div className="flex flex-1 flex-col p-6">
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary">{project.category}</p>
                <h3 className="mt-2 text-2xl font-bold tracking-[-0.04em] text-foreground">{project.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{project.description}</p>

                <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                  {project.technologies.map((technology) => <span key={technology}>{technology}</span>)}
                </div>

                <div className="mt-auto flex items-center gap-5 pt-6 text-sm font-semibold">
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="group/link inline-flex items-center gap-1.5 text-foreground transition-colors hover:text-primary">
                    View project <ArrowUpRight className="size-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                  </a>
                  {project.sourceUrl ? (
                    <a href={project.sourceUrl} target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-colors hover:text-primary">Source code</a>
                  ) : (
                    <span className="font-normal text-muted-foreground">{project.note}</span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
