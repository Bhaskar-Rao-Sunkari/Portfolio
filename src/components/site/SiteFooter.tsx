import { Link } from "@tanstack/react-router";
import { profile } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="bg-ink text-ink-foreground">
      <div className="mx-auto max-w-[1400px] px-5 pb-10 pt-14 md:px-10 md:pt-20">
        <p className="eyebrow text-ink-muted">Let's talk</p>
        <Link to="/contact" className="group mt-4 block">
          <span className="display block text-[15vw] leading-[0.85] md:text-[11vw]">
            Get in <span className="text-lime transition-colors group-hover:text-ink-foreground">touch</span>
          </span>
        </Link>
        <div className="mt-10 grid md:mt-16 gap-8 border-t border-ink-foreground/15 pt-8 md:grid-cols-[2fr_1fr_1fr_1fr]">
          <p className="serif-italic text-xl md:text-2xl">{profile.tagline}</p>
          <a className="link-underline text-sm" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
          <a className="link-underline text-sm" href={profile.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn ↗
          </a>
          <a className="link-underline text-sm" href={profile.instagram} target="_blank" rel="noopener noreferrer">
            Instagram ↗
          </a>
        </div>
        <p className="eyebrow mt-12 text-ink-muted">
          © {new Date().getFullYear()} {profile.name} · {profile.location}
        </p>
      </div>
    </footer>
  );
}
