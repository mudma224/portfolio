# Mise en ligne du portfolio — 5 minutes, gratuit

## Option recommandée : Vercel (la maison de Next.js)

1. **Crée le dépôt GitHub du portfolio**
   - Va sur https://github.com/new
   - Nom : `portfolio` (ou `mon-portfolio`)
   - **Public**, ne coche pas « Add a README » (le projet en a déjà un)
   - Ne crée pas le dépôt via l'interface : seulement le nom, puis... en fait crée-le vide et suis l'étape 2.

2. **Pousse le code depuis ton PC**
   Ouvre un terminal dans le dossier du projet :

   ```bash
   cd C:\Users\Mahmoud\Desktop\portfolio
   git init
   git add .
   git commit -m "Portfolio initial"
   git branch -M main
   git remote add origin https://github.com/mudma224/portfolio.git
   git push -u origin main
   ```

   (Git te demandera de te connecter à GitHub — suis la fenêtre qui s'ouvre.)

3. **Déploie sur Vercel**
   - Va sur https://vercel.com → **Sign Up → Continue with GitHub**
   - **Add New… → Project** → autorise l'accès → sélectionne le dépôt `portfolio`
   - Laisse tout par défaut → **Deploy**
   - ~1 minute après : ton site est en ligne sur `https://portfolio-<ton-id>.vercel.app`

4. **Partage l'URL**
   - Ajoute-la dans ton profil GitHub (étape 5 de `github-kit/CHECKLIST.md`)
   - Ajoute-la sur ton CV

Chaque `git push` sur `main` redéploie automatiquement le site. ✨

## Option alternative : GitHub Pages (sans compte externe)

Si tu préfères rester 100 % GitHub, Next.js peut s'exporter en site statique :

1. Dans `next.config.ts`, ajoute :
   ```ts
   const nextConfig: NextConfig = {
     output: "export",
   };
   ```
2. `npm run build` → le site statique est généré dans `out/`
3. Dépose le contenu de `out/` sur la branche `gh-pages`
   (le plus simple : activer **Settings → Pages → Source: GitHub Actions** et utiliser
   l'action officielle « Deploy static content to Pages » proposée par GitHub)

L'URL sera `https://mudma224.github.io/portfolio/`.

## Nom de domaine personnalisé (optionnel, ~12 €/an)

Plus tard, si tu veux `thiernobah.dev` ou `mamoudoubah.com` :
achète le domaine (Namecheap, Porkbun, OVH…), puis dans Vercel :
**Settings → Domains → Add** — Vercel configure les DNS pour toi.
