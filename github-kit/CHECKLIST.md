# Checklist — Nettoyage du profil GitHub (30–45 min)

Objectif : quand un recruteur ouvre https://github.com/mudma224 (lien présent sur ton CV),
il doit comprendre en 10 secondes qui tu es et ce que tu sais faire.

## Étape 1 — README de profil (10 min)

1. Va sur https://github.com/new
2. Nom du dépôt : **exactement** `mudma224` (même nom que ton pseudo — GitHub le détecte comme dépôt de profil)
3. Coche **Public** et **Add a README file**
4. Crée le dépôt, puis : bouton ✏️ (Edit) du fichier README → colle tout le contenu de `PROFILE_README.md` (la partie après la première ligne `---`) → **Commit changes**

Résultat : une bannière de profil s'affiche en haut de https://github.com/mudma224

## Étape 2 — Décrire chaque dépôt public (10 min)

Sur la page de chaque dépôt : ⚙️ **About** (à droite) → remplis la **Description**, ajoute des **Topics**, sauvegarde.

| Dépôt | Description suggérée | Topics suggérés |
|---|---|---|
| `projet_darija` | Traduction automatique darija ↔ français : pipeline complet (87k+ paires, tokenisation SentencePiece, fine-tuning NLLB, inférence locale) | `nlp`, `machine-translation`, `nllb`, `huggingface`, `pytorch`, `darija`, `low-resource-languages` |
| `Taxi_Price` | Prédiction du prix des courses de taxi (Chicago) avec comparaison moindres carrés / descente de gradient — application Streamlit interactive | `machine-learning`, `regression`, `streamlit`, `scikit-learn`, `tensorflow`, `data-visualization` |
| `Gestion_incident` | Application de gestion d'incidents (Java, projet académique) | `java`, `oop` |
| `GeniLogiciel` | Codes sources des TP du module de génie logiciel | `java`, `software-engineering` |
| `first_rp` | *Option : supprime-le s'il n'apporte rien (premiers tests GitHub)* | — |

## Étape 3 — Épingler les bons dépôts (2 min)

Sur ton profil → **Customize your pins** → choisis jusqu'à 6 dépôts.
Ordre recommandé : `projet_darija`, `Taxi_Price`, puis les plus représentatifs.

## Étape 4 — Publier tes projets majeurs (15 min/projet, si tu le peux)

M3ak, Warqa et Al Katra ne sont **pas visibles** sur ton GitHub alors que ce sont tes projets
les plus impressionnants (et ils occupent la moitié de ton CV). Deux options :

- **Version publique « vitrine »** : crée un dépôt avec le README détaillé (architecture, stack, résultats chiffrés), des captures d'écran, et le code si la licence/l'accord le permet (attention : Al Katra appartient à ZenithSoft — demande l'accord avant de publier du code ; publie au minimum la description).
- **Dépôt privé → public** si tu en as le droit.

Pense aussi à : bio de profil (Profil → Edit profile) :
> Élève-ingénieur IA & Cybersécurité @ ENSA Béni Mellal · RAG · NLP · IoT · Full stack

et site web : l'URL de ton portfolio après déploiement.

## Étape 5 — Ajouter le portfolio partout (2 min)

Une fois le site en ligne (voir `DEPLOIEMENT.md`) :
- GitHub : champ **Website** du profil
- CV : remplace ou complète la ligne contact avec l'URL du portfolio
