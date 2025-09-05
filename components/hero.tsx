"use client";

import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Download } from "lucide-react";
import { useEffect, useState } from "react";

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-card to-background">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"
          style={{
            left: mousePosition.x / 10,
            top: mousePosition.y / 10,
          }}
        />
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-2xl bounce-gentle" />
        <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-secondary/10 rounded-full blur-xl animate-pulse" />
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 flex justify-center">
            <div className="relative group">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-primary/20 hover:border-primary transition-all duration-300 playful-hover hover:scale-110 hover:rotate-3">
                <img src="/mugshot.jpeg" alt="Profile" className="w-full h-full object-cover" />
              </div>
              {/* Animated ring around image */}
              <div className="absolute inset-0 rounded-full border-2 border-primary/30 animate-spin-slow opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">
            <span className="text-foreground">Code. Create.</span>
            <br />
            <span className="text-primary animate-pulse hover:wiggle cursor-pointer">Innovate.</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-pretty leading-relaxed">
            Hey there! I&apos;m Dimitris, a Computer Science student and full-stack developer who turns coffee into code and ideas into digital experiences.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              onClick={scrollToProjects}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg playful-hover pulse-glow hover:scale-105 transition-all duration-300"
            >
              View My Work
              <ArrowDown className="ml-2 h-5 w-5 group-hover:animate-bounce" />
            </Button>

            <div className="flex gap-4">
              <Button
                variant="outline"
                size="icon"
                className="hover:bg-primary hover:text-primary-foreground bg-transparent playful-hover hover:rotate-12 transition-all duration-300"
                onClick={() => window.open("https://github.com/prioneto", "_blank")}
              >
                <Github className="h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="hover:bg-primary hover:text-primary-foreground bg-transparent playful-hover hover:-rotate-12 transition-all duration-300"
                style={{ animationDelay: "0.1s" }}
                onClick={() => window.open("https://www.linkedin.com/in/dimlol/", "_blank")}
              >
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="hover:bg-primary hover:text-primary-foreground bg-transparent playful-hover hover:rotate-12 transition-all duration-300"
                style={{ animationDelay: "0.2s" }}
                onClick={() => {
                  const link = document.createElement("a");
                  link.href = "/CV.pdf";
                  link.download = "Dimitris_Lolis_CV.pdf";
                  link.click();
                }}
              >
                <Download className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div className="animate-bounce hover:animate-pulse cursor-pointer" onClick={scrollToProjects}>
            <ArrowDown className="h-8 w-8 text-muted-foreground mx-auto hover:text-primary transition-colors duration-300" />
          </div>
        </div>
      </div>
    </section>
  );
}
