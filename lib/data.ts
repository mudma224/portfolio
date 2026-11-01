export const contact = {
  name: "Thierno Mamoudou Bah",
  role: "Élève-ingénieur en Intelligence Artificielle & Cybersécurité",
  city: "Béni Mellal, Maroc",
  email: "bahsoribafrerot224@gmail.com",
  github: "https://github.com/mudma224",
  githubLabel: "github.com/mudma224",
  pitch:
    "Je conçois des produits d'intelligence artificielle de bout en bout : RAG, NLP multilingue, IoT/ML et plateformes cloud-native. 2e année du cycle ingénieur IACS à l'ENSA de Béni Mellal.",
};

export const stats = [
  { value: "4", label: "projets IA, IoT & full stack" },
  { value: "87 000", label: "paires de traduction darija–français" },
  { value: "30", label: "conteneurs orchestrés (Docker)" },
  { value: "2e", label: "année cycle ingénieur IACS" },
];

export type Project = {
  id: string;
  domain: string;
  title: string;
  subtitle: string;
  description: string;
  metrics: { value: string; label: string }[];
  tech: string[];
  link: string;
  linkLabel: string;
  icon: "bot" | "droplets" | "file" | "languages";
  accent: string; // gradient classes for the icon tile
};

export const projects: Project[] = [
  {
    id: "m3ak",
    domain: "IA générative · RAG",
    title: "M3ak",
    subtitle: "Assistant juridique & administratif bilingue",
    description:
      "Plateforme gratuite qui répond en arabe et en français sur le droit marocain et les démarches administratives. Génération augmentée par récupération (RAG) avec citations vérifiées mécaniquement et refus explicite plutôt qu'invention.",
    metrics: [
      { value: "6", label: "microservices" },
      { value: "ar + fr", label: "bilingue natif" },
      { value: "100 %", label: "citations vérifiées" },
    ],
    tech: ["Python", "FastAPI", "Next.js", "TypeScript", "PostgreSQL + pgvector", "BGE-M3", "Docker"],
    link: "https://github.com/mudma224/M3ak",
    linkLabel: "Code sur GitHub",
    icon: "bot",
    accent: "from-sky-600 to-blue-800",
  },
  {
    id: "alkatra",
    domain: "IoT · Machine Learning",
    title: "Al Katra Bel Qatra",
    subtitle: "Irrigation intelligente pour petits exploitants",
    description:
      "Plateforme développée lors de mon stage chez ZenithSoft : les capteurs publient leurs mesures en MQTT, un traitement de flux PySpark calcule les variables agro-climatiques (FAO-56) et un modèle XGBoost produit des recommandations d'irrigation expliquées, en français, arabe ou darija.",
    metrics: [
      { value: "8", label: "microservices" },
      { value: "30", label: "conteneurs Docker" },
      { value: "63", label: "fichiers de tests" },
    ],
    tech: ["NestJS", "FastAPI", "React", "MQTT", "Kafka", "PySpark", "XGBoost", "MLflow", "PostgreSQL/PostGIS"],
    link: "https://github.com/mudma224/Alkatra",
    linkLabel: "Code sur GitHub",
    icon: "droplets",
    accent: "from-cyan-600 to-teal-800",
  },
  {
    id: "warqa",
    domain: "IA documentaire · OCR",
    title: "Warqa",
    subtitle: "Extraction automatique de factures",
    description:
      "Conversion de factures (photos, scans, PDF) en données comptables structurées avec score de confiance par champ et validation humaine. Fine-tuning de transformateurs multimodaux sur le jeu de données DocILE, adaptés aux factures marocaines en préparation de la facturation électronique.",
    metrics: [
      { value: "LayoutXLM", label: "transformateurs multimodaux" },
      { value: "F1", label: "évaluation par champ" },
      { value: "HITL", label: "validation humaine" },
    ],
    tech: ["Python", "PyTorch", "Hugging Face", "LayoutXLM / LiLT", "OCR"],
    link: "https://github.com/mudma224/Warqa",
    linkLabel: "Code sur GitHub",
    icon: "file",
    accent: "from-indigo-600 to-violet-800",
  },
  {
    id: "darija",
    domain: "NLP · Traduction automatique",
    title: "Darija ↔ Français",
    subtitle: "Traduction neuronale pour une langue peu dotée",
    description:
      "Pipeline complet de traduction neuronale pour le darija marocain : consolidation de corpus locaux, Kaggle et Hugging Face, nettoyage, tokenisation SentencePiece, fine-tuning du modèle multilingue NLLB, fusion de modèles et inférence locale.",
    metrics: [
      { value: "87 000+", label: "paires de phrases" },
      { value: "NLLB", label: "fine-tuné" },
      { value: "Locale", label: "inférence hors cloud" },
    ],
    tech: ["Python", "PyTorch", "Hugging Face", "SentencePiece", "pandas"],
    link: "https://github.com/mudma224/projet_darija",
    linkLabel: "Voir le dépôt",
    icon: "languages",
    accent: "from-amber-500 to-orange-700",
  },
];

export const skills = [
  {
    category: "IA & Data Science",
    items: ["Python", "PyTorch", "Hugging Face (Transformers, NLLB)", "RAG & embeddings", "XGBoost", "scikit-learn", "MLflow", "PySpark", "pandas"],
  },
  {
    category: "Langages",
    items: ["Python", "TypeScript / JavaScript", "Java", "SQL", "Bash"],
  },
  {
    category: "Web & Cloud",
    items: ["FastAPI", "NestJS", "Next.js", "React", "Docker & Docker Compose", "CI/CD (GitHub Actions)", "Nginx", "Traefik"],
  },
  {
    category: "Données & IoT",
    items: ["PostgreSQL", "PostGIS", "pgvector", "MongoDB", "Redis", "Kafka", "MQTT (Mosquitto)", "MinIO", "Prometheus / Grafana / Loki"],
  },
];

export const timeline = [
  {
    period: "2025 — 2028",
    title: "Cycle ingénieur, Intelligence Artificielle & Cybersécurité (IACS)",
    place: "ENSA de Béni Mellal, Université Sultan Moulay Slimane",
    detail: "2e année du cycle ingénieur.",
    icon: "grad" as const,
  },
  {
    period: "Juil. — août 2026",
    title: "Stagiaire développeur — ZenithSoft, Rabat (télétravail)",
    place: "Service développement informatique",
    detail:
      "Développement de la plateforme IoT d'irrigation intelligente Al Katra Bel Qatra : architecture microservices, pipeline ML (FAO-56, XGBoost, MLflow) et démarche qualité continue.",
    icon: "briefcase" as const,
  },
  {
    period: "2023 — 2025",
    title: "Cycle préparatoire intégré",
    place: "ENSA de Béni Mellal, Université Sultan Moulay Slimane",
    detail: "Mathématiques, physique et fondamentaux de l'informatique.",
    icon: "grad" as const,
  },
];

export const involvement = [
  { role: "Project Manager", org: "ENACTUS ENSABM" },
  { role: "Responsable IA & Data Science", org: "Club de la filière IACS" },
  { role: "Responsable Scientifique", org: "ASEGUIM Béni Mellal" },
];
