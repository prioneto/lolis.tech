import { Card, CardContent } from "./ui/card";
import { Code, Palette, Zap } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-balance">
            About <span className="text-primary">Me</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-foreground">Passionate about creating digital experiences</h3>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                I&apos;m a full-stack developer with a passion for creating beautiful, functional, and user-centered digital experiences. With expertise in modern web technologies, I bring ideas to
                life through clean code and thoughtful design.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                When I&apos;m not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community.
              </p>
            </div>

            <div className="grid gap-6">
              <Card className="hover:shadow-lg transition-shadow" style={{ borderColor: "oklch(0.92 0 0 / 0.5)" }}>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-lg" style={{ backgroundColor: "oklch(0.68 0.2 25 / 0.1)" }}>
                      <Code className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Clean Code</h4>
                      <p className="text-muted-foreground">Writing maintainable, scalable solutions</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow" style={{ borderColor: "oklch(0.92 0 0 / 0.5)" }}>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-lg" style={{ backgroundColor: "oklch(0.68 0.2 25 / 0.1)" }}>
                      <Palette className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Design Focus</h4>
                      <p className="text-muted-foreground">Creating beautiful user interfaces</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow" style={{ borderColor: "oklch(0.92 0 0 / 0.5)" }}>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-lg" style={{ backgroundColor: "oklch(0.68 0.2 25 / 0.1)" }}>
                      <Zap className="h-6 w-6 text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Performance</h4>
                      <p className="text-muted-foreground">Optimizing for speed and efficiency</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
