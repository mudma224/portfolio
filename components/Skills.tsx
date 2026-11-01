import { skills } from "@/lib/data";

export default function Skills() {
  return (
    <section id="competences" className="scroll-mt-20 border-y border-line bg-surface">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">Compétences</p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-ink">Boîte à outils technique</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {skills.map((group) => (
            <div key={group.category} className="rounded-2xl border border-line bg-white p-6">
              <h3 className="font-bold text-ink">{group.category}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full bg-accent-tint px-3 py-1 text-sm font-medium text-accent-dark"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
