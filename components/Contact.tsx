import { contact } from "@/lib/data";
import { GitHubIcon, MailIcon, MapPinIcon } from "./icons";

export default function Contact() {
  return (
    <footer id="contact" className="scroll-mt-20 bg-accent-dark text-white">
      <div className="mx-auto max-w-5xl px-6 py-20 text-center">
        <h2 className="text-3xl font-bold tracking-tight">Travaillons ensemble</h2>
        <p className="mx-auto mt-3 max-w-xl text-white/80">
          Ouvert aux projets collaboratifs, stages et PFE autour de l&rsquo;intelligence artificielle,
          de l&rsquo;IoT et du développement full stack. Discutons-en !
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href={`mailto:${contact.email}`}
            className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-accent-dark transition-colors hover:bg-accent-tint"
          >
            <MailIcon className="h-4 w-4" />
            {contact.email}
          </a>
          <a
            href={contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            <GitHubIcon className="h-4 w-4" />
            {contact.githubLabel}
          </a>
        </div>
        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-white/15 pt-6 text-sm text-white/60 sm:flex-row">
          <p>© 2026 {contact.name}</p>
          <p className="inline-flex items-center gap-1.5">
            <MapPinIcon className="h-4 w-4" />
            {contact.city}
          </p>
          <p className="font-mono text-xs">Fait avec Next.js &amp; Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}
