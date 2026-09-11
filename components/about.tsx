import { ArrowUpRight } from "lucide-react";

const perspectives = [
  {
    number: "01",
    title: "Product engineering",
    description: "I turn ideas into focused web, mobile, and native products that are useful beyond the demo.",
  },
  {
    number: "02",
    title: "Security & research",
    description: "I study how systems behave under pressure, from cyber-leak analysis to real-world vulnerabilities.",
  },
  {
    number: "03",
    title: "Endurance & leadership",
    description: "Triathlon, organising, and team leadership keep me comfortable with long horizons and hard problems.",
  },
];

export function About() {
  return (
    <section id="about" className="border-b border-border bg-muted/40 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="border-b border-border pb-10">
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.24em] text-primary">A little context</p>
          <h2 className="max-w-4xl text-balance text-4xl font-bold leading-[0.98] tracking-[-0.05em] sm:text-6xl lg:text-7xl">
            Builder by instinct.<br /><span className="text-primary">Curious by default.</span>
          </h2>
        </div>

        <div className="grid gap-14 pt-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <div>
            <p className="border-l-2 border-primary pl-6 text-balance text-2xl font-semibold leading-snug tracking-[-0.03em] text-foreground sm:text-3xl">
              I work where product engineering and security overlap.
            </p>

            <div className="mt-8 max-w-2xl space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
              <p>
                I&apos;m a Technical Computer Science graduate and Cyber Security MSc student at the University of Twente. I build useful software, investigate how systems behave, and turn what I learn into practical tools.
              </p>
              <p>
                My path runs from product work at Stamina and Note-Bridge to LLM-assisted cyber-leak research and responsible vulnerability disclosure. Away from the screen, triathlon keeps me moving and has taught me how to lead, organise, and stay patient with difficult work.
              </p>
            </div>

            <a href="https://www.linkedin.com/in/dimlol/" target="_blank" rel="noopener noreferrer" className="group mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-foreground transition-colors hover:text-primary">
              More on LinkedIn
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          <div>
            {perspectives.map((item) => (
              <article key={item.number} className="grid grid-cols-[2.25rem_1fr] gap-4 border-t border-border py-6 first:border-t-0 first:pt-0">
                <span className="font-mono text-[10px] tracking-[0.16em] text-primary">{item.number}</span>
                <div>
                  <h3 className="text-lg font-semibold tracking-[-0.02em] text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">{item.description}</p>
                </div>
              </article>
            ))}
            <div className="border-t border-border" />
          </div>
        </div>
      </div>
    </section>
  );
}
