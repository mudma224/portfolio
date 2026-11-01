import { contact } from "@/lib/data";
import { GitHubIcon } from "./icons";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-white/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <a href="#" className="font-mono text-lg font-bold tracking-tight text-ink">
          TMB<span className="text-accent">.</span>
        </a>
        <nav className="hidden items-center gap-7 text-sm font-medium text-muted sm:flex" aria-label="Navigation principale">
          <a href="#projets" className="transition-colors hover:text-accent">Projets</a>
          <a href="#competences" className="transition-colors hover:text-accent">Compétences</a>
          <a href="#parcours" className="transition-colors hover:text-accent">Parcours</a>
          <a href="#contact" className="transition-colors hover:text-accent">Contact</a>
        </nav>
        <a
          href={contact.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-1.5 text-sm font-semibold text-ink transition-colors hover:border-accent hover:text-accent"
        >
          <GitHubIcon className="h-4 w-4" />
          GitHub
        </a>
      </div>
    </header>
  );
}
