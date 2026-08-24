"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "../components/ui/badge";
import { ExternalLink, Hammer } from "lucide-react";
import Image from "next/image";

export function Projects() {
  const projects = [
    {
      title: "Signalcase",
      description: "My own product: a free, open-source native macOS app that turns logs from Supabase, Render, GitHub, and your application into compact, evidence-backed bug cases. Deterministic grouping — no AI account required. Built end-to-end: SwiftUI client, Next.js backend, Supabase with row-level security.",
      image: "/signalcase.png",
      technologies: ["SwiftUI", "Swift", "Next.js", "TypeScript", "Supabase"],
      liveUrl: "https://signalcase.vercel.app",
      ctaLabel: "Live demo",
      demoUrl: "https://github.com/prioneto/signalcase",
      demoLabel: "View source",
    },
    {
      title: "FitRef",
      description: "This project is a fitness-tracking web application that integrates the Strava API to display user activities.",
      image: "/fitref.png",
      technologies: ["Next.js", "TypeScript", "Tailwind", "Supabase"],
      liveUrl: "https://fitref.gr",
    },
    {
      title: "Low Poly Racing",
      description: "Low Poly Racing is an arcade racing game I developed in Unity (C#) during summer 2020.",
      image: "/lowpolyracing.png",
      technologies: ["Unity", "C#"],
      liveUrl: "https://prioneto-games.itch.io/low-poly-racing",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-balance">
            Featured <span className="text-primary hover:wiggle cursor-pointer">Projects</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="group flex h-full flex-col overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-xl playful-hover hover:rotate-1"
                style={{
                  animationDelay: `${index * 0.1}s`,
                  borderColor: "oklch(0.92 0 0 / 0.5)",
                }}
              >
                <div className="relative aspect-video overflow-hidden bg-foreground">
                  <Image src={project.image} alt={project.title} fill sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw" className="object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: "linear-gradient(to top, oklch(0.62 0.24 15 / 0.3), transparent)",
                    }}
                  />
                </div>

                <CardHeader className="flex-1 pb-5">
                  <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors duration-300">{project.title}</CardTitle>
                  <CardDescription className="text-muted-foreground leading-relaxed">{project.description}</CardDescription>
                </CardHeader>

                <CardContent className="mt-auto">
                  <div className="mb-5 flex min-h-16 content-start flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-pointer hover:scale-105">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {project.liveUrl && project.liveUrl !== "#" ? (
                    <div className="flex gap-2">
                      <Button asChild size="sm" className="flex-1 playful-hover transition-all duration-300 hover:scale-[1.02]">
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 transition-transform duration-300 group-hover:rotate-12" />
                          {project.ctaLabel ?? "Live Demo"}
                        </a>
                      </Button>
                      {project.demoUrl ? (
                        <Button asChild size="sm" variant="outline" className="playful-hover transition-all duration-300 hover:scale-[1.02]">
                          <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                            {project.demoLabel ?? "Live demo"}
                          </a>
                        </Button>
                      ) : null}
                    </div>
                  ) : (
                    <Button size="sm" variant="outline" className="w-full text-muted-foreground" disabled>
                      <Hammer className="h-4 w-4" />
                      In development
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <a
              href="https://github.com/prioneto"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2 rounded-lg border border-primary text-primary font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300 playful-hover hover:scale-105"
            >
              For more projects, check my GitHub
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
