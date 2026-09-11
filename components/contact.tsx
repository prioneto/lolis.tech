import { ArrowUpRight, Mail, MapPin } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="bg-background pt-20 sm:pt-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid gap-10 border-b border-border pb-20 sm:pb-28 lg:grid-cols-[1fr_0.8fr] lg:items-end">
          <div>
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.24em] text-primary">Get in touch</p>
            <h2 className="max-w-3xl text-balance text-4xl font-bold leading-[0.98] tracking-[-0.05em] text-foreground sm:text-6xl">
              Let&apos;s make something worth using.
            </h2>
          </div>

          <div className="lg:justify-self-end">
            <p className="max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg">
              Have a product idea, an engineering problem, or just want to compare notes? Send me a message.
            </p>
            <a href="mailto:dimitrios@lolis.tech?subject=Hello%20from%20your%20portfolio" className="group mt-7 inline-flex items-center gap-2 border-b-2 border-primary pb-1 text-lg font-semibold text-foreground transition-colors hover:text-primary sm:text-xl">
              dimitrios@lolis.tech
              <ArrowUpRight className="size-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>

        <footer className="flex flex-col gap-4 py-8 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Dimitris Lolis</p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <a href="mailto:dimitrios@lolis.tech" className="inline-flex items-center gap-2 transition-colors hover:text-primary"><Mail className="size-3.5" /> Email</a>
            <span className="inline-flex items-center gap-2"><MapPin className="size-3.5" /> Enschede, Netherlands</span>
          </div>
        </footer>
      </div>
    </section>
  );
}
