import { involvement, timeline } from "@/lib/data";
import { BriefcaseIcon, GradCapIcon, UsersIcon } from "./icons";

const timelineIcons = {
  grad: GradCapIcon,
  briefcase: BriefcaseIcon,
} as const;

export default function Journey() {
  return (
    <section id="parcours" className="scroll-mt-20">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">Parcours</p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-ink">Formation &amp; expérience</h2>

        <div className="mt-10 grid gap-12 lg:grid-cols-[1.6fr_1fr]">
          {/* Timeline */}
          <ol className="relative space-y-10 border-l-2 border-line pl-8">
            {timeline.map((item) => {
              const Icon = timelineIcons[item.icon];
              return (
                <li key={item.period} className="relative">
                  <span className="absolute -left-[45px] flex h-8 w-8 items-center justify-center rounded-full border-2 border-accent bg-white text-accent">
                    <Icon className="h-4 w-4" />
                  </span>
                  <p className="text-sm font-semibold uppercase tracking-wider text-accent">{item.period}</p>
                  <h3 className="mt-1 font-bold leading-snug text-ink">{item.title}</h3>
                  <p className="text-sm text-muted">{item.place}</p>
                  {item.detail && <p className="mt-2 text-sm leading-relaxed text-muted">{item.detail}</p>}
                </li>
              );
            })}
          </ol>

          {/* Engagement associatif */}
          <div>
            <h3 className="flex items-center gap-2 font-bold text-ink">
              <UsersIcon className="h-5 w-5 text-accent" />
              Engagement associatif
            </h3>
            <ul className="mt-5 space-y-4">
              {involvement.map((item) => (
                <li key={item.org} className="rounded-xl border border-line bg-surface p-4">
                  <p className="font-semibold text-ink">{item.role}</p>
                  <p className="text-sm text-muted">{item.org}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
