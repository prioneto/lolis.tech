import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Signalcase",
    category: "Native product",
    description: "A native macOS app that turns scattered logs into compact, evidence-backed bug cases. I built the complete product, from the SwiftUI client to its secure Next.js and Supabase backend.",
    image: "/signalcase-app.png",
    imageClass: "object-cover object-top",
    visualClass: "bg-[#e8f4dc]",
    chromeClass: "border-white/10 bg-[#111412] text-white/55",
    technologies: ["SwiftUI", "Next.js", "Supabase"],
    liveUrl: "https://signalcase.vercel.app",
    sourceUrl: "https://github.com/prioneto/signalcase",
  },
  {
    title: "FitRef",
    category: "Web platform",
    description: "A focused fitness-tracking experience that connects with Strava and presents activity data in a way that is easier to understand and act on.",
    image: "/fitref.png",
    imageClass: "object-cover object-top",
    visualClass: "bg-[#e6eefc]",
    chromeClass: "border-black/10 bg-white text-black/45",
    technologies: ["Next.js", "TypeScript", "Supabase"],
    liveUrl: "https://fitref.gr",
  },
  {
    title: "ClickShift",
    category: "Native macOS utility",
    description: "A lightweight macOS app that brings Zwift Click v2 virtual shifting to MyWhoosh, ROUVY, and other training apps, with app-safe shortcuts, custom mappings, gear steps, and automatic reconnect.",
    image: "/clickshift-icon.png",
    imageClass: "object-contain p-[18%]",
    visualClass: "bg-[#f8ead8]",
    chromeClass: "border-white/10 bg-[#20252c] text-white/55",
    technologies: ["Swift", "SwiftUI", "Core Bluetooth"],
    liveUrl: "https://click-shift.vercel.app",
    sourceUrl: "https://github.com/prioneto/ClickShift",
  },
];

export function Projects() {
  return (
    <section id="projects" className="border-b border-border bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mb-14 border-b border-border pb-10">
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.24em] text-primary">Selected work</p>
          <h2 className="text-balance text-4xl font-bold tracking-[-0.04em] sm:text-6xl">A few things I&apos;ve shipped.</h2>
        </div>

        <div>
          {projects.map((project, index) => (
            <article key={project.title} className="grid gap-8 border-b border-border py-10 first:pt-0 last:border-0 last:pb-0 md:grid-cols-2 md:items-center md:gap-12 lg:gap-20">
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className={`group relative block aspect-[16/10] overflow-hidden rounded-2xl p-4 sm:p-6 ${project.visualClass} ${index % 2 === 1 ? "md:order-2" : ""}`}>
                <div className="relative h-full overflow-hidden rounded-xl border border-black/10 bg-[#2b3337] shadow-[0_22px_55px_rgba(35,25,25,0.18)] transition-transform duration-500 group-hover:-translate-y-1 group-hover:scale-[1.01]">
                  <div className={`flex h-8 items-center justify-between border-b px-3 ${project.chromeClass}`}>
                    <div className="flex gap-1.5" aria-hidden="true">
                      <span className="size-1.5 rounded-full bg-current opacity-70" />
                      <span className="size-1.5 rounded-full bg-current opacity-50" />
                      <span className="size-1.5 rounded-full bg-current opacity-30" />
                    </div>
                    <span className="font-mono text-[8px] uppercase tracking-[0.16em]">{project.title}</span>
                    <span className="w-6" aria-hidden="true" />
                  </div>
                  <div className="relative h-[calc(100%-2rem)] overflow-hidden">
                    <Image src={project.image} alt={`${project.title} project preview`} fill sizes="(min-width: 768px) 50vw, 100vw" className={`${project.imageClass} transition-transform duration-500 group-hover:scale-[1.015]`} />
                  </div>
                </div>
                <span className="absolute right-2 top-2 grid size-9 place-items-center rounded-full bg-background text-foreground shadow-md transition-colors group-hover:bg-primary group-hover:text-primary-foreground sm:right-4 sm:top-4">
                  <ArrowUpRight className="size-4" />
                </span>
              </a>

              <div className={index % 2 === 1 ? "md:order-1" : ""}>
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary">0{index + 1} / {project.category}</p>
                <h3 className="mt-3 text-3xl font-bold tracking-[-0.04em] text-foreground sm:text-4xl">{project.title}</h3>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">{project.description}</p>

                <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                  {project.technologies.map((technology) => <span key={technology}>{technology}</span>)}
                </div>

                <div className="mt-8 flex items-center gap-5 text-sm font-semibold">
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-1.5 text-foreground transition-colors hover:text-primary">
                    View project <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                  {project.sourceUrl && (
                    <a href={project.sourceUrl} target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-colors hover:text-primary">Source code</a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <a href="https://github.com/prioneto" target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:text-primary">
            More work on GitHub <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
