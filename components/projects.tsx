"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "../components/ui/badge";
import { ExternalLink } from "lucide-react";

export function Projects() {
  const projects = [
    {
      title: "FitRef",
      description: "This project is a fitness-tracking web application that integrates the Strava API to display user activities.",
      image: "/fitref.png",
      technologies: ["Next.js", "TypeScript", "Tailwind", "Supabase"],
      liveUrl: "https://fitref.gr",
    },
    {
      title: "Landy",
      description: "This project is a flight‑tracking web application that integrates with Google to display flights.",
      image: "/landy.png",
      technologies: ["Next.js", "TypeScript", "Google API"],
      liveUrl: "https://landy.gr",
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
                className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 overflow-hidden playful-hover hover:rotate-1"
                style={{
                  animationDelay: `${index * 0.1}s`,
                  borderColor: "oklch(0.92 0 0 / 0.5)",
                }}
              >
                <div className="relative overflow-hidden">
                  <img src={project.image || "/placeholder.svg"} alt={project.title} className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: "linear-gradient(to top, oklch(0.62 0.24 15 / 0.3), transparent)",
                    }}
                  />
                </div>

                <CardHeader>
                  <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors duration-300">{project.title}</CardTitle>
                  <CardDescription className="text-muted-foreground leading-relaxed">{project.description}</CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-pointer hover:scale-105">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      className="flex-1 bg-primary hover:bg-primary/90 playful-hover hover:scale-105 transition-all duration-300 pulse-glow"
                      onClick={() => {
                        if (project.liveUrl && project.liveUrl !== "#") {
                          window.open(project.liveUrl, "_blank");
                        }
                      }}
                      disabled={!project.liveUrl || project.liveUrl === "#"}
                    >
                      <ExternalLink className="h-4 w-4 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                      Live Demo
                    </Button>
                  </div>
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
