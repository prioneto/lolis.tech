"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  ["Work", "projects"],
  ["About", "about"],
  ["Experience", "experience"],
  ["Contact", "contact"],
] as const;

export function Navigation() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <nav aria-label="Primary navigation" className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <div className="mx-auto flex max-w-4xl items-center justify-between rounded-2xl border border-border/80 bg-background/90 px-3 py-2 shadow-[0_8px_32px_rgba(30,10,10,0.06)] backdrop-blur-xl sm:px-4">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="rounded-lg px-2 py-1.5 font-mono text-sm font-bold tracking-[-0.03em] text-foreground transition-colors hover:bg-muted hover:text-primary"
          aria-label="Back to top"
        >
          DIMITRIS<span className="text-primary">.</span>
        </button>

        <div className="hidden items-center gap-1 md:flex">
          {links.map(([label, id]) => (
            <button key={id} onClick={() => scrollTo(id)} className="rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground">
              {label}
            </button>
          ))}
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen((value) => !value)}
          className="rounded-lg p-2 text-foreground transition-colors hover:bg-muted md:hidden"
        >
          {open ? <X className="size-4" /> : <Menu className="size-4" />}
        </button>
      </div>

      {open && (
        <div id="mobile-navigation" className="mx-auto mt-2 flex max-w-4xl flex-col gap-1 rounded-2xl border border-border bg-background/95 p-2 shadow-xl backdrop-blur-xl md:hidden">
          {links.map(([label, id]) => (
            <button key={id} onClick={() => scrollTo(id)} className="rounded-xl px-4 py-3 text-left text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground">
              {label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
