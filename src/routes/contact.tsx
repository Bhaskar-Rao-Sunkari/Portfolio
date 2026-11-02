import { createFileRoute } from "@tanstack/react-router";
import { profile } from "@/content/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Bhaskar Rao Sunkari" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "description",
        content: "Get in touch with Bhaskar Rao Sunkari by email, LinkedIn or Instagram, or download his CV.",
      },
      { property: "og:title", content: "Contact Bhaskar Rao Sunkari" },
      { property: "og:description", content: "Email, LinkedIn, Instagram and CV download." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const rows = [
    { label: "Email", value: profile.email, href: `mailto:${profile.email}`, external: false },
    { label: "LinkedIn", value: "Connect with me", href: profile.linkedin, external: true },
    { label: "Instagram", value: "Follow along", href: profile.instagram, external: true },
    { label: "CV", value: "Download PDF", href: profile.cvPath, external: false, download: true },
  ];
  return (
    <section className="mx-auto max-w-[1400px] px-5 pb-24 pt-10 md:px-10 md:pt-24">
      <div className="grid gap-10 md:grid-cols-12">
        <div className="md:col-span-7">
          <p className="eyebrow text-muted-foreground">Contact</p>
          <h1 className="mt-6">
            <span className="display animate-rise block text-[14vw] md:text-[10rem]">Let's</span>
            <span className="serif-italic animate-rise block text-[11vw] leading-none [animation-delay:120ms] md:text-[8rem]">
              build something
            </span>
            <span className="display animate-rise block text-[14vw] [animation-delay:240ms] md:text-[10rem]">
              <span className="highlight">useful.</span>
            </span>
          </h1>
        </div>
        <p className="self-end text-base md:text-lg leading-relaxed text-muted-foreground md:col-span-4 md:col-start-9">
          Whether you're a founder with an operational problem, a recruiter, or someone who wants to
          compare notes on business and technology — I'd be glad to hear from you.
        </p>
      </div>

      <ul className="mt-12 border-t md:mt-20 border-foreground">
        {rows.map((r) => (
          <li key={r.label}>
            <a
              href={r.href}
              {...(r.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              {...(r.download ? { download: true } : {})}
              className="group grid grid-cols-[6rem_1fr_auto] items-baseline gap-4 border-b border-border py-5 md:py-8 transition-colors hover:bg-lime hover:text-lime-foreground md:grid-cols-[12rem_1fr_auto] md:px-4"
            >
              <span className="eyebrow">{r.label}</span>
              <span className="truncate text-xl md:text-5xl">{r.value}</span>
              <span aria-hidden className="text-2xl transition-transform group-hover:-rotate-45">
                {r.download ? "↓" : "→"}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
