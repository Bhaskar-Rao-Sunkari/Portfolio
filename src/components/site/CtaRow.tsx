import { profile } from "@/content/site";
import { cn } from "@/lib/utils";

const base =
  "inline-flex items-center justify-center gap-2 border px-3 py-3 text-xs font-medium transition-all duration-300 w-full sm:w-auto sm:px-5 sm:text-sm whitespace-nowrap";

export function CtaRow({ dark = false }: { dark?: boolean }) {
  const ghost = dark
    ? "border-ink-foreground/30 hover:border-lime hover:text-lime"
    : "border-foreground/25 hover:border-foreground hover:bg-foreground hover:text-background";
  return (
    <div className="grid grid-cols-2 gap-3 sm:flex sm:flex-wrap">
      <a
        href={profile.cvPath}
        download
        className={cn(base, "border-lime bg-lime text-lime-foreground hover:-translate-y-0.5")}
      >
        Download CV <span aria-hidden>↓</span>
      </a>
      <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className={cn(base, ghost)}>
        LinkedIn <span aria-hidden>↗</span>
      </a>
      <a href={profile.instagram} target="_blank" rel="noopener noreferrer" className={cn(base, ghost)}>
        Instagram <span aria-hidden>↗</span>
      </a>
      <a href={`mailto:${profile.email}`} className={cn(base, ghost)}>
        Email me <span aria-hidden>→</span>
      </a>
    </div>
  );
}
