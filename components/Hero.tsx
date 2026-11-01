import { contact, stats } from "@/lib/data";
import { GitHubIcon, MailIcon, MapPinIcon } from "./icons";

export default function Hero() {
  return (
    <section className="dot-grid border-b border-line">
      <div className="mx-auto max-w-5xl px-6 py-20 sm:py-28">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
          ENSA de Béni Mellal · Cycle ingénieur IA &amp; Cybersécurité
        </p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-ink sm:text-5xl">
          {contact.name}
        </h1>
        <p className="mt-3 text-xl font-medium text-muted sm:text-2xl">
          Je construis des produits d&rsquo;<span className="text-accent">intelligence artificielle</span> de bout en bout.
        </p>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
          {contact.pitch}
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href="#projets"
            className="rounded-full bg-accent px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accent-dark"
          >
            Découvrir mes projets
          </a>
          <a
            href={contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-accent hover:text-accent"
          >
            <GitHubIcon className="h-4 w-4" />
            GitHub
          </a>
          <a
            href={`mailto:${contact.email}`}
            className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-accent hover:text-accent"
          >
            <MailIcon className="h-4 w-4" />
            Me contacter
          </a>
        </div>

        <dl className="mt-14 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-line pt-8 sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col">
              <dt className="order-2 text-sm leading-snug text-muted">{s.label}</dt>
              <dd className="order-1 text-2xl font-bold text-accent sm:text-3xl">{s.value}</dd>
            </div>
          ))}
        </dl>

        <p className="mt-8 inline-flex items-center gap-1.5 text-sm text-muted">
          <MapPinIcon className="h-4 w-4" />
          {contact.city}
        </p>
      </div>
    </section>
  );
}
