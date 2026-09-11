"use client";

import Image from "next/image";
import { ArrowDownRight, Download } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export function Hero() {
  const scrollToProjects = () => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="relative overflow-hidden border-b border-border bg-background pb-20 pt-32 sm:pb-28 sm:pt-40">
      <div className="pointer-events-none absolute inset-0 opacity-60 [background-image:linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] [background-size:72px_72px] [mask-image:linear-gradient(to_bottom,black,transparent_88%)]" />
      <div className="pointer-events-none absolute -right-32 top-10 size-[32rem] rounded-full bg-primary/[0.07] blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl items-end gap-12 px-6 lg:grid-cols-[1fr_280px] lg:px-8">
        <div className="max-w-4xl">
          <p className="mb-6 font-mono text-xs uppercase tracking-[0.24em] text-primary">Dimitris Lolis / Developer</p>
          <h1 className="max-w-4xl text-balance text-5xl font-bold leading-[0.95] tracking-[-0.06em] text-foreground sm:text-7xl lg:text-8xl">
            I build useful things for the <span className="text-primary">real world.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
            Full-stack developer and cyber security student turning complex systems into focused products, tools, and experiences.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <button onClick={scrollToProjects} className="group inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-transform hover:-translate-y-0.5">
              Explore selected work
              <ArrowDownRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
            </button>
            <a href="/CV.pdf" download="Dimitris_Lolis_CV.pdf" className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:text-primary">
              <Download className="size-4" /> Résumé
            </a>
          </div>
        </div>

        <div className="flex items-end gap-5 lg:flex-col lg:items-end">
          <div className="relative size-28 overflow-hidden rounded-2xl border border-border bg-muted shadow-[0_16px_50px_rgba(35,15,15,0.12)] sm:size-36 lg:size-52">
            <Image src="/mugshot.jpeg" alt="Portrait of Dimitris Lolis" fill priority sizes="(min-width: 1024px) 208px, 144px" className="object-cover" />
          </div>
          <div className="flex gap-2">
            <a aria-label="GitHub" href="https://github.com/prioneto" target="_blank" rel="noopener noreferrer" className="rounded-full border border-border bg-background p-2.5 text-muted-foreground transition-colors hover:border-primary hover:text-primary"><FaGithub className="size-4" /></a>
            <a aria-label="LinkedIn" href="https://www.linkedin.com/in/dimlol/" target="_blank" rel="noopener noreferrer" className="rounded-full border border-border bg-background p-2.5 text-muted-foreground transition-colors hover:border-primary hover:text-primary"><FaLinkedin className="size-4" /></a>
          </div>
        </div>
      </div>

    </section>
  );
}
