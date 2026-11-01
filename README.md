# Portfolio — Thierno Mamoudou Bah

Site portfolio personnel construit avec **Next.js 16** (App Router) et **Tailwind CSS 4**.
100 % statique : il se déploie gratuitement où tu veux (Vercel recommandé).

## Structure

```
app/
  layout.tsx      → métadonnées SEO (titre, description, OpenGraph)
  page.tsx        → assemble les sections
  globals.css     → thème Tailwind (couleurs, police, motif de fond)
components/
  Header.tsx      → barre de navigation fixe
  Hero.tsx        → bannière d'accueil + chiffres clés
  Projects.tsx    → cartes des 4 projets
  Skills.tsx      → compétences par catégorie
  Journey.tsx     → formation, stage, engagement associatif
  Contact.tsx     → pied de page contact
  icons.tsx       → icônes SVG inline
lib/
  data.ts         → ⭐ TOUT LE CONTENU du site (textes, projets, compétences, dates)
```

**Pour modifier le contenu** (textes, projets, liens) : édite uniquement `lib/data.ts`,
puis relance le build. Pas besoin de toucher aux composants.

## Commandes

```bash
npm run dev     # serveur de développement → http://localhost:3000
npm run build   # build de production (vérifie tout)
npm run start   # sert le build de production
```

## Mise en ligne

Voir **DEPLOIEMENT.md** (Vercel en 5 minutes, gratuit).
