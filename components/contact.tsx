"use client";

import { Button } from "./ui/button";
import { Mail, MapPin, Phone, Send } from "lucide-react";

export function Contact() {
  const handleEmailClick = () => {
    const subject = encodeURIComponent("Hello from your portfolio!");
    const body = encodeURIComponent("Hi Dimitris,\n\nI'd like to get in touch with you about...\n\nBest regards,");
    const mailtoLink = `mailto:dimitrios@lolis.tech?subject=${subject}&body=${body}`;
    window.open(mailtoLink, "_blank");
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-balance">
            Get In <span className="text-primary">Touch</span>
          </h2>

          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-6 text-foreground">Let&apos;s work together</h3>
            <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
              I&apos;m always interested in new opportunities and exciting projects. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="flex flex-col items-center gap-4">
                <div className="p-4 bg-primary/10 rounded-lg">
                  <Mail className="h-8 w-8 text-primary" />
                </div>
                <div className="text-center">
                  <h4 className="font-semibold text-foreground mb-2">Email</h4>
                  <p className="text-muted-foreground">dimitrios@lolis.tech</p>
                </div>
              </div>

              <div className="flex flex-col items-center gap-4">
                <div className="p-4 bg-accent/10 rounded-lg">
                  <Phone className="h-8 w-8 text-accent" />
                </div>
                <div className="text-center">
                  <h4 className="font-semibold text-foreground mb-2">Phone</h4>
                  <p className="text-muted-foreground">+31 0628510222</p>
                </div>
              </div>

              <div className="flex flex-col items-center gap-4">
                <div className="p-4 bg-secondary/10 rounded-lg">
                  <MapPin className="h-8 w-8 text-secondary" />
                </div>
                <div className="text-center">
                  <h4 className="font-semibold text-foreground mb-2">Location</h4>
                  <p className="text-muted-foreground">Enschede, Netherlands</p>
                </div>
              </div>
            </div>

            <Button
              onClick={handleEmailClick}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-4 text-lg playful-hover pulse-glow hover:scale-105 transition-all duration-300"
            >
              <Send className="mr-3 h-6 w-6" />
              Send me an Email
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
