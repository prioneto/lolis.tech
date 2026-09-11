import Image from "next/image";

interface OrganizationLogoProps {
  src: string;
  alt: string;
  className?: string;
  tone?: "light" | "dark";
}

export function OrganizationLogo({ src, alt, className = "", tone = "light" }: OrganizationLogoProps) {
  return (
    <div className={`relative h-11 w-11 shrink-0 sm:h-12 sm:w-12 ${className}`}>
      <Image src={src} alt={`${alt} logo`} fill sizes="48px" className={`object-contain ${tone === "dark" ? "invert" : ""}`} />
    </div>
  );
}
