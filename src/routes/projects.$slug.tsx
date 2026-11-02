import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { projects, siteCopy } from "@/content/site";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = projects.find((p) => p.slug === params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.project;
    if (!p) return { meta: [{ title: "Project not found" }, { name: "robots", content: "noindex" }] };
    return {
      meta: [
        { title: `${p.title} — Bhaskar Rao Sunkari` },
        { name: "description", content: p.short },
        { property: "og:title", content: p.title },
        { property: "og:description", content: p.short },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="mx-auto max-w-[1400px] px-5 py-32 md:px-10">
      <h1 className="display text-7xl">Project not found</h1>
      <Link to="/projects" className="eyebrow link-underline mt-8 inline-block">
        ← All projects
      </Link>
    </div>
  ),
  component: CaseStudy,
});

function CaseStudy() {
  const { project: p } = Route.useLoaderData();
  const i = projects.findIndex((x) => x.slug === p.slug);
  const next = projects[(i + 1) % projects.length];

  return (
    <article>
      <header className="bg-ink text-ink-foreground">
        <div className="mx-auto max-w-[1400px] px-5 pb-16 pt-8 md:px-10 md:pt-16">
          <Link to="/projects" className="eyebrow link-underline text-ink-muted hover:text-ink-foreground">
            ← All projects
          </Link>
          <div className="mt-12 grid gap-10 md:grid-cols-12">
            <span className="serif-italic text-6xl text-lime md:col-span-2 md:text-9xl">{p.index}</span>
            <h1 className="display animate-rise text-4xl sm:text-6xl md:col-span-10 md:text-8xl">{p.title}</h1>
          </div>
          <dl className="mt-16 grid grid-cols-2 gap-6 border-t border-ink-foreground/15 pt-8 md:grid-cols-4">
            {[
              ["Client", p.client],
              ["Type", p.category],
              ["Role", p.role],
              ["Year", p.year],
            ].map(([k, v]) => (
              <div key={k}>
                <dt className="eyebrow text-ink-muted">{k}</dt>
                <dd className="serif-italic mt-1 text-xl">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </header>

      {p.image && (
        <div className="mx-auto max-w-[1400px] px-5 pt-8 md:px-10 md:pt-14">
          <img
            src={p.image}
            alt={p.imageAlt ?? ""}
            className="aspect-video w-full border border-border object-cover object-top"
          />
        </div>
      )}

      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <Reveal as="section" className="grid gap-6 border-b border-border py-10 md:grid-cols-12 md:py-24">
          <h2 className="eyebrow text-muted-foreground md:col-span-3">{siteCopy.projects.context}</h2>
          <p className="text-2xl leading-snug md:col-span-8 md:col-start-5 md:text-4xl">{p.context}</p>
        </Reveal>

        <Reveal as="section" className="grid gap-6 border-b border-border py-10 md:grid-cols-12 md:py-24">
          <h2 className="eyebrow text-muted-foreground md:col-span-3">{siteCopy.projects.approach}</h2>
          <ol className="md:col-span-8 md:col-start-5">
            {p.approach.map((a, n) => (
              <li key={a} className="flex gap-6 border-b border-border py-5 last:border-0">
                <span className="serif-italic text-2xl text-muted-foreground">{n + 1}.</span>
                <span className="text-lg leading-relaxed">{a}</span>
              </li>
            ))}
          </ol>
        </Reveal>

        <Reveal as="section" className="grid gap-10 border-b border-border py-10 md:grid-cols-12 md:py-24">
          <div className="md:col-span-3">
            <h2 className="eyebrow text-muted-foreground">{siteCopy.projects.deliverables}</h2>
            <ul className="mt-4 space-y-2">
              {p.deliverables.map((d) => (
                <li key={d} className="serif-italic text-2xl">{d}</li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-8 md:col-start-5">
            <h2 className="eyebrow text-muted-foreground">{siteCopy.projects.outcome}</h2>
            <p className="mt-4 text-2xl leading-relaxed md:text-3xl">{p.outcome}</p>
            <div className="mt-10 border-t border-border pt-6">
              <h3 className="eyebrow text-muted-foreground">{siteCopy.projects.tools}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.tools.join(" · ")}</p>
            </div>
          </div>
        </Reveal>
      </div>

      {next && <Link
        to="/projects/$slug"
        params={{ slug: next.slug }}
        className="group block border-t border-border"
      >
        <div className="mx-auto max-w-[1400px] px-5 py-12 md:px-10 md:py-24">
          <p className="eyebrow text-muted-foreground">{siteCopy.projects.next}</p>
          <p className="display mt-4 text-4xl transition-transform duration-500 group-hover:translate-x-4 md:text-8xl">
            {next.title} <span className="text-muted-foreground group-hover:text-foreground">→</span>
          </p>
        </div>
      </Link>}
    </article>
  );
}
