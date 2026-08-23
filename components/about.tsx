import { Card, CardContent } from "./ui/card";
import { Bike, Code2, ExternalLink, ShieldCheck } from "lucide-react";

const highlights = [
  {
    title: "Product engineering",
    description: "Building and shipping web, mobile, and native products—from Stamina and Note-Bridge to Signalcase.",
    icon: Code2,
  },
  {
    title: "Security & research",
    description: "Studying cyber security, researching LLM-assisted cyber-leak analysis, and documenting real vulnerabilities.",
    icon: ShieldCheck,
  },
  {
    title: "Endurance & leadership",
    description: "A committed triathlete, Aloha member, and former chair of the Gebouwenloop organising committee.",
    icon: Bike,
  },
];

export function About() {
  return (
    <section id="about" className="bg-muted/30 py-16 sm:py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 text-center sm:mb-14">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">A little context</p>
            <h2 className="text-balance text-4xl font-bold md:text-5xl">
              About <span className="text-primary">Me</span>
            </h2>
          </div>

          <div className="grid items-start gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
            <div>
              <h3 className="text-balance text-2xl font-bold leading-tight text-foreground sm:text-3xl">
                I build products—and I like understanding what happens when systems break.
              </h3>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
                I&apos;m a Technical Computer Science graduate and Cyber Security MSc student at the University of Twente. My work sits between product engineering and security: building useful software, investigating how systems behave, and turning what I learn into practical tools.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                That path has taken me from product work at Stamina and Note-Bridge to research on profiling cyber leaks with LLMs and the responsible disclosure of a broken access-control vulnerability in OSM. Outside software, triathlon keeps me moving and has given me opportunities to lead and organise within the Aloha community.
              </p>

              <a
                href="https://www.linkedin.com/in/dimlol/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary underline-offset-4 hover:underline"
              >
                More on LinkedIn
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>

            <div className="grid gap-4">
              {highlights.map(({ title, description, icon: Icon }) => (
                <Card
                  key={title}
                  className="border-border/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <CardContent className="p-5 sm:p-6">
                    <div className="flex items-start gap-4">
                      <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">{title}</h4>
                        <p className="mt-1 text-sm leading-relaxed text-muted-foreground sm:text-base">{description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
