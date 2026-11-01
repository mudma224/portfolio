import { projects, type Project } from "@/lib/data";
import { ArrowRightIcon, BotIcon, DropletsIcon, FileTextIcon, LanguagesIcon } from "./icons";

const icons = {
  bot: BotIcon,
  droplets: DropletsIcon,
  file: FileTextIcon,
  languages: LanguagesIcon,
} as const;

function ProjectCard({ project }: { project: Project }) {
  const Icon = icons[project.icon];
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-white transition-shadow hover:shadow-lg hover:shadow-accent/5">
      <div className="flex items-center gap-4 border-b border-line px-6 py-5">
        <span
          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br text-white ${project.accent}`}
        >
          <Icon className="h-6 w-6" />
        </span>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-accent">{project.domain}</p>
          <h3 className="text-lg font-bold leading-tight text-ink">{project.title}</h3>
        </div>
      </div>

      <div className="flex flex-1 flex-col px-6 py-5">
        <p className="text-sm font-semibold text-ink">{project.subtitle}</p>
        <p className="mt-2 text-sm leading-relaxed text-muted">{project.description}</p>

        <dl className="mt-5 grid grid-cols-3 gap-3">
          {project.metrics.map((m) => (
            <div key={m.label} className="rounded-lg bg-surface px-3 py-2.5">
              <dd className="text-sm font-bold text-accent">{m.value}</dd>
              <dt className="mt-0.5 text-xs leading-tight text-muted">{m.label}</dt>
            </div>
          ))}
        </dl>

        <ul className="mt-5 flex flex-wrap gap-1.5" aria-label="Technologies utilisées">
          {project.tech.map((t) => (
            <li key={t} className="rounded-md border border-line px-2 py-0.5 font-mono text-[11px] text-muted">
              {t}
            </li>
          ))}
        </ul>

        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-accent transition-colors hover:text-accent-dark"
        >
          {project.linkLabel}
          <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </a>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section id="projets" className="scroll-mt-20">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">Projets</p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-ink">
          Des produits réels, de la donnée au déploiement
        </h2>
        <p className="mt-3 max-w-2xl text-muted">
          Quatre projets menés en autonomie ou en entreprise, chacun avec une architecture documentée,
          des choix techniques assumés et des résultats mesurables.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
