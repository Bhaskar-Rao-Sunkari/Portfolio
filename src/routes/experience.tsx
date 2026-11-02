import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { experience } from "@/content/site";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: "Experience — Bhaskar Rao Sunkari" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "description",
        content:
          "Agency co-founder, automation project lead at Kelvin Industries, Greenwich Consulting Club committee member and more.",
      },
      { property: "og:title", content: "Experience — Bhaskar Rao Sunkari" },
      {
        property: "og:description",
        content: "Ownership, coordination and practical decisions across ventures and operations.",
      },
    ],
  }),
  component: ExperiencePage,
});

function ExperiencePage() {
  return (
    <>
      <section className="bg-ink text-ink-foreground">
        <div className="mx-auto max-w-[1400px] px-5 pb-20 pt-10 md:px-10 md:pt-24">
          <p className="eyebrow text-ink-muted">Experience</p>
          <h1 className="display animate-rise mt-6 text-[3rem] min-[380px]:text-[3.5rem] sm:text-[6rem] lg:text-[9rem] xl:text-[12rem]">
            Owner<span className="text-lime">ship</span>
          </h1>
          <p className="serif-italic mt-6 max-w-xl text-2xl text-ink-muted md:text-3xl">
            Roles where I coordinated people, solved problems and made practical decisions.
          </p>
        </div>
      </section>

      <ol className="mx-auto max-w-[1400px] px-5 md:px-10">
        {experience.map((e, i) => (
          <Reveal as="li" key={e.role} className="grid gap-6 border-b border-border py-16 lg:grid-cols-12 md:py-20">
            <div className="lg:col-span-2">
              <span className="serif-italic text-4xl md:text-6xl text-muted-foreground">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="eyebrow mt-4 text-muted-foreground">{e.kind}</p>
              <p className="eyebrow mt-1 text-muted-foreground">{e.period}</p>
            </div>
            <div className="lg:col-span-5">
              <p className="eyebrow">{e.org}</p>
              <h2 className="display mt-3 text-3xl md:text-4xl lg:text-5xl xl:text-6xl">{e.role}</h2>
            </div>
            <div className="lg:col-span-5">
              <p className="text-lg leading-relaxed">{e.summary}</p>
              <ul className="mt-6 space-y-3 border-t border-border pt-6">
                {e.points.map((p) => (
                  <li key={p} className="flex gap-3 text-muted-foreground">
                    <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 bg-lime ring-1 ring-foreground/40" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </ol>
    </>
  );
}
