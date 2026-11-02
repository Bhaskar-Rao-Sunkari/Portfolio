import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { siteCopy } from "@/content/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Bhaskar Rao Sunkari" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "description",
        content:
          "From a family manufacturing business to co-founding a web agency: how Bhaskar Rao Sunkari approaches business, people and technology.",
      },
      { property: "og:title", content: "About Bhaskar Rao Sunkari" },
      {
        property: "og:description",
        content: "A story about turning ideas into practical, executable solutions.",
      },
    ],
  }),
  component: About,
});

const chapters = [
  {
    n: "I",
    title: "Growing up close to operations",
    body: "My first exposure to business wasn't a classroom — it was a family manufacturing business. Seeing how production, people and decisions connect gave me a lasting interest in how organisations actually run.",
  },
  {
    n: "II",
    title: "Teaching a team, starting an agency",
    body: "I helped a group of ambitious friends learn AI-assisted, no-code website development. Once the skills were there, I organised the work into a small agency. We secured clients and delivered real projects.",
  },
  {
    n: "III",
    title: "Studying how ventures grow",
    body: "Today I study Entrepreneurship & Innovation at the University of Greenwich in London, while staying involved in the agency's strategy, mentoring and important decisions.",
  },
  {
    n: "IV",
    title: "Discipline and learning",
    body: "What ties it together is a habit of turning ideas into something executable — and continuing to learn, whether that's operations, strategy or a new tool that makes work simpler.",
  },
];

function About() {
  return (
    <>
      <section className="mx-auto max-w-[1400px] px-5 pb-20 pt-10 md:px-10 md:pt-24">
        <p className="eyebrow text-muted-foreground">About</p>
        <h1 className="mt-6">
          <span className="display animate-rise block text-[13vw] md:text-[9rem]">Operator</span>
          <span className="serif-italic animate-rise block text-[10vw] leading-none [animation-delay:120ms] md:ml-[18%] md:text-[7rem]">
            in the making.
          </span>
        </h1>
        <div className="mt-16 grid gap-10 md:grid-cols-12">
          <p className="text-2xl leading-snug md:col-span-6 md:col-start-6 md:text-3xl">
            {siteCopy.about.introduction}
          </p>
        </div>
      </section>

      <section className="border-t border-border">
        {chapters.map((c, i) => (
          <Reveal
            key={c.n}
            className={`border-b border-border ${i % 2 === 1 ? "bg-card" : ""}`}
          >
            <div className="mx-auto grid max-w-[1400px] gap-6 px-5 py-12 md:grid-cols-12 md:px-10 md:py-24">
              <span className={`serif-italic text-5xl md:text-7xl text-muted-foreground md:col-span-2 ${i % 2 ? "md:col-start-3" : ""}`}>
                {c.n}
              </span>
              <h2 className="display text-4xl md:col-span-4 md:text-6xl">{c.title}</h2>
              <p className="text-lg leading-relaxed text-muted-foreground md:col-span-4 md:col-start-8">
                {c.body}
              </p>
            </div>
          </Reveal>
        ))}
      </section>

      <section className="mx-auto max-w-[1400px] px-5 py-16 text-center md:px-10 md:py-32">
        <Reveal>
          <p className="display text-4xl md:text-8xl">{siteCopy.about.closing[0]}</p>
          <p className="serif-italic mt-2 text-3xl md:text-7xl">
            {siteCopy.about.closing[1]}
          </p>
        </Reveal>
      </section>
    </>
  );
}
