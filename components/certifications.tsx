"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Award, GraduationCap, Trophy, Calendar, BookOpen, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";

export function Certifications() {
  const certifications = [
    {
      title: "Cyber Security (CSE) - SPECTRO",
      issuer: "EIT Digital Master School",
      date: "2025 - 2027",
      type: "degree",
      description:
        "Started my double degree from the EIT Digital Master School in the track of Cyber Security and attending the University of Twente as my entry university and the Università di Trento as my exit university.",
      status: "Ongoing",
    },
    {
      title: "Master of Computer Science - Cyber Security",
      issuer: "University of Twente",
      date: "2025 - 2026",
      type: "degree",
      description: "Started my Master of Computer Science - Cyber Security degree which consists of material mainly focused on cyber security and software engineering.",
      status: "Ongoing",
    },
    {
      title: "Bachelor of Science in Technical Computer Science",
      issuer: "University of Twente",
      date: "2021 - 2025",
      type: "degree",
      description: "Completed my Bachelor of Science in Technical Computer Science degree which consisted of study covering all aspects of computer science and software engineering.",
      status: "Completed",
      grade: "7.4 / 10",
    },
    {
      title: "Github Foundations Certification",
      issuer: "Github",
      date: "2024",
      type: "certification",
      description: "Foundational understanding of Github and how to use it to collaborate with others.",
      link: "https://www.credly.com/badges/902c0a93-ead6-4cf5-9fa3-a98cbc22941a/public_url",
      status: "Completed",
    },
  ];

  const achievements = [
    {
      title: "Automating User and Infrastructure Profiling from Cyber Leaks with LLMs",
      issuer: "University of Twente",
      date: "2025",
      type: "publication",
      description: "Publication of my research project which was about automating user and infrastructure profiling from cyber leaks with LLMs.",
      link: "https://purl.utwente.nl/essays/107532",
      status: "Published",
    },
    {
      title: "Smart Bike Design Project",
      issuer: "University of Twente",
      date: "2025",
      type: "publication",
      description: "Publication of our Design project which was a smart bike design for a research group in the University of Twente.",
      link: "https://bachelorshowcase-eemcs.apps.utwente.nl/view/S4Jq7bWG/",
      status: "Published",
    },
    {
      title: "OSM Broken Access Control Exploit",
      issuer: "Medium",
      date: "2024",
      type: "publication",
      description: "Publication of an exploit I found in the OSM (Online Soccer Manager) online video game.",
      link: "https://medium.com/@prioneto/cracking-the-code-infinite-boss-coin-broken-access-control-exploit-93fd743e60d5",
      status: "Published",
    },
    {
      title: "Best Note-Bridge Project",
      issuer: "University of Twente",
      date: "2023",
      type: "certification",
      description: "Awarded for the best project amongst the University of Twente students for the Note-Bridge company.",
      status: "Awarded",
    },
    {
      title: "2nd place in the GDWC",
      issuer: "GDWC",
      date: "2020",
      type: "certification",
      description: "Awarded for the 2nd place in the GDWC for my Low Poly Racing game.",
      status: "Awarded",
      grade: "2nd Place",
    },
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case "degree":
        return <GraduationCap className="h-6 w-6" />;
      case "certification":
        return <Award className="h-6 w-6" />;
      case "achievement":
        return <Trophy className="h-6 w-6" />;
      case "publication":
        return <BookOpen className="h-6 w-6" />;
      case "course":
        return <BookOpen className="h-6 w-6" />;
      default:
        return <Award className="h-6 w-6" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
      case "Awarded":
        return "bg-green-500/20 text-green-600 border-green-500/30";
      case "In Progress":
      case "Ongoing":
        return "bg-blue-500/20 text-blue-600 border-blue-500/30";
      default:
        return "bg-gray-500/20 text-gray-600 border-gray-500/30";
    }
  };

  return (
    <section id="certifications" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-balance">
            Certifications & <span className="text-primary">Achievements</span>
          </h2>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Certifications & Degrees */}
            <div>
              <h3 className="text-2xl font-bold mb-8 text-foreground flex items-center gap-3">
                <GraduationCap className="h-8 w-8 text-primary" />
                Education & Certifications
              </h3>
              <div className="space-y-6">
                {certifications.map((cert, index) => (
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
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-lg" style={{ backgroundColor: "oklch(0.62 0.24 15 / 0.1)" }}>
                            {getIcon(cert.type)}
                          </div>
                          <div>
                            <CardTitle className="text-lg text-foreground">{cert.title}</CardTitle>
                            <CardDescription className="text-muted-foreground">{cert.issuer}</CardDescription>
                          </div>
                        </div>
                        <Badge
                          className={`text-xs ${getStatusColor(cert.status)}`}
                          style={{
                            backgroundColor: cert.status === "Completed" || cert.status === "Awarded" ? "oklch(0.4 0.15 142 / 0.2)" : "oklch(0.6 0.15 240 / 0.2)",
                            borderColor: cert.status === "Completed" || cert.status === "Awarded" ? "oklch(0.4 0.15 142 / 0.3)" : "oklch(0.6 0.15 240 / 0.3)",
                          }}
                        >
                          {cert.status}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4 leading-relaxed">{cert.description}</p>
                      <div className="flex items-center justify-between text-sm mb-2">
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          <span>{cert.date}</span>
                        </div>
                        <div className="font-semibold text-primary">{cert.grade}</div>
                        {cert.link && (
                          <Button onClick={() => window.open(cert.link, "_blank")} className="bg-primary hover:bg-primary/90 playful-hover hover:scale-105 transition-all duration-300 pulse-glow ml-4">
                            Check it out
                            <ExternalLink className="h-4 w-4 ml-1" />
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div>
              <h3 className="text-2xl font-bold mb-8 text-foreground flex items-center gap-3">
                <Trophy className="h-8 w-8 text-primary" />
                Achievements & Recognition
              </h3>
              <div className="space-y-6">
                {achievements.map((achievement, index) => (
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
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-lg" style={{ backgroundColor: "oklch(0.68 0.2 25 / 0.1)" }}>
                            {getIcon(achievement.type)}
                          </div>
                          <div>
                            <CardTitle className="text-lg text-foreground">{achievement.title}</CardTitle>
                            <CardDescription className="text-muted-foreground">{achievement.issuer}</CardDescription>
                          </div>
                        </div>
                        <Badge
                          className={`text-xs ${getStatusColor(achievement.status)}`}
                          style={{
                            backgroundColor: achievement.status === "Awarded" ? "oklch(0.4 0.15 142 / 0.2)" : "oklch(0.6 0.15 240 / 0.2)",
                            borderColor: achievement.status === "Awarded" ? "oklch(0.4 0.15 142 / 0.3)" : "oklch(0.6 0.15 240 / 0.3)",
                          }}
                        >
                          {achievement.status}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4 leading-relaxed">{achievement.description}</p>
                      <div className="flex items-center justify-between text-sm mb-2">
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          <span>{achievement.date}</span>
                        </div>
                        <div className="font-semibold text-primary">{achievement.grade}</div>

                        {achievement.link && (
                          <Button
                            onClick={() => window.open(achievement.link, "_blank")}
                            className="bg-primary hover:bg-primary/90 playful-hover hover:scale-105 transition-all duration-300 pulse-glow"
                          >
                            Check it out
                            <ExternalLink className="h-4 w-4" />
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
