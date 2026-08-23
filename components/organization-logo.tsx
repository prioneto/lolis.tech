import Image from "next/image";

interface OrganizationLogoProps {
  src: string;
  alt: string;
  className?: string;
  tone?: "light" | "dark";
}

export function OrganizationLogo({ src, alt, className = "", tone = "light" }: OrganizationLogoProps) {
  return (
    <div
      className={`relative h-12 w-12 shrink-0 overflow-hidden rounded-xl border border-border/60 shadow-sm sm:h-14 sm:w-14 ${tone === "dark" ? "bg-zinc-950" : "bg-white"} ${className}`}
    >
      <Image src={src} alt={`${alt} logo`} fill sizes="56px" className="object-contain p-2" />
    </div>
  );
}
