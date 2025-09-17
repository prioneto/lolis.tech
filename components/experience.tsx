"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Briefcase, Calendar, MapPin, ExternalLink, Building2 } from "lucide-react";

export function Experience() {
  const experiences = [
    {
      title: "Full Stack Engineer",
      company: "Stamina Technologies Limited",
      location: "Remote",
      type: "full-time",
      startDate: "Jul 2025",
      endDate: "Present",
      description: "Worked on developing web applications and tools for the university's research projects. Gained experience in full-stack development and agile methodologies.",
      technologies: ["React Native", "Node.js", "Expo", "Supabase", "Typescript"],
      link: "https://joinstamina.com/",
      current: true,
    },
    {
      title: "Teaching Assistant",
      company: "University of Twente",
      location: "University of Twente",
      type: "part-time",
      startDate: "Sep 2025",
      endDate: "Present",
      description: "Assisting students with their assignments and projects. Gained experience in teaching and mentoring students.",
      technologies: ["C", "Operating Systems"],
      current: true,
    },
    {
      title: "Lead Full-Stack Developer",
      company: "Denda Games BV",
      location: "Hybrid",
      type: "part-time",
      startDate: "Jan 2025",
      endDate: "Jun 2025",
      description: "Mainting a CMC Platform for the company's games and analytics. The CMC was accessed by companies like CNN, DPG, NU.NL and more.",
      technologies: ["React", "Next.js", "Node.js", "MySQL", "Tailwind CSS", "AWS", "TypeScript"],
      current: false,
    },
    {
      title: "Full-Stack Developer",
      company: "Note-Bridge",
      location: "Hybrid",
      type: "full-time",
      startDate: "Apr 2023",
      endDate: "Sep 2024",
      description: "Developing and maintaining a platform for students to find and book lessons with teachers. Working with modern web technologies including Next.js, TypeScript, and Supabase.",
      technologies: ["Next.js", "TypeScript", "Supabase", "Stripe", "Tailwind CSS"],
      link: "https://note-bridge.com",
      current: false,
    },
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "full-time":
        return <Briefcase className="h-5 w-5" />;
      case "internship":
        return <Building2 className="h-5 w-5" />;
      case "freelance":
        return <Briefcase className="h-5 w-5" />;
      case "project":
        return <Briefcase className="h-5 w-5" />;
      default:
        return <Briefcase className="h-5 w-5" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "full-time":
        return "oklch(0.62 0.24 15 / 0.1)";
      case "internship":
        return "oklch(0.68 0.2 25 / 0.1)";
      case "freelance":
        return "oklch(0.4 0.15 142 / 0.1)";
      case "project":
        return "oklch(0.6 0.15 240 / 0.1)";
      default:
        return "oklch(0.62 0.24 15 / 0.1)";
    }
  };

  const getTypeTextColor = (type: string) => {
    switch (type) {
      case "full-time":
        return "text-primary";
      case "internship":
        return "text-accent";
      case "freelance":
        return "text-green-600";
      case "project":
        return "text-blue-600";
      default:
        return "text-primary";
    }
  };

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-balance">
            Work <span className="text-primary">Experience</span>
          </h2>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border/50 overflow-hidden playful-hover hover:rotate-1"
                style={{
                  animationDelay: `${index * 0.1}s`,
                  borderColor: "oklch(0.92 0 0 / 0.5)",
                }}
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg" style={{ backgroundColor: getTypeColor(exp.type) }}>
                        {getTypeIcon(exp.type)}
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl text-foreground mb-1">{exp.title}</CardTitle>
                        <CardDescription className="text-lg text-muted-foreground mb-2">{exp.company}</CardDescription>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            <span>{exp.location}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            <span>
                              {exp.startDate} - {exp.current ? "Present" : exp.endDate}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <Badge
                        className={`text-xs ${getTypeTextColor(exp.type)}`}
                        style={{
                          backgroundColor: getTypeColor(exp.type),
                          borderColor:
                            exp.type === "full-time"
                              ? "oklch(0.62 0.24 15 / 0.3)"
                              : exp.type === "internship"
                              ? "oklch(0.68 0.2 25 / 0.3)"
                              : exp.type === "freelance"
                              ? "oklch(0.4 0.15 142 / 0.3)"
                              : "oklch(0.6 0.15 240 / 0.3)",
                        }}
                      >
                        {exp.type.charAt(0).toUpperCase() + exp.type.slice(1).replace("-", " ")}
                      </Badge>
                      {exp.current && (
                        <Badge
                          className="text-xs bg-green-500/20 text-green-600 border-green-500/30"
                          style={{
                            backgroundColor: "oklch(0.4 0.15 142 / 0.2)",
                            borderColor: "oklch(0.4 0.15 142 / 0.3)",
                          }}
                        >
                          Current
                        </Badge>
                      )}
                    </div>
                  </div>
                </CardHeader>

                <CardContent>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{exp.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {exp.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="outline"
                        className="text-xs hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-pointer hover:scale-105"
                        style={{
                          backgroundColor: "oklch(0.62 0.24 15 / 0.1)",
                          borderColor: "oklch(0.62 0.24 15 / 0.3)",
                        }}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {exp.link && (
                    <Button
                      onClick={() => window.open(exp.link, "_blank")}
                      className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2 text-sm playful-hover hover:scale-105 transition-all duration-300 pulse-glow"
                    >
                      View Project
                      <ExternalLink className="h-4 w-4 ml-2" />
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
