import { createFileRoute, Link } from "@tanstack/react-router";
import { CtaRow } from "@/components/site/CtaRow";
import { Reveal } from "@/components/site/Reveal";
import { experience, heroHeadline, profile, projects, siteCopy } from "@/content/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bhaskar Rao Sunkari — People, Operations & Strategy" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "description",
        content:
          "Entrepreneurship & Innovation student and agency co-founder turning business challenges into practical solutions.",
      },
      { property: "og:title", content: "Bhaskar Rao Sunkari — Strategy & Operations" },
      {
        property: "og:description",
        content: "An emerging business leader focused on people, operations, strategy and execution.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-[1400px] px-5 pb-10 pt-8 md:px-10 md:pb-24 md:pt-16">
        <div className="flex flex-wrap items-end justify-between gap-4 border-b border-border pb-5">
          <p className="font-serif text-2xl leading-tight md:text-5xl">{profile.name}</p>
          <p className="eyebrow text-muted-foreground">{siteCopy.home.location}</p>
        </div>

        <div className="mt-8 grid gap-6 md:mt-10 md:gap-10 lg:grid-cols-12 lg:gap-6">
          <h1 className="lg:col-span-9">
            <span className="display animate-rise block text-[2.4rem] min-[380px]:text-[2.75rem] sm:text-[5.5rem] lg:text-[7.5rem] xl:text-[9.5rem]">
              {heroHeadline.line1}
            </span>
            <span className="serif-italic animate-rise block text-[2rem] leading-[1.05] [animation-delay:120ms] sm:text-[4rem] lg:text-[5rem] xl:text-[5.75rem]">
              {heroHeadline.line2}
            </span>
            <span className="display animate-rise block text-[3rem] [animation-delay:240ms] min-[380px]:text-[3.5rem] sm:text-[5.5rem] lg:text-[7.5rem] xl:text-[9.5rem]">
              {heroHeadline.line3}
            </span>
            <span className="animate-rise block [animation-delay:360ms]">
              <span className="highlight serif-italic text-[2rem] leading-[1.05] sm:text-[4rem] lg:text-[5rem] xl:text-[5.75rem]">
                {heroHeadline.line4}
              </span>
            </span>
          </h1>

          <aside className="animate-rise flex flex-col justify-end gap-8 [animation-delay:400ms] lg:col-span-3">
            <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
              {siteCopy.home.introduction}
            </p>
            <dl className="grid grid-cols-2 gap-4 border-t border-border pt-4 text-sm">
              <div>
                <dt className="eyebrow text-muted-foreground">Focus</dt>
                <dd className="serif-italic text-xl">Operations</dd>
              </div>
              <div>
                <dt className="eyebrow text-muted-foreground">Study</dt>
                <dd className="serif-italic text-xl">Greenwich</dd>
              </div>
            </dl>
          </aside>
        </div>

        <div className="mt-8 md:mt-12">
          <CtaRow />
        </div>
      </section>

      {/* Marquee band */}
      <div className="border-y border-foreground bg-foreground text-background">
        <div className="mx-auto grid max-w-[1400px] grid-cols-2 gap-4 px-5 py-5 sm:grid-cols-4 md:px-10">
          {siteCopy.home.disciplines.map((word, i) => (
            <p key={word} className="display flex items-baseline gap-1.5 text-2xl min-[400px]:text-3xl md:text-4xl">
              <span aria-hidden className="font-sans text-[10px] font-medium text-lime sm:hidden">0{i + 1}</span>
              {word}
            </p>
          ))}
        </div>
      </div>

      {/* Overview */}
      <section className="mx-auto grid max-w-[1400px] gap-10 px-5 py-14 md:grid-cols-12 md:px-10 md:py-32">
        <Reveal className="md:col-span-3">
          <p className="eyebrow text-muted-foreground">(01) Overview</p>
        </Reveal>
        <Reveal className="md:col-span-8 md:col-start-5" delay={100}>
          <p className="max-w-2xl text-2xl leading-[1.3] md:text-[2.5rem]">
            {siteCopy.home.overviewLead}
            <span className="serif-italic">{siteCopy.home.overviewLeadAccent}</span>
          </p>
          <p className="mt-8 max-w-md text-lg leading-relaxed text-muted-foreground">
            {siteCopy.home.overviewBody}
          </p>
          <Link to="/about" className="eyebrow link-underline mt-10 inline-block">
            Read my story →
          </Link>
        </Reveal>
      </section>

      {/* Selected work */}
      <section className="bg-ink text-ink-foreground">
        <div className="mx-auto max-w-[1400px] px-5 py-14 md:px-10 md:py-32">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <h2 className="display text-5xl md:text-9xl">
              Selected <span className="serif-italic normal-case text-lime">work</span>
            </h2>
            <Link to="/projects" className="eyebrow link-underline shrink-0 text-ink-muted hover:text-ink-foreground">
              All projects →
            </Link>
          </div>
          <p aria-hidden className="eyebrow mt-10 flex items-center gap-3 text-ink-muted md:mt-14 lg:hidden">
            Swipe to explore
            <span className="animate-swipe text-lime">→</span>
          </p>
          <ul aria-label={siteCopy.home.selectedWorkLabel} tabIndex={0} className="work-scroll mt-6 flex snap-x snap-mandatory gap-8 overflow-x-auto overscroll-x-contain pb-8 md:mt-8 md:gap-12 lg:mt-16">
            {projects.map((p) => (
              <li key={p.slug} className="w-[85%] shrink-0 snap-start sm:w-[65%] lg:w-[43%]">
                <Link
                  to="/projects/$slug"
                  params={{ slug: p.slug }}
                  className="flex h-full flex-col border-t border-ink-foreground/30 pt-5"
                >
                  {p.image && (
                    <span className="mb-5 block overflow-hidden border border-ink-foreground/20 md:mb-6">
                      <img
                        src={p.image}
                        alt=""
                        loading="lazy"
                        className="aspect-video w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
                      />
                    </span>
                  )}
                  <span className="flex items-baseline justify-between gap-4">
                    <span className="serif-italic text-3xl text-lime">{p.index}</span>
                    <span className="eyebrow text-ink-muted">{p.category}</span>
                  </span>
                  <h3 className="mt-6 text-2xl leading-tight md:mt-8 md:text-4xl">
                    {p.title}
                  </h3>
                  <p className="mb-6 mt-4 max-w-lg text-base md:mb-8 md:mt-6 md:text-lg leading-relaxed text-ink-muted">{p.short}</p>
                  <span className="mt-auto flex items-center justify-between gap-4 border-t border-ink-foreground/15 pt-4">
                    <span className="serif-italic text-xl text-ink-muted">{p.role}</span>
                    <span aria-hidden className="text-3xl text-lime">↗</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Approach */}
      <section className="mx-auto max-w-[1400px] max-md:bg-card px-5 py-14 md:px-10 md:py-32">
        <div className="grid gap-10 border-t border-border pt-10 lg:grid-cols-12 lg:gap-16 lg:pt-14">
          <div className="lg:col-span-5">
              <p className="eyebrow flex items-center gap-2.5 text-muted-foreground">
                <span aria-hidden className="animate-pulse-dot h-1.5 w-1.5 rounded-full bg-lime" />
                (02) Approach
              </p>
              <h2 className="mt-8">
                <span className="display block text-4xl min-[380px]:text-5xl sm:text-7xl">{siteCopy.home.approachTitle}</span>
                <span className="serif-italic mt-4 block max-w-sm text-2xl md:mt-6 md:text-4xl leading-tight text-muted-foreground">{siteCopy.home.approachSubtitle}</span>
              </h2>
          </div>
          <ol className="relative ml-2 lg:col-span-7 lg:pt-1">
            {siteCopy.home.approach.map((step, i) => (
              <Reveal as="li" key={step.title} delay={i * 70} className="relative border-l border-border pb-9 pl-7 md:pb-12 last:border-transparent last:pb-0 sm:pl-12">
                <span aria-hidden className={`absolute -left-[5px] top-0 h-[9px] w-[9px] rounded-full border border-foreground ${i === 2 ? "bg-lime" : "bg-background"}`} />
                <div className={i === 1 ? "md:ml-8" : i === 2 ? "md:ml-16" : ""}>
                  <div className="flex items-baseline gap-4">
                    <span className="serif-italic text-lg text-muted-foreground">0{i + 1}</span>
                    <h3 className="serif-italic text-3xl sm:text-5xl">{step.title}</h3>
                  </div>
                  <p className="mt-3 max-w-md text-base leading-relaxed md:mt-4 md:text-lg text-muted-foreground">{step.body}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Experience teaser */}
      <section className="border-t border-border bg-card">
        <div className="mx-auto grid max-w-[1400px] gap-10 px-5 py-14 md:grid-cols-12 md:px-10 md:py-24">
          <Reveal className="md:col-span-4">
            <p className="eyebrow text-muted-foreground">(03) Experience</p>
            <h2 className="display mt-6 text-4xl md:text-6xl">Where I've<br />taken ownership</h2>
            <Link to="/experience" className="eyebrow link-underline mt-8 inline-block">
              Full experience →
            </Link>
          </Reveal>
          <ul className="grid grid-cols-1 gap-x-6 min-[480px]:grid-cols-2 md:col-span-7 md:col-start-6 md:block">
            {experience.slice(0, 3).map((e, i) => (
              <Reveal as="li" key={e.role} delay={i * 80} className="border-b border-border py-5 md:py-6 md:first:pt-0">
                <p className="eyebrow text-muted-foreground">{e.org}</p>
                <p className="mt-2 text-xl md:text-2xl">{e.role}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
