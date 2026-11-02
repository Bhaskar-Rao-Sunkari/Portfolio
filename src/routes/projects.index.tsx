import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { projects, siteCopy } from "@/content/site";

export const Route = createFileRoute("/projects/")({
  head: () => ({
    meta: [
      { title: "Projects & Case Studies — Bhaskar Rao Sunkari" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "description",
        content:
          "Case studies across e-commerce, service websites, manufacturing automation planning and operational tools.",
      },
      { property: "og:title", content: "Projects — Bhaskar Rao Sunkari" },
      {
        property: "og:description",
        content: "Business stories behind e-commerce, websites, automation planning and dashboards.",
      },
    ],
  }),
  component: ProjectsIndex,
});

function ProjectsIndex() {
  return (
    <section className="mx-auto max-w-[1400px] px-5 pb-24 pt-10 md:px-10 md:pt-24">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <h1 className="display animate-rise text-7xl sm:text-9xl md:text-[12rem]">Work</h1>
        <p className="serif-italic max-w-sm text-2xl text-muted-foreground">
          {siteCopy.projects.introduction}
        </p>
      </div>

      <div className="mt-16 grid gap-6 md:grid-cols-12">
        {projects.map((p, i) => {
          const layout = [
            "md:col-span-7",
            "md:col-span-5 md:mt-24",
            "md:col-span-5",
            "md:col-span-7 md:-mt-16",
          ][i % 4] ?? "";
          return (
            <Reveal key={p.slug} className={layout} delay={(i % 2) * 120}>
              <Link to="/projects/$slug" params={{ slug: p.slug }} className="group block">
                <div
                  className={`relative flex aspect-[4/3] flex-col justify-between overflow-hidden p-6 transition-colors duration-500 md:p-8 ${
                    i % 2 === 0 ? "bg-ink text-ink-foreground" : "bg-secondary"
                  }`}
                >
                  {p.image && (
                    <>
                      <img
                        src={p.image}
                        alt={p.imageAlt ?? ""}
                        loading="lazy"
                        className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
                      />
                      <span aria-hidden className="absolute inset-0 bg-ink/45" />
                    </>
                  )}
                  <div className="relative z-10 flex items-start justify-between gap-4">
                    <span className="eyebrow opacity-80">{p.category}</span>
                    <span className="serif-italic text-2xl opacity-80">{p.index}</span>
                  </div>
                  {!p.image && (
                    <span
                      aria-hidden
                      className="display absolute -bottom-6 -right-2 text-[7rem] leading-none opacity-10 transition-all duration-700 group-hover:-translate-y-3 group-hover:opacity-25 md:text-[14rem]"
                    >
                      {p.index}
                    </span>
                  )}
                  <span className="relative z-10 h-1 w-12 bg-lime transition-all duration-500 group-hover:w-32" />
                </div>
                <h2 className="mt-5 text-2xl leading-snug md:text-3xl">
                  <span className="link-underline">{p.title}</span>
                </h2>
                <p className="mt-2 text-muted-foreground">{p.short}</p>
              </Link>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
